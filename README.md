# nuxt-websit

> My superior Nuxt.js project

## Build Setup

``` bash
# install dependencies
$ npm run install

# serve with hot reload at localhost:3000
$ npm run dev

# build for production and launch server
$ npm run build
$ npm run start

# generate static project
$ npm run generate
```

For detailed explanation on how things work, check out [Nuxt.js docs](https://nuxtjs.org).

# 开发攻略：
## 1. 图片放在Static文件夹下，引入不用带static目录
```
    <div class="banner" :style="{backgroundImage: 'url('+ homeImg+ ')'}">

    export default {
        data() {
        return {
            homeImg: '/images/pic_home_banner.png', // 首页图
        }
        },
    }
```

## 2. 使用sass
    cnpm install --save sass-loader node-sass scss-loader

## 3. nuxt.js中使用vue-awesome-swiper
1. 安装vue-awesome-swiper
    * npm install --save vue-awesome-swiper

2. 在plugins文件夹下创建vue-awesome-swiper.js,并写入：
```
    import Vue from 'vue'
    import VueAwesomeSwiper from 'vue-awesome-swiper/dist/ssr'
    
    Vue.use(VueAwesomeSwiper)
```

3. 在nuxt.config.js里配置：
```
    css: [
        'swiper/dist/css/swiper.css'
    ],
    plugins: [
        { src: '~/plugins/vue-awesome-swiper.js', ssr: false }
    ],
```

4. 使用：
```
    <div v-swiper:mySwiper="swiperOption">
      <div class="swiper-wrapper">
        <div class="swiper-slide" v-for="item in picArr" :key="item.id">
          <img :src="item.picUrl" />
        </div>
      </div>
      <div class="swiper-pagination"></div>
    </div>

    data() {
        return {
            swiperOption: {
                slidesPerView: 5,
                slidesPerColumn: 2,
                pagination: {
                el: ".swiper-pagination",
                clickable: true,
                paginationType: ""
                }
            },
            picArr: [
                { id: "00000000", picUrl: "/images/pic_ke_dx_nor.png" },
                { id: "00000001", picUrl: "/images/pic_ke_jtdx_nor.png" },
                { id: "00000002", picUrl: "/images/pic_ke_lt_nor.png" },
                { id: "00000003", picUrl: "/images/pic_ke_tk_nor.png" },
                { id: "00000004", picUrl: "/images/pic_ke_xhw_nor.png" },
                { id: "00000005", picUrl: "/images/pic_ke_xndx_nor.png" },
                { id: "00000006", picUrl: "/images/pic_ke_xx_nor.png" },
                { id: "00000007", picUrl: "/images/pic_ke_yd_pre.png" },
                { id: "00000008", picUrl: "/images/pic_ke_yhcs_nor.png" },
                { id: "00000009", picUrl: "/images/pic_ke_zsj_nor.png" }
            ]
        };
    }

    .swiper-container {
        width: 1240px;
        margin: 0 auto;
        display: flex;
        flex-wrap: wrap;
        .swiper-slide {
            width: 208px !important;
            margin-top: 40px !important;
            height: 90px;
            margin-right: 40px !important;
        }
    }
```