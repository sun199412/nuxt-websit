<template>
  <div class="communicationBox">
    <div class="title">为您提供通讯的一切</div>
    <div class="description">To provide you with all the communication</div>
    <ul class="listBox">
      <li>
        <img :src="message" />
        <div class="listBox_title">短信</div>
        <div class="listBox_description">直连通道，三网合一，5秒必达。主备通道.大容量高并发.自助平台</div>
      </li>
      <li>
        <img :src="audio" />
        <div class="listBox_title">语音</div>
        <div class="listBox_description">直连通道，三网合一，5秒必达。主备通道.大容量高并发.自助平台</div>
      </li>
      <li>
        <img :src="msgPlatform" />
        <div class="listBox_title">企业级短信平台</div>
        <div class="listBox_description">美唐自助研发核心产品，saas架构，迭代进化，满足多应用场景</div>
      </li>
      <li>
        <img :src="phonePlatform" />
        <div class="listBox_title">企业级呼叫平台</div>
        <div class="listBox_description">美唐自助研发核心产品，saas架构，迭代进化，满足多应用场</div>
      </li>
      <li>
        <img :src="wechatPlatform" />
        <div class="listBox_title">微信管理平台</div>
        <div class="listBox_description">直连通道，三网合一，5秒必达。主备通道.大容量高并发.自助平台</div>
      </li>
      <li>
        <img :src="morePlatform" />
        <div class="listBox_title">多渠道信息平台</div>
        <div class="listBox_description">整合客户已有的”沟通”服务平台，合理方案规划与建设</div>
      </li>
    </ul>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        message: "/images/ic_cp_dx.png", // 短信
        audio: "/images/ic_cp_yy.png", // 语音
        msgPlatform: '/images/ic_cp_dxpt.png', // 企业级短信平台
        phonePlatform: '/images/ic_cp_hjpt.png', // 企业级呼叫平台
        wechatPlatform: '/images/ic_cp_glpt.png', // 微信管理平台
        morePlatform: '/images/ic_cp_xxpt.png', // 多渠道信息平台
      }
    },
  }
</script>

<style lang="scss" scoped>
.communicationBox {
  width: 100%;
  height: 978px;
  padding: 98px 336px 82px 336px;
  box-sizing: border-box;
  .title {
    text-align: center;
    font-size: 44px;
    color: #1C1E2B;
    padding-bottom: 10px;
  }
  .description {
    font-size: 20px;
    color: #666;
    text-align: center;
  }
  .listBox {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    li {
      width: 400px;
      height: 367px;
      // border: 1px solid #E8E5E5;
      text-align: center;
      &:hover {
        box-shadow: 0 2px 2px 2px #ccc;
        transform: scale(1.05)
      }
      img {
        margin-top: 53px;
        margin-bottom: 29px;
      }
      .listBox_title {
        font-size: 24px;
        color: #1C1E2B;
        margin-bottom: 15px;
      }
      .listBox_description {
        width: 300px;
        margin: 0 auto;
        color: #666;
      }
    }
  }
}
</style>