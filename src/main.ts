import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import VueCookies from 'vue-cookies'

/* add fontawesome core */
import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import { faKiwiBird } from '@fortawesome/free-solid-svg-icons'

/* add font-awesome icons to the library */
library.add(faKiwiBird)

window.addEventListener('error', (event) => {
  alert("Oops, looks like something has gone wrong!" + event)
});


// Vue.config.errorHandler = (err, vm, info) => {
//   alert("Oops, looks like something has gone wrong!", err)
// };

createApp(App).use(store).use(router).use(VueCookies).component('font-awesome-icon', FontAwesomeIcon).mount('#app')

// Add a global error handler
window.addEventListener('error', (event) => {
  alert("Oops, looks like something has gone wrong!" + event)
}
)
