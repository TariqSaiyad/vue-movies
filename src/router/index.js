import Vue from "vue";
import Router from "vue-router";
import About from "../components/About";
import MoviesList from "../components/MoviesList";
import MyMovies from "../components/MyMovies";

Vue.use(Router);

export default new Router({
  mode: "history",
  routes: [
    {
      path: "/vue-movies/about",
      name: "About",
      component: About,
    },
    {
      path: "/vue-movies",
      name: "MoviesList",
      component: MoviesList,
    },
    {
      path: "/vue-movies/my-movies",
      name: "MyMovies",
      component: MyMovies,
    },
  ],
});
