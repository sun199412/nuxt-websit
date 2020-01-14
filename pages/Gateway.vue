<template>
  <div class="gateway">
    <img :src="banner_url" class="gateway_img" />
    <advantage :dataSource="dataSource"></advantage>
    <access :stage="accessProgress"></access>
  </div>
</template>

<script>
import Advantage from "~/components/shortmessage/Advantage";
import Access from "~/components/shortmessage/Access";
export default {
  components: {
    Advantage,
    Access
  },
  data() {
    return {
      banner_url: "images/pic_si_banner.png",
      // 应用优势板块的数据
      dataSource: { 
        title: "平台优势",
        desic: "性能、安全、定制服务方案平台",
        listData: [
          {
            id: "00001020",
            title: "功能丰富",
            pic_url: "images/ic_si_gnff.png",
            detail: "主流配置，前瞻性功能，紧跟移动互联网化发展发展，架构强大，性能优秀"
          },
          {
            id: "00001021",
            title: "高安全性",
            pic_url: "images/ic_yzm_safe.png",
            detail: "私有化部署，客户信息安全保障，通信协议加密，保障数据传输安全"
          },
          {
            id: "00001022",
            title: "定制服务",
            pic_url: "images/ic_si_dzfw.png",
            detail: "企事业定制化移动信息平台，完美匹配企业个性化需求"
          },
          {
            id: "00001023",
            title: "升级服务",
            pic_url: "images/ic_si_sjfw.png",
            detail: "售后无忧，每年1-3次/升级服务"
          }
        ]
      },
      // 接入流程模块
      accessProgress: {
        title: '接入流程',
        desc: '15分钟快捷接入',
        stageList: [
          {
            id: '00010020',
            stageNum: '1',
            stageName: '商务沟通',
          },
          {
            id: '00010021',
            stageNum: '2',
            stageName: '需求了解\方案制作',
          },
          {
            id: '00010022',
            stageNum: '3',
            stageName: '签约合同',
          },
          {
            id: '00010023',
            stageNum: '4',
            stageName: '独立部署',
          },
          {
            id: '00010024',
            stageNum: '5',
            stageName: '正式使用',
          }
        ]
      }
    }
  },
}
</script>

<style lang="scss" scoped>
.gateway {
  .gateway_img {
    width: 100%;
  }
}
</style>