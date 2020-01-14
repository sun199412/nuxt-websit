<template>
  <div class="about">
    <img :src="banner_url" class="about_img" />
    <introduce></introduce>
    <company></company>
    <contract-me></contract-me>
  </div>
</template>

<script>
import Introduce from "~/components/aboutme/Introduce";
import Company from "~/components/aboutme/Company";
import ContractMe from "~/components/aboutme/ContractMe";
export default {
  components: {
    Introduce,
    Company,
    ContractMe
  },
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