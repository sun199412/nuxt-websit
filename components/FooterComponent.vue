<template>
  <footer>
    <div class="title">马上体验美唐云</div>
    <el-input placeholder="请输入内容" v-model="input">
      <template slot="append">免费体验</template>
    </el-input>
    <div class="footerWeb">
      <div class="footerWebService">
        <div class="production">
          <div class="production_title">美唐云产品</div>
          <ul>
            <li>验证码&通知短信</li>
            <li>推广短信</li>
            <li>语音验证码</li>
            <li>美唐-云平台</li>
            <li>SI短信平台</li>
            <li>ECP-企业通信平台</li>
          </ul>
        </div>
        <div class="service">
          <div class="service_title">服务支持</div>
          <ul>
            <li>服务条款</li>
            <li>产品文档</li>
            <li>代理加盟</li>
          </ul>
        </div>
        <div class="line"></div>
        <div class="watch">
          <div class="watch_title">服务支持</div>
          <img :src="weChart" />
          <div class="watch_dec">扫码关注有礼</div>
        </div>
        <div class="other">
          <div class="other_text">咨询热线：400-100-6550</div>
          <el-button>在线客服</el-button>
        </div>
      </div>
      <ul class="footerWeb_websit">
        <li>友情链接：</li>
        <li>美唐科技企业网站</li>
        <li>企业级短信平台</li>
        <li>企业级呼叫平台</li>
        <li>云房产ERP系统</li>
        <li>智慧酒店PMS系统</li>
        <li>智慧办公系统</li>
        <li>多渠道信息平台</li>
        <li>智慧建站系统</li>
      </ul>
    </div>
    <div class="address">公司地址：重庆市渝北区黄山大道中段SS号附2号D座12楼</div>
    <div class="number">© 2014-2019 重庆美唐科技有限公司版权所有 渝ICP备15010283号-2 渝公网备【2015】第12-16-G234号</div>
  </footer>
</template>

<script>
export default {
  data() {
    return {
      input: "",
      weChart: "images/ic_wechart.png"
    };
  }
};
</script>

<style lang="scss" scoped>
$activeColor: #fc6b00;
footer {
  width: 100%;
  height: 678px;
  background: #1d202c;
  padding-top: 61px;
  box-sizing: border-box;
  .title {
    text-align: center;
    font-size: 44px;
    color: #fff;
    padding-bottom: 10px;
    margin-bottom: 48px;
  }
  .footerWeb {
    width: 1082px;
    border-bottom: 1px solid #424657;
    margin: 73px auto 0 auto;
    .footerWebService {
      display: flex;
      .production {
        width: 116px;
        margin-right: 155px;
        display: inline-block;
        .production_title {
          color: #fff;
          margin-bottom: 15px;
        }
        ul {
          li {
            color: #8d8d8d;
            font-size: 14px;
            line-height: 30px;
          }
        }
      }
      .service {
        width: 64px;
        display: inline-block;
        margin-right: 193px;
        .service_title {
          color: #fff;
          margin-bottom: 15px;
        }
        ul {
          li {
            color: #8d8d8d;
            font-size: 14px;
            line-height: 30px;
          }
        }
      }
      .line {
        width: 0px;
        height: 150px;
        border: 0.5px solid #424657;
        margin-top: 42px;
        margin-right: 63px;
      }
      .watch {
        width: 140px;
        display: flex;
        flex-direction: column;
        margin-right: 138px;
        .watch_title {
          color: #fff;
          margin-bottom: 15px;
        }
        img {
          width: 140px;
        }
        .watch_dec {
          font-size: 12px;
          color: #fff;
          text-align: center;
          margin-top: 10px;
        }
      }
      .other {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        width: 212px;
        .other_text {
          font-size: 18px;
          color: #fff;
        }
        .el-button {
          color: #fff;
          background: $activeColor;
          border: none;
          margin-top: 30px;
        }
      }
    }
    .footerWeb_websit {
      display: flex;
      justify-content: space-between;
      margin: 57px 0 20px 0;
      li {
        font-size: 12px;
        color: #8d8d8d;
      }
    }
  }
  .address {
    font-size: 12px;
    color: #8d8d8d;
    margin-top: 21px;
    text-align: center;
  }
  .number {
    font-size: 12px;
    color: #8d8d8d;
    margin-top: 11px;
    text-align: center;
  }
}
.el-input-group {
  width: 837px;
  left: 50%;
  margin-left: -355px;
}
.el-input {
  font-size: 18px;
}
/deep/ .el-input__inner {
  height: 50px;
  line-height: 50px;
}
/deep/ .el-input-group__append {
  width: 147px;
  background: $activeColor;
  color: #fff;
  border: none;
  padding: 0;
  text-align: center;
}
/deep/ .el-input__inner {
  width: 691px;
}
//
</style>