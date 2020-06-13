import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import vuetify from "./plugins/vuetify";
import VueFullPage from "vue-fullpage.js";
import Lightbox from 'vue-my-photos';
import "material-design-icons-iconfont/dist/material-design-icons.css";


Vue.component('lightbox', Lightbox);

Vue.config.productionTip = false;

Vue.use(VueFullPage);
Vue.use(Lightbox);

new Vue({
  router,
  store,
  vuetify,
  icons: {
    iconfont: "md"
  },
  render: h => h(App)
}).$mount("#app");
