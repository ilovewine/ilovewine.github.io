import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import Vuesax from "vuesax";
import variables from "@/assets/scss/_variables.scss";

import "vuesax/dist/vuesax.css";
Vue.use(Vuesax, {
  colors: variables
});

Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount("#app");
