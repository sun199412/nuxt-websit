<template>
  <div class="advantage">
    <div class="title">{{ dataSource.title }}</div>
    <div class="desc">{{ dataSource.desc }}</div>
    <ul class="picBox">
      <li v-for="item in dataSource.list" :key="item.id">
        <img :src="item.cover_url" />
        <div class="picBox_title">{{ item.list_title }}</div>
        <div class="picBox_desc">{{ item.list_desc }}</div>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  props: ['dataSource'],
  data() {
    return {}
  },
};
</script>

<style lang="scss" scoped>
$titleColor: #1C1E2B;
.advantage {
  width: 100%;
  height: 661px;
  padding: 98px 0 110px 0;
  box-sizing: border-box;
  text-align: center;
  .title {
    color: $titleColor;
    font-size: 44px;
  }
  .desc {
    color: #666;
    font-size: 28px;
    width: 1076px;
    margin: 11px auto 0 auto;
  }
  .picBox {
    display: flex;
    justify-content: space-between;
    margin: 78px 391px 0 391px;
    li {
      width: 244px;
      &:hover img {
        position: relative;
        top: -20px;
      }
      .picBox_title {
        font-size: 24px;
        color: $titleColor;
        margin-top: 32px;
      }
      .picBox_desc {
        margin-top: 15px;
        color: #666;
      }
    }
  }
}
</style>