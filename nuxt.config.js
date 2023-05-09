export default {
  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: 'COIN NODE',
    ssr: true,
    target: 'static',
    htmlAttrs: {
      lang: 'en',
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      {
        hid: 'description',
        name: 'description',
        content:
          'The COIN NODE Wallet is an easy-to-use and secure crypto wallet that makes it easy for you to buy, store, receive and transfer Bitcoin and other cryptocurrencies.',
      },
      { name: 'format-detection', content: 'telephone=no' },
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
      { rel: 'preconnect', href: 'https://fonts.googleapis.com' },
      { rel: 'preconnect', href: 'https://fonts.gstatic.com' },
      {
        href: '/css/2.6 animate.css.css',
        rel: 'stylesheet',
      },
      {
        href: '/css/barcode.css',
        rel: 'stylesheet',
      },
      {
        href: '/css/index.css',
        rel: 'stylesheet',
      },
      {
        href: '/css/walletpage.css',
        rel: 'stylesheet',
      },
      {
        href: '/css/bootstrap/bootstrap.min.css',
        rel: 'stylesheet',
      },
      {
        href: 'https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@200;300;400;500;600;700;800&display=swap',
        rel: 'stylesheet',
      },
    ],
    script: [
      { src: '/js/78d167673c.js' },
      { src: 'https://files.coinmarketcap.com/static/widget/coinMarquee.js'}
    ]
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [
    { src: '@/plugins/vue-toast.js', mode: 'client' },
    { src: '@/plugins/v-translate.js', ssr: false },
  ],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
    // https://go.nuxtjs.dev/tailwindcss
    '@nuxtjs/tailwindcss',
  ],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    // https://go.nuxtjs.dev/axios
    '@nuxtjs/axios',
  ],

  // Axios module configuration: https://go.nuxtjs.dev/config-axios
  axios: {
    // Workaround to avoid enforcing hard-coded localhost:3000: https://github.com/nuxt-community/axios-module/issues/308
    baseURL: '/',
  },

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {},
}
