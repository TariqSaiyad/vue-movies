import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export const store = new Vuex.Store({
  state: {
    myMovies: [],
    allMovies: [],
  },
  actions: {
    async getMovies() {
      try {
        const data = await fetch(
          `https://api.themoviedb.org/3/discover/movie?api_key=${process.env.VUE_APP_MOVIE_API}&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=1`
        );
        const result = await data.json();
        this.commit("setAllMovies", result.results);
      } catch (e) {
        console.log(e);
      }
    },
  },
  mutations: {
    setAllMovies(state, allMovies) {
      state.allMovies = allMovies;
    },
    addMovie(state, movie) {
      state.myMovies.push(movie);
      state.allMovies = state.allMovies.filter((m) => m.id !== movie.id);
      console.log("ADDED!");
    },
    removeMovie(state, movie) {
      state.myMovies = state.myMovies.filter((m) => m.id !== movie.id);
      state.allMovies.push(movie);
      console.log("REMOVED!");
    },
  },

  getters: {
    movies: (state) => state.myMovies,
    allMovies: (state) => state.allMovies,
  },
});
