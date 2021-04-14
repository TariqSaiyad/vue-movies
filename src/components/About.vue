<template>
  <div class="container">
    <h1>ABOUT PAGE</h1>
    <h3>
      Vue.js + Vuex state management test application with API calls to movie DB
    </h3>
    <h4>
      Movie Database used: <span>https://www.themoviedb.org/</span>
    </h4>
  </div>
</template>

<script>
export default {
  name: "About",
};
</script>

<style scoped>
.container {
  min-height: 90vh;
}
h3 {
  font-family: Verdana, Geneva, Tahoma, sans-serif;
  font-weight: lighter;
}
h4{
  font-weight: lighter;
}
span{
  color: #1f8dd6;
}
</style>