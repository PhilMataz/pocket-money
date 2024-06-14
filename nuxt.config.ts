// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  modules: [
    "@nuxtjs/tailwindcss",
    "@nuxt/eslint",
    "@nuxtjs/supabase",
    "nuxt-lucide-icons",
  ],
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
