import '../css/app.css'
import { createSSRApp, h } from 'vue'
import type { DefineComponent } from 'vue'
import { createInertiaApp } from '@inertiajs/vue3'
import { resolvePageComponent } from '@adonisjs/inertia/helpers'
import AppLayout from '@/layouts/AppLayout.vue'

const appName = import.meta.env.VITE_APP_NAME || 'AdonisJS'

createInertiaApp({
  progress: { color: '#5468FF' },
  title: (title) => `${title} - ${appName}`,
  resolve: async (name) => {
    const pages = import.meta.glob<DefineComponent>('../pages/**/*.vue')
    const page = await resolvePageComponent(`../pages/${name}.vue`, pages)

    if (!page.default.layout) {
      page.default.layout = AppLayout
    }

    return page
  },
  setup({ el, App, props, plugin }) {
    createSSRApp({ render: () => h(App, props) })
      .use(plugin)
      .mount(el)
  },
})
