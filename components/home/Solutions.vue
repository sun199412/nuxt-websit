<template>
  <div class="solutions">
    <div class="title">专业的解决方案</div>
    <div class="description">Professional solutions</div>
    <div class="tabBox">
      <el-tabs v-model="activeName" @tab-click="handleClick">
        <el-tab-pane label="互联网企业" name="1" class="tabItem"></el-tab-pane>
        <el-tab-pane label="电商行业" name="2"></el-tab-pane>
        <el-tab-pane label="教育行业" name="3"></el-tab-pane>
        <el-tab-pane label="物流行业" name="4"></el-tab-pane>
        <el-tab-pane label="金融行业" name="5"></el-tab-pane>
        <el-tab-pane label="餐饮行业" name="6"></el-tab-pane>
      </el-tabs>
      <div v-if="activeName==='1'" class="tabPane">
        <div class="tabPaneLft">
          <div class="tabPaneLftItem isfirst">
            <div class="tabPaneLftItemText">【xx网约车】尊敬的用户您好，为了更好的为您提供服务，您可关注绑定我司的微信公众号：XXXXX详情查询，退订回复TD。</div>
            <div class="triangle"></div>
          </div>
          <div class="tabPaneLftItem">
            <div class="tabPaneLftItemText">【xx网约车】尊敬的用户您好，为了更好的为您提供服务，您可关注绑定我司的微信公众号：XXXXX详情查询，退订回复TD。</div>
            <div class="triangle"></div>
          </div>
        </div>
        <img :src="solutionsImg" class="tabPanePic"/>
        <div class="tabPaneLft">
          <div class="tabPaneLftItem isfirst">
            <div class="tabPaneLftItemText">【xx娱乐】尊敬的用户您好，您手机尾号[XXXX]的申请已通过审批，请登录APP确认</div>
            <div class="triangle2"></div>
          </div>
          <div class="tabPaneLftItem">
            <div class="tabPaneLftItemText">【xx娱乐】尊敬的用户您好，您手机尾号[XXXX]的申请已通过审批，请登录APP确认</div>
            <div class="triangle2"></div>
          </div>
          <div class="tabPaneLftItem">
            <div class="tabPaneLftItemText">【xx娱乐】尊敬的用户您好，您手机尾号[XXXX]的申请已通过审批，请登录APP确认</div>
            <div class="triangle2"></div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        activeName: '1',
        solutionsImg: '/images/pic_jjfa.png'
      }
    },
    methods: {
      handleClick(tab, event) {
        console.log(tab, event);
      }
    }
  }
</script>

<style lang="scss">
$activeColor: #FC6B00;
.el-tabs__item {
  font-size: 18px;
  padding: 0 72px;
  &:hover {
    color: $activeColor;
  }
}
.el-tabs__active-bar {
  background-color: $activeColor;
}
.el-tabs__item.is-active {
  color: $activeColor;
}
</style>

<style lang="scss" scoped>
$titleColor: #1C1E2B;
.solutions {
  width: 100%;
  height: 1000px;
  background: #f4f5fa;
  padding: 98px 360px 107px 360px;
  box-sizing: border-box;
  .title {
    text-align: center;
    font-size: 44px;
    color: $titleColor;
    padding-bottom: 17px;
  }
  .description {
    font-size: 20px;
    color: #666;
    text-align: center;
    margin-bottom: 71px;
  }
  .tabBox {
    .tabPane {
      margin-top: 66px;
      display: flex;
      justify-content: space-between;
      .tabPaneLft {
        width: 241px;
        .tabPaneLftItem {
          position: relative;
          margin-top: 25px;
          .tabPaneLftItemText {
            width: 215px;
            padding: 17px 20px 45px 20px;
            box-sizing: border-box;
            background: #fff;
            border-radius: 5px;
            color: #666;
            font-size: 14px;
          }
          .triangle {
            width: 0;
            height: 0;
            border: solid;
            border-width: 14px 14px 14px 14px;
            border-color: transparent transparent transparent #fff;
            position: absolute;
            right: 0;
            top: 50%;
            margin-top: -14px;
          }
          .triangle2 {
            @extend .triangle;
            border-color: transparent #fff transparent transparent;
            left: -28px;
          }
        }
        .isfirst {
          margin-top: 0;
        }
      }
      // .tabPaneRight {
      //   width: 241px;
      // }
    }
  }
}
</style>