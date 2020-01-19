<template>
  <div class="introduce">
    <div class="title">{{ dataSource.title }}</div>
    <div class="desc">{{ dataSource.desc }}</div>
    <ul class="introduce_list">
      <li v-for="item in dataSource.list" :key="item.id">
        <img :src="item.cover_url" />
        <div>{{ item.list_title }}</div>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  props: ['dataSource'],
  data() {
    return {
      
    }
  },
}
</script>

<style lang="scss" scoped>
$titleColor: #1C1E2B;
.introduce {
  width: 100%;
  height: 819px;
  padding: 98px 0 108px 0;
  box-sizing: border-box;
  text-align: center;
  .title {
    color: $titleColor;
    font-size: 44px;
  }
  .desc {
    color: #666;
    font-size: 28px;
    width: 1200px;
    margin: 11px auto 0 auto;
  }
  .introduce_list {
    box-sizing: border-box;
    display: flex;
    -webkit-box-pack: justify;
    justify-content: space-between;
    flex-wrap: wrap;
    width: 1260px;
    margin: 76px auto 0 auto;
    li {
      width: 220px;
      margin-bottom: 95px;
      img {
        width: 90px;
      }
      div {
        font-size: 24px;
        color: $titleColor;
      }
    }
  }
}
</style>