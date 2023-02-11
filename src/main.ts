import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import VueCookies from 'vue-cookies'

window.addEventListener('error', (event) => {
  alert("Oops, looks like something has gone wrong!" + event)
});


// Vue.config.errorHandler = (err, vm, info) => {
//   alert("Oops, looks like something has gone wrong!", err)
// };

createApp(App).use(store).use(router).use(VueCookies).mount('#app')

// Add a global error handler
window.addEventListener('error', (event) => {
  alert("Oops, looks like something has gone wrong!" + event)
}
)
