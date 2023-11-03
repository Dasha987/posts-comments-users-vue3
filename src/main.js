import { createApp } from 'vue'
import App from './App.vue'
import { store } from '@/store'
import directives from "@/directives/index"
import '@/assets/scss/main.scss'

const app = createApp(App)
directives.forEach(directive => {
    app.directive(directive.name, directive)
})
app.use(store)
app.mount('#app')
