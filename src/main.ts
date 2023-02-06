import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

window.addEventListener('error', (event) => {
  alert("Oops, looks like something has gone wrong!" + event)
});

createApp(App).use(store).use(router).mount('#app')
