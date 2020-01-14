<template>
  <div>
    <el-carousel :interval="5000" arrow="hover" height="780px">
      <el-carousel-item v-for="item in picArr" :key="item.id">
        <img :src="item.pic_url" />
      </el-carousel-item>
    </el-carousel>
  </div>
</template>

<script>
export default {
  data() {
    return {
      picArr: [
        {
          id: 201910111,
          title: "固定1",
          pic_url: "images/pic_home_banner.png"
        },
        {
          id: 201910112,
          title: "固定2",
          pic_url: "images/pic_banner_yzm.png"
        },
        {
          id: 201910113,
          title: "固定3",
          pic_url: "images/pic_yyyz_banner.png"
        }
      ]
    };
  }
};
</script>

<style lang="scss" scoped>
</style>