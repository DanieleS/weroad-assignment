// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: "2024-04-03",
  devtools: { enabled: true },
  css: ["./assets/css/main.css"],
  app: {
    head: {
      link: [
        {
          rel: "icon",
          type: "image/x-icon",
          href: "/images/favicon/favicon.ico",
        },
        {
          rel: "apple-touch-icon",
          sizes: "180x180",
          href: "/images/favicon/apple-touch-icon.png",
        },
        {
          rel: "icon",
          type: "image/png",
          sizes: "32x32",
          href: "/images/favicon/favicon-32x32.png",
        },
        {
          rel: "icon",
          type: "image/png",
          sizes: "16x16",
          href: "/images/favicon/favicon-16x16.png",
        },
        { rel: "manifest", href: "/images/favicon/site.webmanifest" },
      ],
    },
  },
  image: {
    formats: ["webp", "avif", "jpeg"],
  },
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
  modules: [
    "@nuxt/ui",
    "@nuxt/test-utils/module",
    "@nuxtjs/i18n",
    "@nuxt/icon",
    "@nuxt/image",
  ],
});
