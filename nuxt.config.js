export default {
  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: 'CTU Main Campus - Enrollment',
    htmlAttrs: {
      lang: 'en',
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' },
      { name: 'format-detection', content: 'telephone=no' },
    ],
    link: [{ rel: 'icon', type: 'image/x-icon', href: '/CTULogo.ico' },
           { rel: 'stylesheeet', href:'https://cdn.jsdelivr.net/npm/bootstrap-icons@1.9.1/font/bootstrap-icons.css'}],
    script: [
      {
        src: 'https://cdnjs.cloudflare.com/ajax/libs/vue/2.6.10/vue.min.js',
        type: 'text/javascript',
        body: true
      },
      {
        src: 'https://cdnjs.cloudflare.com/ajax/libs/jquery/3.4.1/jquery.min.js',
        type: 'text/javascript',
        body: true
      }
    ]
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [  '~/assets/style.css',
          '~/assets/font.css',
          '~/assets/sb-admin-2.min.css'],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
    // https://go.nuxtjs.dev/eslint
    '@nuxtjs/eslint-module',
    // https://go.nuxtjs.dev/stylelint
    '@nuxtjs/stylelint-module',
  ],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    // https://go.nuxtjs.dev/bootstrap
    'bootstrap-vue/nuxt',
    '@nuxtjs/axios',
  ],

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {},
}
