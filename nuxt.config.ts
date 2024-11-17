// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: "2024-04-03",
  devtools: { enabled: true },
  css: ["./assets/css/main.css"],
  colorMode: {
    preference: "light",
  },
  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {},
    },
  },
  i18n: {
    vueI18n: "./i18n/i18n.config.ts",
  },
  modules: ["@nuxt/ui", "@nuxt/test-utils/module", "@nuxtjs/i18n"],
});
