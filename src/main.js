import Vue from "vue";
import router from "./router";
import App from "./App";
import "material-icons";
// Vue.config.productionTip = false
import Vuex from "vuex";
Vue.use(Vuex);
import { store } from './store/store'

new Vue({
  render: (h) => h(App),
  router,
  store,
  components: { App },
}).$mount("#app");
