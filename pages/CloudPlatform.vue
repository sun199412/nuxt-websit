<template>
  <div class="cloudPlatform">
    <img :src="banner_url" class="cloudPlatform_img" />
    <platform-overview></platform-overview>
    <advantage :dataSource="dataSource"></advantage>
    <access :stage="accessProgress"></access>
  </div>
</template>

<script>
import PlatformOverview from "~/components/cloudplatform/PlatformOverview";
import Advantage from "~/components/shortmessage/Advantage";
import Access from "~/components/shortmessage/Access";
export default {
  components: {
    PlatformOverview,
    Advantage,
    Access
  },
  data() {
    return {
      banner_url: "/images/pic_mty_banner.png",
      // 应用优势板块的数据
      dataSource: {
        title: "平台优势",
        desic: "质量、服务、性能并存的sass服务平台",
        listData: [
          {
            id: "00001008",
            title: "云平台",
            pic_url: "/images/ic_mty_ypt.png",
            detail:
              "“拿来即用”的云服务，云主机架构，快速满足企事业单位短信语音接口&页面应用，迭代更新更强大"
          },
          {
            id: "00001009",
            title: "智能化机制",
            pic_url: "/images/ic_mty_znh.png",
            detail: "优先级排队、智能路由机制保障不同客户各种应用"
          },
          {
            id: "00001010",
            title: "资质及认证",
            pic_url: "/images/ic_yzm_safe.png",
            detail: "工信部增值业务认证，多通道资源灵活配置"
          },
          {
            id: "00001011",
            title: "数据安全",
            pic_url: "/images/ic_mty_sjaq.png",
            detail: "数据安全守护为企业第一生命线，多重安全防护体系结构"
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
.cloudPlatform {
  .cloudPlatform_img {
    width: 100%;
  }
}
</style>