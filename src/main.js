import { createApp, defineAsyncComponent } from 'vue'
import App from './App.vue'
import './style.css'

const app = createApp(App)

app.mount('#app')
// createApp(App).mount('#app')

app.component('app-async', defineAsyncComponent( ()=> {
  return import('./components/AppAsync')
}))
