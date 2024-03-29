import { createApp } from 'vue'
import App from './App-nexttick.vue'
import registerDirectives from './directives'

const app = createApp(App)
registerDirectives(app)
app.mount('#app')
