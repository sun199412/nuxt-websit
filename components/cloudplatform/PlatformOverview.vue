<template>
  <div class="overview">
    <div class="title">平台概述</div>
    <div class="desc">美唐自助研发核心产品，saas架构，迭代进化，满足多应用场景</div>
    <div class="viewBox">
      <ul class="left">
        <li>
          <div class="number">1</div>
          <div class="left_desc">账户安全登录</div>
        </li>
        <li>
          <div class="number">2</div>
          <div class="left_desc">在线客服支持</div>
        </li>
        <li>
          <div class="number">3</div>
          <div class="left_desc">在线充值</div>
        </li>
        <li>
          <div class="number">4</div>
          <div class="left_desc">常见问题</div>
        </li>
      </ul>
      <img :src="platform_url" />

      <ul class="right">
        <li>
          <div class="number">5</div>
          <div class="left_desc">通讯录管理</div>
        </li>
        <li>
          <div class="number">6</div>
          <div class="left_desc">统计报表</div>
        </li>
        <li>
          <div class="number">7</div>
          <div class="left_desc">接入手册</div>
        </li>
        <li>
          <div class="number">8</div>
          <div class="left_desc">代理商入口</div>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      platform_url: "images/pic_mtypt_ptgs.png"
    };
  }
};
</script>

<style lang="scss" scoped>
$titleColor: #1c1e2b;
$activeColor: #fc6b00;
.overview {
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
  .viewBox {
    display: flex;
    .left {
      padding-top: 78px;
      li {
        width: 108px;
        margin-top: 52px;
        text-align: right;
        .number {
          width: 34px;
          height: 34px;
          border-radius: 17px;
          background: $activeColor;
          text-align: center;
          line-height: 34px;
          color: #fff;
          margin-left: 70px;
        }
        .left_desc {
          font-size: 18px;
          color: $titleColor;
          margin-top: 11px;
        }
      }
    }
    .right {
      padding-top: 78px;
      li {
        width: 108px;
        margin-top: 52px;
        text-align: left;
        .number {
          width: 34px;
          height: 34px;
          border-radius: 17px;
          background: $activeColor;
          text-align: center;
          line-height: 34px;
          color: #fff;
        }
        .left_desc {
          font-size: 18px;
          color: $titleColor;
          margin-top: 11px;
        }
      }
    }
  }
}
</style>