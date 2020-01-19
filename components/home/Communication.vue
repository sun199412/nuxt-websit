<template>
  <div class="communicationBox">
    <div class="title">{{ dataSource.title }}</div>
    <div class="description">{{ dataSource.desc }}</div>
    <ul class="listBox">
      <li v-for="item in dataSource.rows" :key="item.id">
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
.communicationBox {
  width: 100%;
  height: 978px;
  padding: 98px 336px 82px 336px;
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
  .listBox {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    li {
      width: 400px;
      height: 367px;
      // border: 1px solid #E8E5E5;
      text-align: center;
      &:hover {
        box-shadow: 0 2px 2px 2px #ccc;
        transform: scale(1.05)
      }
      img {
        margin-top: 53px;
        margin-bottom: 29px;
      }
      .listBox_title {
        font-size: 24px;
        color: $titleColor;
        margin-bottom: 15px;
      }
      .listBox_description {
        width: 300px;
        margin: 0 auto;
        color: #666;
      }
    }
  }
}
</style>