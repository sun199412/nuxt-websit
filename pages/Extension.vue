<template>
  <div class="extension">
    <img :src="data.bannerInfo.cover_url" class="extension_img" />
    <advantage :dataSource="data.applicationAdvantageInfo"></advantage>
    <application :dataSource="data.applicationPlaceInfo"></application>
    <set-meal :dataSource="data.quickPackageInfo"></set-meal>
    <access :dataSource="data.accessProgressInfo"></access>
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
  // 调取数据
  asyncData(context) {
    return context.$axios.get("promote-message/info").then(res => {
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
.extension {
  .extension_img {
    width: 100%;
  }
}
</style>