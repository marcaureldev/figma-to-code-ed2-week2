// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  css: ['~/assets/css/main.css',
    '~/assets/css/chillax.css',
    '~/assets/css/archivo.css',
  ],

  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {},
    },
  },

  modules: [
    '@nuxtjs/tailwindcss',
    "@pinia/nuxt",
  ],
  compatibilityDate: '2024-08-07',
})