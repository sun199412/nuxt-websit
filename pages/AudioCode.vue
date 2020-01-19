<template>
  <div class="audiocode">
    <img :src="data.bannerInfo.cover_url" class="audiocode_img" />
    <advantage :dataSource="data.applicationAdvantageInfo"></advantage>
    <application></application>
    <set-meal :dataSource="data.quickPackageInfo"></set-meal>
    <access :dataSource="data.accessProgressInfo"></access>
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
  // 调取数据
  asyncData(context) {
    return context.$axios.get("audio-code/info").then(res => {
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
.audiocode {
  .audiocode_img {
    width: 100%;
  }
}
</style>