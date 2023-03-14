import { createApp } from 'vue'
import App from './App.vue'
import router from './router'

//Bootstrap
import * as bootstrap from 'bootstrap'

// import './assets/main.css'
import './assets/scss/styles.scss'

const app = createApp(App)

app.use(router)

app.mount('#app')
