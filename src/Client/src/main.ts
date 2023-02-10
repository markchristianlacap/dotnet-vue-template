import { setupLayouts } from 'virtual:generated-layouts'
import { createRouter, createWebHistory } from 'vue-router'
import App from './App.vue'
import type { UserModule } from './types/module'
import generatedRoutes from '~pages'
import './styles/main.css'
import 'uno.css'

const app = createApp(App)
const routes = setupLayouts(generatedRoutes)
const router = createRouter({ history: createWebHistory(), routes })
app.use(router)

Object.values(
  import.meta.glob<{ install: UserModule }>('./modules/*.ts', {
    eager: true,
  }),
).forEach(i => i.install?.({ app, router, routes }))

app.mount('#app')
