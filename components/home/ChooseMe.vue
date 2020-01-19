<template>
  <div class="choose">
    <div class="title">{{ dataSource.title }}</div>
    <div class="description">{{ dataSource.desc }}</div>
    <ul class="contentBox">
      <li v-for="item in dataSource.list" :key="item.id">
        <img :src="item.cover_url" />
        <div class="listBox_title">{{ item.list_title }}</div>
        <div class="listBox_description">{{ item.list_desc }}</div>
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
  }
</script>

<style lang="scss" scoped>
$titleColor: #1C1E2B;
.choose {
  width: 100%;
  height: 927px;
  padding: 95px 50px;
  box-sizing: border-box;
  .title {
    text-align: center;
    font-size: 44px;
    color: $titleColor;
    padding-bottom: 10px;
  }
  .description {
    font-size: 20px;
    color: #666;
    text-align: center;
  }
  .contentBox {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    li {
      width: 280px;
      text-align: center;
      margin: 60px 100px;
      &:hover img {
        position: relative;
        top: -20px;
      }
      .listBox_title {
        color: $titleColor;
        font-size: 24px;
        margin-top: 15px;
      }
      .listBox_description {
        color: #666;
        margin-top: 15px;
      }
    }
  }
}
</style>