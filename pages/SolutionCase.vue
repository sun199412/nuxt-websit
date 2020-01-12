<template>
  <div class="solution">
    <img :src="bannerUrl" class="box_img" />
    <div>
      <el-tabs tab-position="left" style="height: 200px;">
        <el-tab-pane label="用户管理">用户管理</el-tab-pane>
        <el-tab-pane label="配置管理">配置管理</el-tab-pane>
        <el-tab-pane label="角色管理">角色管理</el-tab-pane>
        <el-tab-pane label="定时任务补偿">定时任务补偿</el-tab-pane>
      </el-tabs>
    </div>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        bannerUrl: '/images/pic_jjfa_banner.png'
      }
    },
  }
</script>

<style lang="scss" scoped>
.solution {
  .solution_img {
    width: 100%;
  }
}
/deep/ .el-tabs__item {
  height: 45px;
  line-height: 45px;
  border-top: 0.5px solid #E8E5E5;
  border-bottom: 0.5px solid #E8E5E5;
}
</style>