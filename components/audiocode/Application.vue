<template>
  <div class="application">
    <div class="title">应用场景</div>
    <div class="desc">您所需的，正是我们现在在做的</div>
    <img :src="app_url" />
    <div class="pic_desc">用户在注册、登录认证、交易、找回密码等场景下，平台通过电话呼入手机的方式播放验证码\通知，可有效规避短信验证码拦截、刷单等行为，是短信验证\通知的强有力补充！</div>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        app_url: '/images/pic_yyyz_jycj.png'
      }
    },
  }
</script>

<style lang="scss" scoped>
$titleColor: #1c1e2b;
.application {
  width: 100%;
  height: 890px;
  padding: 98px 360px;
  box-sizing: border-box;
  background: #f4f5fa;
  text-align: center;
  .title {
    color: $titleColor;
    font-size: 44px;
  }
  .desc {
    color: #666;
    font-size: 28px;
    margin-top: 11px;
  }
  img {
    margin-top: 38px;
  }
  .pic_desc {
    width: 803px;
    color: $titleColor;
    margin: 0 auto;
    margin-top: 38px;
    line-height: 24px;
  }
}
</style>