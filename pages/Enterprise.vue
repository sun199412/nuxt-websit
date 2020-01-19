<template>
  <div class="enterprise">
    <img :src="data.bannerInfo.cover_url" class="enterprise_img" />
    <platform-introduction :dataSource="data.platformAdjustmentInfo"></platform-introduction>
    <programme :dataSource="data.caseFrameWorkInfo"></programme>
    <platform-advantage></platform-advantage>
    <access :dataSource="data.accessProgressInfo"></access>
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
  // 调取数据
  asyncData(context) {
    return context.$axios.get("enterprise/info").then(res => {
      console.log('res', res)
      return {
        data: res.data
      }
    });
  },
  data() {
    return {}
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