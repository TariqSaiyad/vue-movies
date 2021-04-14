<template>
  <div class="card fade-in">
    <figure class="card__image">
      <img :src="this.imgPath" alt="Short description" />
    </figure>
    <div class="card__body">
      <div class="card__actions">
        <span v-if="isAdded" class="material-icons red btn" @click="doDelete"
          >delete</span
        >
        <span v-else class="material-icons green btn" @click="doAdd"
          >check</span
        >
      </div>
      <div>
        <h3 class="card__name">{{ movie.title }}</h3>
        <p class="card__date">{{ movie.release_date }}</p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "MovieCard",
  props: {
    movie: Object,
    isAdded: Boolean,
    deleteMovie: Function,
    addMovie: Function,
  },
  data() {
    return {
      pre: "https://image.tmdb.org/t/p/w500",
    };
  },
  computed: {
    imgPath() {
      return this.pre + this.movie.poster_path;
    },
  },
  methods: {
    doDelete() {
      this.$emit("deleteMovie", this.movie);
    },
    doAdd() {
      this.$emit("addMovie", this.movie);
    },
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.card {
  position: relative;
  grid-area: card;
  align-self: center;
  justify-self: center;
  overflow: hidden;
  display: block;
  width: 100%;
  background-color: rgba(0, 0, 0, 1);
  height: 24em;
  border-radius: 8px;
  box-shadow: 0 16px 60px rgba(0, 0, 0, 0.3);
  cursor: pointer;
  transition: all 50ms ease;
}

.card:hover {
  box-shadow: 0 40px 50px rgba(0, 0, 0, 0.6);
}

.card__image {
  width: 100%;
  height: 100%;
  margin: 0%;
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  position: absolute;
  transition: all 100ms ease;
  transform: scale(1, 1);
  background: linear-gradient(to bottom, rgba(0, 0, 0, 1), rgba(0, 0, 0, 0.5));
}

.card__image img {
  width: 100%;
  height: 100%;
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  position: relative;
  transition: all 100ms ease;
}

.card:hover .card__image {
  transform: scale(1.1);
  opacity: 0.5;
}

.card__body {
  display: flex;
  height: 100%;
  flex-direction: column;
  justify-content: space-between;
  padding: 20px;
  background: linear-gradient(to bottom, rgba(0, 0, 0, 0), rgba(0, 0, 0, 0.9));

  opacity: 0;
  transform: translateY(100%);
  transition: all 200ms ease;
}

.card:hover .card__body {
  transform: translateY(0%);
  opacity: 0.9;
}

.card__name {
  margin-bottom: 2px;
  color: white;
  z-index: 99;
  font-weight: lighter;
  letter-spacing: 0.1rem;
  text-align: left;
  text-transform: uppercase;
  text-shadow: 0 1px 2px rgba(0, 0, 0, 0.55);
  -webkit-text-fill-color: transparent;
  -webkit-transition: all 150ms ease;
  -webkit-background-clip: text;
  transition: all 150ms ease;
}

.card:hover .card__name {
  background: -webkit-linear-gradient(white, #c1c1c1);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
}

.card__date {
  z-index: 99;
  align-self: left;
  text-align: left;
  justify-self: left;
  text-transform: uppercase;
  text-shadow: 0 0.5px 1px rgba(0, 0, 0, 0.45);
  color: rgba(255, 255, 255, 0.7);
  padding-bottom: 20px;
}

.card__actions {
  display: flex;
  justify-content: flex-end;
}

.fade-in {
  animation: fadeIn 300ms;
  -webkit-animation: fadeIn 300ms;
  -moz-animation: fadeIn 300ms;
  -o-animation: fadeIn 300ms;
  -ms-animation: fadeIn 300ms;
}
@keyframes fadeIn {
  0% {
    opacity: 0;
  }
  100% {
    opacity: 1;
  }
}

.green {
  background-color: #4caf50;
}
.red {
  background-color: #ef5350;
}

.btn {
  padding: 0.5rem;
  border-radius: 50%;
  opacity: 1;
  color: white;
  transition: all 100ms ease;
}

.btn:hover {
  transform: scale(1.1);
}
.btn:active {
  transform: scale(0.9);
}
</style>
