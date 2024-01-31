// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  modules: ["@nuxtjs/tailwindcss", "@pinia/nuxt", "@vueuse/nuxt"],
  devtools: { enabled: true },
  tailwindcss: {
    cssPath: "~/assets/css/main.css",
  },
});