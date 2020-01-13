<template>
  <div class="about">
    <img :src="banner_url" class="about_img" />
  </div>
</template>

<script>
  export default {
    data() {
      return {
        banner_url: "/images/pic_gywm_banner.png",
      }
    },
  }
</script>

<style lang="scss" scoped>
.about {
  .about_img {
    width: 100%;
  }
}
</style>