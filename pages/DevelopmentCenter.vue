<template>
  <div class="develop">
    <img :src="banner_url" class="develop_img" />
    <document></document>
  </div>
</template>

<script>
import Document from '~/components/developmentcenter/Document'
  export default {
    components: {
      Document
    },
    data() {
      return {
        banner_url: "images/pic_kfzx_banner.png",
      }
    },
  }
</script>

<style lang="scss" scoped>
.develop {
  .develop_img {
    width: 100%;
  }
}
</style>