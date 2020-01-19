<template>
  <div class="solution">
    <img :src="data.bannerInfo.cover_url" class="box_img" />
    <case :dataSource="data"></case>
  </div>
</template>

<script>
import Case from "~/components/solutioncase/Case";
export default {
  components: {
    Case
  },
  // 调取数据
  asyncData(context) {
    return context.$axios.get("solution-case/info").then(res => {
      console.log('res', res)
      return {
        data: res.data
      }
    });
  },
  data() {
    return {};
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