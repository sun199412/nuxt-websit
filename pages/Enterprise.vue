<template>
  <div class="enterprise">
    <img :src="bannerUrl" class="enterprise_img" />
    <platform-introduction :intro="dataSouce"></platform-introduction>
    <programme></programme>
    <platform-advantage></platform-advantage>
    <access :stage="accessProgress"></access>
  </div>
</template>

<script>
import PlatformIntroduction from '~/components/enterprise/PlatformIntroduction'
import Programme from '~/components/enterprise/Programme'
import PlatformAdvantage from '~/components/enterprise/PlatformAdvantage'
import Access from "~/components/shortmessage/Access";
export default {
  components: {
    PlatformIntroduction,
    Programme,
    PlatformAdvantage,
    Access
  },
  data() {
    return {
      bannerUrl: "/images/pic_ecp_banner.png",
      dataSouce: {
        title: '平台介绍',
        desc: '针对企事业单位融合通信，私有化部署方案，集成:短信、语音、IM客服等云通信管理需求，集通信引擎、网关管理、安全监控、数据分析、互动应用、于一体的移动数据应用软件平台。',
        introduceList: [
          {
            id: '00010100',
            pic_url: '/images/ic_ecp_dh.png',
            desc: '电话'
          },
          {
            id: '00010101',
            pic_url: '/images/ic_cp_dx.png',
            desc: '短信'
          },
          {
            id: '00010102',
            pic_url: '/images/ic_cp_yy.png',
            desc: '语音'
          },
          {
            id: '00010103',
            pic_url: '/images/ic_cp_glpt.png',
            desc: '微信'
          },
          {
            id: '00010104',
            pic_url: '/images/ic_ecp_QQ.png',
            desc: 'QQ'
          },
          {
            id: '00010105',
            pic_url: '/images/ic_ecp_wb.png',
            desc: '微博'
          },
          {
            id: '00010106',
            pic_url: '/images/ic_pic.png',
            desc: '邮件'
          },
          {
            id: '00010107',
            pic_url: '/images/ic_cp_dx.png',
            desc: '网页客服'
          },
          {
            id: '00010108',
            pic_url: '/images/ic_ecp_wy.png',
            desc: 'IM客服'
          },
          {
            id: '00010109',
            pic_url: '/images/ic_ecp_wx.png',
            desc: '微信小程序'
          },
        ]
      },
      // 接入流程模块
      accessProgress: {
        title: '接入流程',
        desc: '专业成就未来',
        stageList: [
          {
            id: '00010030',
            stageNum: '1',
            stageName: '客服经理',
          },
          {
            id: '00010031',
            stageNum: '2',
            stageName: '需求沟通',
          },
          {
            id: '00010032',
            stageNum: '3',
            stageName: '技术方案',
          },
          {
            id: '00010033',
            stageNum: '4',
            stageName: '系统集成',
          },
          {
            id: '00010034',
            stageNum: '5',
            stageName: '项目实施',
          }
        ]
      }
    }
  },
}
</script>

<style lang="scss" scoped>
.enterprise {
  .enterprise_img {
    width: 100%;
  }
}
</style>