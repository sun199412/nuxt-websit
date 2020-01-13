<template>
  <div>
    <div class="title">API接入流程</div>
    <ul>
      <li v-for="item in progressList" :key="item.id">
        <div class="num">{{ item.num }}</div>
        <div class="text">{{ item.val }}</div>
      </li>
    </ul>
    <div class="title top">网页发送流程</div>
    <ul>
      <li v-for="item in sendList" :key="item.id">
        <div class="num">{{ item.num }}</div>
        <div class="text">{{ item.val }}</div>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  props: ['progressList', 'sendList'],
  data() {
    return {};
  }
};
</script>

<style lang="scss" scoped>
$activeColor: #fc6b00;
.title {
  font-size: 30px;
  color: $activeColor;
}
.top {
  margin-top: 72px;
}
ul {
  li {
    margin-top: 40px;
    display: flex;
    align-items: center;
    .num {
      width: 44px;
      height: 44px;
      border: 1px dashed $activeColor;
      border-radius: 22px;
      text-align: center;
      line-height: 44px;
      color: $activeColor;
      font-size: 22px;
    }
    .text {
      width: 812px;
      font-size: 18px;
      color: #666;
      line-height: 32px;
      margin-left: 26px;
    }
  }
}
</style>