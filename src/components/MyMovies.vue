<template>
  <div class="container">
    <h1>My Movies</h1>
    <div class="movie-container">
      <div class="movie-item" v-for="movie in movies" :key="movie.id">
        <movie-card :movie="movie" :isAdded="true" @deleteMovie="deleteMovie" />
      </div>
    </div>
  </div>
</template>

<script>
import MovieCard from "./MovieCard.vue";
export default {
  name: "MyMovies",
  components: {
    MovieCard,
  },
  computed: {
    movies() {
      return this.$store.getters.movies;
    },
  },
  methods: {
    deleteMovie(movie) {
      console.log("DELETING...");
      this.$store.commit("removeMovie", movie);
    },
  },
};
</script>

<style>
.movie-container {
  display: flex;
  flex-wrap: wrap;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  align-content: center;
}

.movie-item {
  padding: 0.5em;
  flex: 0 0 17em;
}
</style>
