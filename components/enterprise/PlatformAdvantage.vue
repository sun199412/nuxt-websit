<template>
  <div class="Box">
    <div class="title">平台优势</div>
    <div class="description">多渠道通信服务平台</div>
    <ul class="listBox">
      <li>
        <img :src="jc" />
        <div class="listBox_title">短信</div>
        <div class="listBox_description">直连通道，三网合一，5秒必达。主备通道.大容量高并发.自助平台</div>
      </li>
      <li>
        <img :src="hlh" />
        <div class="listBox_title">语音</div>
        <div class="listBox_description">直连通道，三网合一，5秒必达。主备通道.大容量高并发.自助平台</div>
      </li>
      <li>
        <img :src="func" />
        <div class="listBox_title">企业级短信平台</div>
        <div class="listBox_description">美唐自助研发核心产品，saas架构，迭代进化，满足多应用场景</div>
      </li>
      <li>
        <img :src="safe" />
        <div class="listBox_title">企业级呼叫平台</div>
        <div class="listBox_description">美唐自助研发核心产品，saas架构，迭代进化，满足多应用场</div>
      </li>
      <li>
        <img :src="service" />
        <div class="listBox_title">微信管理平台</div>
        <div class="listBox_description">直连通道，三网合一，5秒必达。主备通道.大容量高并发.自助平台</div>
      </li>
      <li>
        <img :src="up" />
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
        jc: "/images/ic_ecp_jc.png",
        hlh: "/images/ic_ecp_hlh.png",
        func: '/images/ic_si_gnff.png',
        safe: '/images/ic_yzm_safe.png',
        service: '/images/ic_si_dzfw.png',
        up: '/images/ic_si_sjfw.png',
      }
    },
  }
</script>

<style lang="scss" scoped>
$titleColor: #1C1E2B;
.Box {
  width: 100%;
  height: 978px;
  padding: 98px 336px 82px 336px;
  box-sizing: border-box;
  .title {
    text-align: center;
    font-size: 44px;
    color: $titleColor;
    padding-bottom: 10px;
  }
  .description {
    font-size: 28px;
    color: #666;
    text-align: center;
  }
  .listBox {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    margin-top: 23px;
    li {
      width: 400px;
      height: 367px;
      text-align: center;
      img {
        margin-top: 53px;
        margin-bottom: 29px;
      }
      .listBox_title {
        font-size: 24px;
        color: $titleColor;
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