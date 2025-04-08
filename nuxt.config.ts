// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  app: {
    head: {
      link: [
        {
          rel: 'preconnect',
          href: 'https://fonts.googleapis.com'
        },
        {
          rel: 'preconnect',
          href: 'https://fonts.gstatic.com',
          crossorigin: 'anonymous'
        },
        {
          rel: 'stylesheet',
          href: 'https://fonts.googleapis.com/css2?family=Poppins:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap'
        }
      ]
    }
  },
  modules: ['@pinia/nuxt'],
  css: [
    'bootstrap/dist/css/bootstrap.min.css', '~/assets/scss/app.scss', 'swiper/swiper-bundle.css'
  ],
  plugins: [
    '~/plugins/piniaPersistedState.client', '~/plugins/axios', '~/plugins/toast-message'
  ],
  vite: {
    define: {
      'process.env.DEBUG': false
    }
  },
  routeRules: {
    '/**': { appMiddleware: ['redirect-not-found'] }
  }
})
