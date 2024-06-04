// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  modules: ["@nuxtjs/tailwindcss", "@nuxt/eslint", "@nuxtjs/supabase"],
  supabase: {
    redirectOptions: {
      login: "/login",
      callback: "/confirm",
      exclude: ["/"],
    },
  },
});
