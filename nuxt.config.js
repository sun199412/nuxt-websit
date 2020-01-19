
const routerBase = process.env.DEPLOY_ENV === 'GH_PAGES' ? {
  router: {
    base: '/web/'
  }
} : {}

export default {
  ...routerBase,
  mode: 'universal',
  /*
  ** Headers of the page
  */
  head: {
    title: process.env.npm_package_name || '',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: process.env.npm_package_description || '' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
    ],
    script: [
      { src: "https://api.map.baidu.com/api?v=2.0&ak=9UxhL8yiE89j3ryPL2G25msjPFzTnDGd" }
    ]
  },
  /*
  ** Customize the progress-bar color
  */
  loading: '~/components/loading.vue',
  /*
  ** Global CSS
  */
  css: [
    'element-ui/lib/theme-chalk/index.css',
    '~/assets/css/normalize.css',
    '~/assets/css/global.css',
    'swiper/dist/css/swiper.css'
  ],
  /*
  ** Plugins to load before mounting the App
  */
  plugins: [
    { src: '@/plugins/element-ui' },
    { src: '~/plugins/vue-awesome-swiper.js', ssr: false },
    { src: "~plugins/axios.js", ssr: true },
  ],
  /*
  ** Nuxt.js dev-modules
  */
  buildModules: [
  ],
  /*
  ** Nuxt.js modules
  */
  modules: ["@nuxtjs/axios", "@nuxtjs/proxy"],
  proxy: {
    //开启代理
    "/api": {
      target: "https://www.fastmock.site/mock/5ae8a35418a53e4a0a524d3c31810603",
      pathRewrite: { "^/api/": "/" }
    }
  },
  /*
  ** Build configuration
  */
  build: {
    transpile: [/^element-ui/],
    /*
    ** You can extend webpack config here
    */
    extend(config, ctx) {
    }
  }
}
