import { createApp } from 'vue' //if no path is givien it automatically goes to the node_modules folder
import App from './App.vue'
import router from './router'

import './assets/main.css'

const app = createApp(App)

app.use(router)

app.mount('#app')
