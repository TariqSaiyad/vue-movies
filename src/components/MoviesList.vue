<template>
  <div class="container">
    <h1>Movies</h1>
    <div class="movie-container">
      <div class="movie-item" v-for="movie in movies" :key="movie.id">
        <movie-card :movie="movie" v-on:addMovie="addMovie" />
      </div>
    </div>
  </div>
</template>

<script>
import MovieCard from "./MovieCard.vue";
export default {
  name: "MoviesList",
  components: {
    MovieCard,
  },
  mounted() {
    this.getMovies();
  },

  computed: {
    movies() {
      return this.$store.getters.allMovies;
    },
  },
  methods: {
    async getMovies() {
      await this.$store.dispatch("getMovies");
      this.movies = this.$store.getters.allMovies;
    },
    addMovie(movie) {
      console.log("ADDING...");
      this.$store.commit("addMovie", movie);
    },
  },
};
</script>

<style>

</style>
