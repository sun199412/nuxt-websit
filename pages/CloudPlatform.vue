<template>
  <div class="cloudPlatform">
    <img :src="data.bannerInfo.cover_url" class="cloudPlatform_img" />
    <platform-overview :dataSource="data.platformOverviewInfo"></platform-overview>
    <advantage :dataSource="data.platformAdvantageInfo"></advantage>
    <access :dataSource="data.accessProgressInfo"></access>
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
  // 调取数据
  asyncData(context) {
    return context.$axios.get("cloud/info").then(res => {
      console.log('res', res)
      return {
        data: res.data
      }
    });
  },
  data() {
    return {};
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