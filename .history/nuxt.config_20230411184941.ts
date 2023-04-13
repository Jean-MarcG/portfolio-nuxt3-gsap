// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
    vite: {
        css: {
            preprocessorOptions: {
                scss: {
                    additionalData: '@use "@/assets/css/global/__colors.scss" as *;',
                    additionalDatas: '@use "@/assets/css/global/__fonts.scss" as *;',
                    additionalDatasz: '@use "@/assets/css/global/__ingerences.scss" as *;',
                    additionalDataszz: '@use "@/assets/css/global/__reset.scss" as *;'
                }
            }
        }
    }
})
