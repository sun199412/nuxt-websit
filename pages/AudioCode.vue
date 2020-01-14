<template>
  <div class="audiocode">
    <img :src="banner_url" class="audiocode_img" />
    <advantage :dataSource="dataSource"></advantage>
    <application></application>
    <set-meal :meal="quickPackage"></set-meal>
    <access :stage="accessProgress"></access>
  </div>
</template>

<script>
import Advantage from "~/components/shortmessage/Advantage";
import Application from "~/components/audiocode/Application";
import SetMeal from "~/components/shortmessage/SetMeal";
import Access from "~/components/shortmessage/Access";
export default {
  components: {
    Advantage,
    Application,
    SetMeal,
    Access
  },
  data() {
    return {
      banner_url: "/images/pic_yyyz_banner.png",
      // 应用优势板块的数据
      dataSource: {
        title: "应用优势",
        desic: "以电话呼入手机的方式播放验证码\通知，可有效避免短信验证码不及时、拦截等问题。 和短信验证完美结合，保证验证码到达率100%",
        listData: [
          {
            id: "00001008",
            title: "稳定急速",
            pic_url: "/images/ic_yzm_jsdd.png",
            detail: "优质通话码号，渠道稳定独享，分布式服务器架构，毫秒响应"
          },
          {
            id: "00001009",
            title: "防刷单",
            pic_url: "/images/ic_yyyz_fsd.png",
            detail: "支持多种混音以及异常行为限制，杜绝恶意刷单"
          },
          {
            id: "00001010",
            title: "高并发",
            pic_url: "/images/ic_yyyz_gbf.png",
            detail: "支持高达每秒8000TPS，避免高峰排队、延迟等常见问题"
          },
          {
            id: "00001011",
            title: "100%验证",
            pic_url: "/images/ic_yzm_safe.png",
            detail: "高接通率，配套短信验证码，100%验证保证"
          }
        ]
      },
      // 快捷套餐模块
      quickPackage: {
        title: "快捷套餐",
        desc: "有效期XX个月",
        mealList: [
          {
            id: "00000014",
            title: "套餐A2",
            limit: "无限制",
            price: "单价¥0.06/条"
          },
          {
            id: "00000015",
            title: "套餐B2",
            limit: "¥3000",
            price: "单价¥0.057/条"
          },
          {
            id: "00000016",
            title: "套餐C2",
            limit: "¥5000",
            price: "单价¥0.055/条"
          },
          {
            id: "00000017",
            title: "套餐D2",
            limit: "¥10000",
            price: "单价¥0.53/条"
          }
        ]
      },
      // 接入流程模块
      accessProgress: {
        title: '接入流程',
        desc: '15分钟快捷接入',
        stageList: [
          {
            id: '00010010',
            stageNum: '1',
            stageName: '注册账号',
          },
          {
            id: '00010011',
            stageNum: '2',
            stageName: '账户认证',
          },
          {
            id: '00010012',
            stageNum: '3',
            stageName: '接口调用或页面发送',
          },
          {
            id: '00010013',
            stageNum: '4',
            stageName: '上线使用',
          }
        ]
      }
    };
  }
};
</script>

<style lang="scss" scoped>
.audiocode {
  .audiocode_img {
    width: 100%;
  }
}
</style>