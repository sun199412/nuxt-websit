<template>
  <div class="application">
    <div class="title">{{ dataSource.title }}</div>
    <div class="desc">{{ dataSource.desc }}</div>
    <div class="application_content">
      <ul class="left">
        <li v-for="item in dataSource.appLeftList" :key="item.id">
          <div class="left_title">{{ item.list_title }}</div>
          <div class="left_desc">{{ item.list_desc }}</div>
        </li>
      </ul>
      <div class="picBox">
        <img :src="dataSource.bg_url" />
        <div>{{ record.list_detail }}</div>
      </div>
      <ul class="right">
        <li v-for="item in dataSource.appRightList" :key="item.id">
          <div class="left_title">{{ item.list_title }}</div>
          <div class="left_desc">{{ item.list_desc }}</div>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  props: ['dataSource'],
  data() {
    return {
      record: this.dataSource.appLeftList[0]
    };
  },
};
</script>

<style lang="scss" scoped>
$titleColor: #1c1e2b;
@mixin liCss() {
  li {
    width: 224px;
    height: 130px;
    background: #fff;
    padding: 17px 15px 14px 15px;
    box-sizing: border-box;
    margin-top: 92px;
    &:hover {
      background: $titleColor;
    }
    &:hover .left_title {
      color: #fff;
    }
    &:hover .left_desc {
      color: #fff;
    }
    .left_title {
      color: #333333;
      font-size: 18px;
      text-align: left;
    }
    .left_desc {
      color: #666;
      font-size: 14px;
      text-align: left;
      margin-top: 9px;
    }
  }
}

.application {
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
  .application_content {
    display: flex;
    justify-content: space-between;
    margin-top: 78px;
    .picBox {
      position: relative;
      div {
        width: 150px;
        height: 65px;
        overflow: hidden;
        font-size: 12px;
        color: #fff;
        position: absolute;
        top: 112px;
        margin-left: -96px;
        left: 50%;
        text-align: left;
      }
    }
    .left {
      @include liCss();
    }
    .right {
      @include liCss();
    }
  }
}
</style>