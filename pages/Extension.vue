<template>
  <div class="extension">
    <img :src="banner_url" class="extension_img" />
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
      banner_url: "images/pic_tgdx_banner.png",
      // 应用优势板块的数据
      dataSource: {
        title: "应用优势",
        desic: "专业的服务及产品，给您选择的信心",
        listData: [
          {
            id: "00001004",
            title: "高性能",
            pic_url: "images/ic_tgdx_gxn.png",
            detail: "多主机，大并发量机制，支持千万条日发送"
          },
          {
            id: "00001005",
            title: "广覆盖",
            pic_url: "images/ic_tgdx_gfg.png",
            detail: "覆盖全国移动、联通、电信及虚拟运营商，支持最新号段"
          },
          {
            id: "00001006",
            title: "强安全",
            pic_url: "images/ic_yzm_safe.png",
            detail: "通讯级防护机制保障，以信息安全为企业第一生命线"
          },
          {
            id: "00001007",
            title: "多样式",
            pic_url: "images/ic_tgdx_dys.png",
            detail:
              "支持多样式，可根据接口定制个性化发送，也可通过美唐云网页发送"
          }
        ]
      },
      // 应用场景板块的数据
      applicationPlace: {
        title: "应用场景",
        desc: "您所需的，正是我们现在在做的",
        backPicUrl: "images/pic_yzm_yycj.png",
        appLeftList: [
          {
            id: "00100004",
            title: "客户关怀",
            desc:
              "客户粘性是我们成功营销的关键因素。每逢节假日、会员生日，我们的关怀会更加有温度，更能赢得客户的信任。",
            detail:
              "【左田右宴】尊敬的会员：名点航空餐厅已换老板，原充值卡余额限于2019年8月18日前使用完，超时不可再用，请尽快使用电4868XXX，退订回T"
          },
          {
            id: "00100005",
            title: "新品上线",
            desc:
              "企业在新品上线前期，通过短信告知新老顾客，让客户第一时间获取到新品信息和优惠。",
            detail:
              "【拓谷旗舰店】618狂欢！夏季新品6.5折起，超千款直降低至1折起，专区2件8折/3件7折。速戳 t.cn/EzN571， 回T退订"
          }
        ],
        appRightList: [
          {
            id: "00100006",
            title: "活动促销",
            desc:
              "企业定期举办的促销活动，通过会员营销短信及时送达我们的客户，吸引消费者购买，加大销售量",
            detail:
              "【百佳好超市】年中618促销活动；会员充值回馈，现充值300返50元钜惠，名额有限，送完为止，详情进店办理，退订回N"
          },
          {
            id: "00100007",
            title: "渠道推广",
            desc:
              "企业在推广产品及服务时，通过具体吸引性、创新性的短信内容获取新老顾客的关注和决定，提高销售机会。",
            detail:
              "【途风旅游网邀请函】途风旅游诚邀您参加老用户线下分享会，现场为您准备了精美茶歇、精品行程分享，还有￥5000旅游金、音乐车机等丰富好礼。 活动地址：IG映界影像艺术馆（上海市徐汇区安福路XXX）诚挚期待您的到来，退订回T"
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
.extension {
  .extension_img {
    width: 100%;
  }
}
</style>