import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

Vue.config.errorHandler = (err, vm, info) => {
  alert("Oops, looks like something has gone wrong!", err)
};

createApp(App).use(store).use(router).mount('#app')
