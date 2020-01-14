<template>
  <div class="introduce">
    <div class="title">关于我们</div>
    <div class="content">
      <h5>企业价值观</h5>
      <h2>以人为本 开放共赢</h2>
      <p>重庆美唐科技有限公司专注于云通信和IT信息技术集成，致力于为企业级客户提供融合通信、行业管理系统、软件系统集成开发。</p>
      <p>经过多年的发展，公司目前拥有3大产品业务线:美唐云meitangyun.com(短信、语音、呼叫中心等)、客管家keguanjia.cn(零售、餐饮、酒店等行业核心管理系统)、IT技术服务(政企软件集成开发)</p>
      <p class="top">公司的核心研发及销售团队，拥有10年以上的工作经历，丰富的企业级客户信息化经验。</p>
      <p>重庆美唐科技有限公司是中国移动的在网合作伙伴，是中国移动”云MAS”供应商，公司与深信服、东进、新华网、中冶赛迪等公司长期保持着产品或项目合作。</p>
      <div class="into">
        <img :src="base_url" />
        <div class="textBox">
          <div class="text">选择我们就是选择专业</div>
          <div class="text2">CHOOSE US</div>
          <div class="text3">IS TO CHOOSE MAJOR</div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      base_url: "images/pic_aboutus_img.png"
    };
  }
};
</script>

<style lang="scss" scoped>
$titleColor: #1c1e2b;
.introduce {
  width: 100%;
  padding: 98px 360px;
  box-sizing: border-box;
  .title {
    text-align: center;
    color: $titleColor;
    font-size: 44px;
    margin-bottom: 100px;
  }
  .content {
    width: 100%;
    h5 {
      font-size: 18px;
      color: #666;
      margin: 0;
    }
    h2 {
      font-size: 44px;
      color: $titleColor;
      margin: 18px 0 43px 0;
      padding-bottom: 53px;
      border-bottom: 1px solid #e8e5e5;
    }
    p {
      color: #666;
      line-height: 16px;
    }
    .top {
      margin-top: 32px;
    }
    .into {
      display: flex;
      .textBox {
        width: 100%;
        display: flex;
        flex-direction: column;
        justify-content: center;
        .text {
          font-size: 24px;
          color: $titleColor;
          margin-left: 31px;
        }
        .text2 {
          font-size: 54px;
          color: $titleColor;
          margin: 17px 0 4px 81px;
        }
        .text3 {
          font-size: 22px;
          color: $titleColor;
          margin-left: 54px;
        }
      }
    }
  }
}
</style>