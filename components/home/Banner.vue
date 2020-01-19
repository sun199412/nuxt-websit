<template>
  <div>
    <el-carousel :interval="5000" arrow="hover" height="780px">
      <el-carousel-item v-for="item in dataSource" :key="item.id">
        <img :src="item.pic_url" />
      </el-carousel-item>
    </el-carousel>
  </div>
</template>

<script>
export default {
  props: ['dataSource'],
  data() {
    return {
    };
  }
};
</script>

<style lang="scss" scoped>
</style>