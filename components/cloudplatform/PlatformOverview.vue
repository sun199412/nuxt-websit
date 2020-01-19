<template>
  <div class="overview">
    <div class="title">{{ dataSource.title }}</div>
    <div class="desc">{{ dataSource.desic }}</div>
    <div class="viewBox">
      <ul class="left">
        <li v-for="item in dataSource.left_list" :key="item.id">
          <div class="number">{{ item.stage }}</div>
          <div class="left_desc">{{ item.name }}</div>
        </li>
      </ul>
      <img :src="dataSource.bg_url" />

      <ul class="right">
        <li v-for="item in dataSource.right_list" :key="item.id">
          <div class="number">{{ item.stage }}</div>
          <div class="left_desc">{{ item.name }}</div>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  props: ['dataSource'],
  data() {
    return {};
  }
};
</script>

<style lang="scss" scoped>
$titleColor: #1c1e2b;
$activeColor: #fc6b00;
.overview {
  width: 100%;
  height: 890px;
  padding: 98px 360px;
  box-sizing: border-box;
  background: #f4f5fa;
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
  .viewBox {
    display: flex;
    .left {
      padding-top: 78px;
      li {
        width: 108px;
        margin-top: 52px;
        text-align: right;
        .number {
          width: 34px;
          height: 34px;
          border-radius: 17px;
          background: $activeColor;
          text-align: center;
          line-height: 34px;
          color: #fff;
          margin-left: 70px;
        }
        .left_desc {
          font-size: 18px;
          color: $titleColor;
          margin-top: 11px;
        }
      }
    }
    .right {
      padding-top: 78px;
      li {
        width: 108px;
        margin-top: 52px;
        text-align: left;
        .number {
          width: 34px;
          height: 34px;
          border-radius: 17px;
          background: $activeColor;
          text-align: center;
          line-height: 34px;
          color: #fff;
        }
        .left_desc {
          font-size: 18px;
          color: $titleColor;
          margin-top: 11px;
        }
      }
    }
  }
}
</style>