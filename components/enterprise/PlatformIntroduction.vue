<template>
  <div class="introduce">
    <div class="title">{{ intro.title }}</div>
    <div class="desc">{{ intro.desc }}</div>
    <ul class="introduce_list">
      <li v-for="item in intro.introduceList" :key="item.id">
        <img :src="item.pic_url" />
        <div>{{ item.desc }}</div>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  props: ['intro'],
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