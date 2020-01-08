<template>
  <div class="banner" :style="{backgroundImage: 'url('+ homeImg+ ')'}">
    <header>
      <img :src="logo"/>
      <div class="navBox">
        <ul>
          <li><nuxt-link to="/">首页</nuxt-link></li>
          <li><nuxt-link to="/a">服务与产品</nuxt-link></li>
          <li><nuxt-link to="/b">解决方案</nuxt-link></li>
          <li><nuxt-link to="/c">在线体验</nuxt-link></li>
          <li><nuxt-link to="/d">开发中心</nuxt-link></li>
          <li><nuxt-link to="/e">关于我们</nuxt-link></li>
        </ul>
        <div class="btnBox">
          <el-button class="login">登录</el-button>
          <el-button type="warning" class="register">注册有礼</el-button>
        </div>
      </div>
    </header>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        homeImg: '/images/pic_home_banner.png', // 首页图
        logo: '/images/pic_home_logo.png'
      }
    },
  }
</script>

<style lang="scss" scoped>
$activeColor: #FC6B00;

.banner {
  width: 100%;
  height: 780px;
  background: no-repeat center;
  header {
    height: 102px;
    display: flex;
    justify-content: space-between;
    align-content: center;
    padding: 33px 40px;
    box-sizing: border-box;
    img {
      width: 162.92px;
      height: 27.19px;
      margin-top: 5px;
    }
    .navBox {
      display: flex;
      ul {
        display: flex;
        margin-top: 5px;
        li {
          margin: 0 22px;
          font-size: 22px;
          color: #fff;
          a {
            text-decoration: none;
            color: #fff;
          }
          .nuxt-link-exact-active {
            color: $activeColor;
          }
        }
      }
      .btnBox {
        margin-left: 21px;
        button {
          height: 36px;
          width: 95px;
          padding-top: 10px;
        }
        .login {
          color: $activeColor;
        }
        .register {
          background: $activeColor;
        }
      }
    } 
  }
}
</style>