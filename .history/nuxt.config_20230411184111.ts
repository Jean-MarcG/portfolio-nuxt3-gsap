// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
    vite: {
        css: {
            preprocessorOptions: {
                scss: {
                    additionalData: '@use "@/assets/css/global/__colors.scss" as *;';
                    additionalData: '@use "@/assets/css/global/__colors.scss" as *;'
                }
            }
        }
    }
})
