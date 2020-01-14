<template>
  <div class="box">
    <img :src="bannerUrl" class="box_img" />
    <advantage :dataSource="dataSource"></advantage>
    <application :appSource="applicationPlace"></application>
    <set-meal :meal="quickPackage"></set-meal>
    <access :stage="accessProgress"></access>
  </div>
</template>

<script>
import Advantage from "~/components/shortmessage/Advantage";
import Application from "~/components/shortmessage/Application";
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
      bannerUrl: "/images/pic_banner_yzm.png",
      // 应用优势板块的数据
      dataSource: { 
        title: "应用优势",
        desic: "运营商直连&工信部资质",
        listData: [
          {
            id: "00001000",
            title: "急速到达",
            pic_url: "/images/ic_yzm_jsdd.png",
            detail: "优质106哦通知，全网三网5秒到达"
          },
          {
            id: "00001001",
            title: "15分钟接入",
            pic_url: "/images/ic_yzm_15min.png",
            detail: "SDK接口完美适配任何APP平台，15分钟快速接入"
          },
          {
            id: "00001002",
            title: "安全稳定",
            pic_url: "/images/ic_yzm_safe.png",
            detail: "分布式服务器，企业级BOSS网关，主备通道自动切换"
          },
          {
            id: "00001003",
            title: "高性价比",
            pic_url: "/images/ic_yzm_gxjb.png",
            detail: "阶梯计价、灵活付费、性价比优选"
          }
        ]
      },
      // 应用场景板块的数据
      applicationPlace: {
        title: '应用场景',
        desc: '运营商直连&工信部资质',
        backPicUrl: '/images/pic_yzm_yycj.png',
        appLeftList: [
          {
            id: '00100000',
            title: '验证码注册',
            desc: '通过手机号码注册APP\平台，验证码验证注册用户',
            detail: '【美唐云】您的找回密码的验证码是254658，如非本人操作，请忽略信息。'
          },
          {
            id: '00100001',
            title: '订单通知',
            desc: '订单确认后，平台将订单内容通过短信发送到用户手机 ，提示用户服务及品牌认知',
            detail: '【订票信息】您预定XX航空，旅客姓名，航班起飞前，请在1号服务台办理值机手续，北京首都航空公司祝您旅途愉快'
          }
        ],
        appRightList: [
          {
            id: '00100002',
            title: '安全认证',
            desc: '用户信息修改确认，杜绝非本人操作',
            detail: '【美唐云】安全风险提醒：您正在进行绑定银行卡操作，验证码2383，请勿泄漏于他人。'
          },
          {
            id: '00100003',
            title: '预警通知',
            desc: '通过手机号码注册APP\平台，验证码验证注册用户',
            detail: '【美唐云】感谢您注册本网站，你的验证码是：5416，请在1分钟内输入。。'
          }
        ]
      },
      // 快捷套餐模块
      quickPackage: {
        title: "快捷套餐",
        desc: "有效期XX个月",
        mealList: [
          {
            id: "00000010",
            title: "套餐A1",
            limit: "无限制",
            price: "单价¥0.06/条"
          },
          {
            id: "00000011",
            title: "套餐B1",
            limit: "¥3000",
            price: "单价¥0.055/条"
          },
          {
            id: "00000012",
            title: "套餐C1",
            limit: "¥5000",
            price: "单价¥0.05/条"
          },
          {
            id: "00000013",
            title: "套餐D1",
            limit: "¥10000",
            price: "单价¥0.45/条"
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
.box {
  .box_img {
    width: 100%;
  }
}
</style>