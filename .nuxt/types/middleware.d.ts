import type { NavigationGuard } from 'vue-router'
export type MiddlewareKey = string
declare module "/Users/jim_bien/VScode/portfolio-jm-gsap/node_modules/nuxt/dist/pages/runtime/composables" {
  interface PageMeta {
    middleware?: MiddlewareKey | NavigationGuard | Array<MiddlewareKey | NavigationGuard>
  }
}