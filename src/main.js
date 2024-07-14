import Vue from 'vue'
import App from './App.vue'
import vuetify from './plugins/vuetify';
import VueYouTubeEmbed from 'vue-youtube-embed'
import emailjs from 'emailjs-com';
// import 'firebase/firestore'

Vue.use(VueYouTubeEmbed)
Vue.config.productionTip = false

emailjs.init("B3_fPQO_fwF79_WO-"); // Reemplaza con tu User ID de EmailJS

// export const db = firebase.firestore()

new Vue({
  vuetify,
  render: h => h(App)
}).$mount('#app')
