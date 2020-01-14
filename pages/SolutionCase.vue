<template>
  <div class="solution">
    <img :src="bannerUrl" class="box_img" />
    <case></case>
  </div>
</template>

<script>
import Case from "~/components/solutioncase/Case";
export default {
  components: {
    Case
  },
  data() {
    return {
      bannerUrl: "images/pic_jjfa_banner.png",
    };
  },
};
</script>

<style lang="scss" scoped>
.solution {
  .solution_img {
    width: 100%;
  }
}
</style>