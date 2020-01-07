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