// https://nuxt.com/docs/api/configuration/nuxt-config
export default ({
  devtools: { enabled: true },
  vite: {
    css: {
      preprocessorOptions: {
        scss: {
          additionalData: '@import "~/assets/css/main.scss";',
        }
      }
    }
  },
  modules: ["@nuxtjs/google-fonts"],

  googleFonts: {
    families: {
      'Train+One': true,
      'Kaisei+HarunoUmi': true,
    },
  },
})
