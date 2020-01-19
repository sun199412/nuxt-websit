<template>
  <div class="access">
    <div class="title">{{ dataSource.title }}</div>
    <div class="desc">{{ dataSource.desc }}</div>
    <ul class="access_box">
      <li v-for="item in dataSource.list" :key="item.id">
        <span class="img">{{ item.stageNum }}</span>
        <span class="text">{{ item.stageName }}</span>
      </li>
    </ul>
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
$titleColor: #1c1e2b;
$activeColor: #fc6b00;
.access {
  width: 100%;
  height: 481px;
  padding: 99px 360px 108px 360px;
  box-sizing: border-box;
  text-align: center;
  .title {
    color: $titleColor;
    font-size: 44px;
  }
  .desc {
    color: #666;
    font-size: 28px;
    margin-top: 11px;
  }
  .access_box {
    display: flex;
    justify-content: space-between;
    margin-top: 77px;
    li {
      .img {
        display: inline-block;
        width: 89px;
        height: 89px;
        border: 1px dashed $activeColor;
        border-radius: 45px;
        text-align: center;
        line-height: 90px;
        font-size: 45px;
        color: $activeColor;
      }
      .text {
        margin-left: 26px;
        color: $titleColor;
        font-size: 18px;
        position: relative;
        top: -10px;
      }
    }
  }
}
</style>