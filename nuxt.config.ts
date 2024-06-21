// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  modules: ['nuxt-directus-next'],

  directus: {
    url: 'https://directus.example.com',
  },
})
