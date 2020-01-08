<template>
  <div class="choose">
    <div class="title">为什么选择我们</div>
    <div class="description">Why choose us</div>
    <ul class="contentBox">
      <li>
        <img :src="speed" />
        <div class="listBox_title">更牛的速度</div>
        <div class="listBox_description">全网5秒到达，速度决定 价值！</div>
      </li>
      <li>
        <img :src="resourse" />
        <div class="listBox_title">资质与资源</div>
        <div class="listBox_description">云联动主机更可靠，数据 加密传输</div>
      </li>
      <li>
        <img :src="safe" />
        <div class="listBox_title">安全防护</div>
        <div class="listBox_description">云联动主机更可靠，数据 加密传输</div>
      </li>
      <li>
        <img :src="platform" />
        <div class="listBox_title">自助平台</div>
        <div class="listBox_description">良好的sass界面，按需所用 报表清晰</div>
      </li>
      <li>
        <img :src="service" />
        <div class="listBox_title">专业服务</div>
        <div class="listBox_description">专业运维人员，统一管理与监控 7x24一对一专属客服</div>
      </li>
      <li>
        <img :src="morePlatform" />
        <div class="listBox_title">自主知识产权</div>
        <div class="listBox_description">10年技术积累，BOSS网关自主研发 10余项软件著作权</div>
      </li>
    </ul>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        speed: "/images/ic_ys_sd.png", // 更牛的速度
        resourse: "/images/ic_ys_zy.png", // 资质与资源
        safe: '/images/ic_ys_fh.png', // 安全防护
        platform: '/images/ic_ys_zz.png', // 自助平台
        service: '/images/ic_ys_fw.png', // 专业服务
        morePlatform: '/images/ic_ys_cq.png', // 自主知识产权
      }
    },
  }
</script>

<style lang="scss" scoped>
.choose {
  width: 100%;
  height: 927px;
  padding: 95px 50px;
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
  .contentBox {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    li {
      width: 280px;
      text-align: center;
      margin: 60px 100px;
      .listBox_title {
        color: #1C1E2B;
        font-size: 24px;
        margin-top: 15px;
      }
      .listBox_description {
        color: #666;
        margin-top: 15px;
      }
    }
  }
}
</style>