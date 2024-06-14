// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  modules: ["@nuxtjs/tailwindcss", "@nuxt/eslint", "@nuxtjs/supabase"],
  supabase: {
    redirectOptions: {
      login: "/sign-in",
      callback: "/confirm",
      exclude: ["/", "/sign-up", "sign-in"],
    },
  },
  build: {
    transpile: ["vue-countup-v3"],
  },
});
