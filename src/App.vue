<template>
  <div id="app">
    <div class="header">
      <div class="home-menu pure-menu pure-menu-horizontal pure-menu-fixed">
        <h3 class="pure-menu-heading">VUE MOVIES</h3>
        <ul class="pure-menu-list">
          <li class="pure-menu-item pure-menu">
            <router-link to="/vue-movies" class="pure-menu-link">HOME </router-link>
          </li>
          <li class="pure-menu-item pure-menu">
            <router-link to="/vue-movies/my-movies" class="pure-menu-link"
              >MY MOVIES</router-link
            >
          </li>
          <li class="pure-menu-item pure-menu">
            <router-link to="/vue-movies/about" class="pure-menu-link">ABOUT </router-link>
          </li>
        </ul>
      </div>
    </div>

    <router-view></router-view>
  </div>
</template>

<script>
// import About from "./components/About.vue";
// import EmployeesForm from "./components/EmployeesForm.vue";
// import EmployeeTable from "./components/EmployeeTable.vue";
// import MoviesList from "./components/MoviesList.vue";

export default {
  name: "App",
  components: {
    // MoviesList,
    // About,
    // EmployeeTable,
    // EmployeesForm,
  },
  data() {
    return {
      employees: [],
    };
  },
  mounted() {
    // this.getEmployees();
  },
  methods: {
    async addEmployee(employee) {
      try {
        const response = await fetch(
          "https://jsonplaceholder.typicode.com/users",
          {
            method: "POST",
            body: JSON.stringify(employee),
            headers: { "Content-type": "application/json; charset=UTF-8" },
          }
        );
        const data = await response.json();
        this.employees = [...this.employees, data];
      } catch (e) {
        console.log(e);
      }
    },
    async deleteEmployee(id) {
      try {
        await fetch(`https://jsonplaceholder.typicode.com/users/${id}`, {
          method: "DELETE",
        });
        this.employees = this.employees.filter(
          (employee) => employee.id !== id
        );
      } catch (e) {
        console.log(e);
      }
    },
    async editEmployee(id, updated) {
      try {
        const response = await fetch(
          `https://jsonplaceholder.typicode.com/users/${id}`,
          {
            method: "PUT",
            body: JSON.stringify(updated),
            headers: { "Content-type": "application/json; charset=UTF-8" },
          }
        );
        const data = response.json();
        this.employees.map((e) => (e.id === id ? data : e));
      } catch (e) {
        console.log(e);
      }
    },
    async getEmployees() {
      try {
        const response = await fetch(
          "https://jsonplaceholder.typicode.com/users"
        );
        const data = await response.json();
        this.employees = data;
      } catch (e) {
        console.log(e);
      }
    },
  },
};
</script>

<style>
h1,
h2,
h3,
h4,
h5,
h6,
label {
  color: whitesmoke;
}

html,
body {
  margin: 0;
  background-color: #2c3e50;
}
.container {
  margin-right: auto;
  margin-left: auto;
  padding: 30px;
}

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #031828;
  margin-top: 60px;
}

.pure-button {
  background-color: #1f8dd6;
  color: white;
  padding: 0.5em 2em;
  border-radius: 5px;
}

a.pure-button-primary {
  background: white;
  color: #1f8dd6;
  border-radius: 5px;
  font-size: 120%;
}

.home-menu {
  padding: 0.5em;
  text-align: center;
}
.home-menu {
  background: #031828;
  display: flex;
  justify-content: space-between;
}
.pure-menu.pure-menu-fixed {
  border-bottom: none;
  z-index: 999;
  box-shadow: 0 4px 5px rgba(0, 0, 0, 0.3);
  align-items: center;
}

.home-menu .pure-menu-heading {
  color: white;
  font-weight: 400;
  margin: 0;
}
.router-link-exact-active {
  color: whitesmoke !important;
}

.home-menu a {
  color: #6fbef3;
}

.selected {
  color: whitesmoke !important;
}

.home-menu li a:hover,
.home-menu li a:focus {
  background: none;
  border: none;
  color: #aecfe5;
}

button {
  background: #009435;
  border: 1px solid #009435;
}

.small-container {
  max-width: 680px;
}
</style>
