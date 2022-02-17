require('dotenv').config();

export default {
  mode: 'universal',
  server: {
    port: 3000,
    host: '0.0.0.0'
  },
  /*
  ** Headers of the page
  */
  head: {
    title: process.env.npm_package_name || '',
    meta: [
      {charset: 'utf-8'},
      {name: 'viewport', content: 'width=device-width, initial-scale=1'},
      {hid: 'description', name: 'description', content: process.env.npm_package_description || ''}
    ],
    link: [
      {rel: 'icon', type: 'image/x-icon', href: '/favicon.ico'}
      // { rel: 'icon', type: 'image/x-icon', href: 'https://lumen-image-bucket.s3.eu-central-1.amazonaws.com/logo/favicon.ico' }
    ],
    script: [
      {
        src: '//code-ya.jivosite.com/widget/2EfbaT2QPD',
        async: "true"
      }
    ]
  },
  /*
  ** Customize the progress-bar color
  */
  loading: { color: 'red' },
  /*
  ** Global CSS
  */
  css: [
  ],
  /*
  ** Plugins to load before mounting the App
  */
  plugins: [
    '~/plugins/vue-lodash',
    '~/plugins/axios'
  ],
  /*
  ** Nuxt.js dev-modules
  */
  buildModules: [
    '@nuxtjs/tailwindcss'
  ],
  /*
  ** Nuxt.js modules
  */
  modules: [
    // Doc: https://axios.nuxtjs.org/usage
    '@nuxtjs/axios',
    ['@nuxtjs/google-analytics', {
      id: ''
    }],
    ['@nuxtjs/yandex-metrika', {
      id: '82181533',
      webvisor: true,
      clickmap:true,
      useCDN:false,
      trackLinks:true,
      accurateTrackBounce:true,
    }],
  ],
  /*
  ** Axios module configuration
  ** See https://axios.nuxtjs.org/options
  */
  axios: {
  },
  /*
  ** Build configuration
  */
  build: {
    analyze :true,

    /*
    ** You can extend webpack config here
    */
    extend (config, ctx) {
    }
  }
}
