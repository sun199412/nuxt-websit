<template>
  <div class="set">
    <div class="title">{{ dataSource.title }}</div>
    <div class="desc">{{ dataSource.desc }}</div>
    <ul class="set_listBox">
      <li v-for="item in dataSource.list" :key="item.id">
        <div class="list_title">{{ item.list_title }}</div>
        <div class="set_limit">{{ item.list_limit }}</div>
        <div class="price">{{ item.list_price }}</div>
        <el-button plain>立即购买</el-button>
      </li>
    </ul>
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
$border: 1px solid #ecedf2;
$activeColor: #fc6b00;
.set {
  width: 100%;
  height: 579px;
  padding: 100px 360px 0 360px;
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
  .set_listBox {
    display: flex;
    justify-content: space-between;
    margin-top: 77px;
    li {
      width: 255px;
      height: 292px;
      padding: 21px 44px 28px 44px;
      box-sizing: border-box;
      text-align: center;
      border: $border;
      &:hover {
         box-shadow: 0px -2px 2px 2px #ccc, /*上边阴影*/ -2px 0px 2px 2px #ccc,
        /*左边阴影*/ 2px 0px 2px 2px #ccc, /*右边阴影*/ 0px 2px 2px 2px #ccc; /*下边阴影*/
      }
      .list_title {
        font-size: 20px;
        color: $titleColor;
        margin-bottom: 54px;
      }
      .set_limit {
        font-size: 28px;
        color: $titleColor;
        margin-bottom: 24px;
      }
      .price {
        color: #999;
        margin-bottom: 32px;
      }
      .el-button {
        border: $border;
        background: #f4f5fa;
        color: $activeColor;
        font-size: 16px;
        padding: 14px 47px;
      }
      .el-button:focus, .el-button:hover {
        color: #fff;
        border-color: #e6a23c;
        background: #e6a23c;
      }
    }
  }
}
</style>