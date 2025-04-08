import { createInertiaApp } from '@inertiajs/vue3'
import { resolvePageComponent } from 'laravel-vite-plugin/inertia-helpers'
import { createApp, h } from 'vue'
import AppLayout from './layouts/AppLayout.vue'

createInertiaApp({
  resolve: name => {
    const page = resolvePageComponent(`./Pages/${name}.vue`, import.meta.glob('./Pages/**/*.vue'))
    page.then((module) => {
      module.default.layout = module.default.layout || AppLayout
    })
    return page
  },
  // ... konfigurasi lainnya
})