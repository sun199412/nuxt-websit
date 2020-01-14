<template>
  <div class="online">
    <img :src="banner_url" class="online_img" />
    <experience></experience>
  </div>
</template>

<script>
import Experience from "~/components/onlineexperience/Experience";
  export default {
    components: {
      Experience
    },
    data() {
      return {
        banner_url: '/images/pic_zxty_banner.png'
      }
    },
  }
</script>

<style lang="scss" scoped>
.online {
  .online_img {
    width: 100%;
  }
}
</style>