<template>
  <div class="programme">
    <div class="title">方案架构</div>
    <div class="desc">让技术为我们代言</div>
    <div class="programme_box">
      <div class="pic">
        <div class="pic_title">框架架构图</div>
        <img :src="frame_url" />
      </div>
      <div class="into">
        <div class="into_title">框架架构说明</div>
        <div class="listBox">
          <div class="listBox_title">架构优势</div>
          <ul>
            <li><span>为用户开通独立虚拟主机，专属数据库、专属存储、专有云呼叫中心服务。</span></li>
            <li><span>支持云客服、云电销、全能云等方式，满足用户在呼叫中心上面多种需求。</span></li>
            <li><span>通过物理服务器集群及负载均衡量方式，支持超大容量坐席及通话并发。</span></li>
            <li><span>提供丰富API/SDK接口，与第三方业务系统无缝集成。</span></li>
            <li><span>支持CRW，工作流完全自定义配置，支持二次定制开发。</span></li>
            <li><span>提供全国区域固定号码落地及国际线路落地。</span></li>
          </ul>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      frame_url: "/images/pic_ecp_fnjg.png"
    };
  }
};
</script>

<style lang="scss" scoped>
$titleColor: #1c1e2b;
$activeColor: #fc6b00;
.programme {
  width: 100%;
  height: 1014px;
  padding: 98px 360px 108px 360px;
  box-sizing: border-box;
  text-align: center;
  background: #f4f5fa;
  .title {
    color: $titleColor;
    font-size: 44px;
  }
  .desc {
    color: #666;
    font-size: 28px;
    width: 1200px;
    margin: 11px auto 0 auto;
  }
  .programme_box {
    display: flex;
    justify-content: space-between;
    margin-top: 78px;
    .pic {
      margin-right: 227px;
      .pic_title {
        height: 31px;
        border-left: 7px solid $activeColor;
        font-size: 24px;
        color: $titleColor;
        text-align: left;
        text-indent: 7px;
        margin-bottom: 29px;
      }
    }
    .into {
      width: 401px;
      .into_title {
        height: 31px;
        border-left: 7px solid $activeColor;
        font-size: 24px;
        color: $titleColor;
        text-align: left;
        text-indent: 7px;
        margin-bottom: 29px;
      }
      .listBox {
        width: 100%;
        padding: 23px 26px 71px 31px;
        box-sizing: border-box;
        background: #fff;
        .listBox_title {
          text-align: left;
          color: $titleColor;
          margin-bottom: 27px;
        }
        ul {
          list-style: disc;
          color: $activeColor;
          text-align: left;
          li {
            font-size: 14px;
            margin-bottom: 20px;
            span {
              color: #666;
            }
          }
        }
      }
    }
  }
}
</style>