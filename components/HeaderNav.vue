<template>
  <div class="banner" :style="{backgroundImage: 'url('+ homeImg+ ')'}">
    <header>
      <img :src="logo"/>
      <div class="navBox">
        <ul>
          <li>首页</li>
          <li>服务与产品</li>
          <li>解决方案</li>
          <li>在线体验</li>
          <li>开发中心</li>
          <li>关于我们</li>
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
          color: #FC6B00;
        }
        .register {
          background: #FC6B00;
        }
      }
    } 
  }
}
</style>