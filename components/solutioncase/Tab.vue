<template>
  <ul class="tab">
    <li v-for="item in list" :key="item.id" @click="changeTab(item)" :class="componentsType=== 'develop' ? 'tablist2' : 'tablist'">
      <span :style="item.showFlag === '1' ? activeStatus : hideStatus">{{ item.val }}</span>
      <img :src="url" v-show="item.showFlag === '1'" />
    </li>
  </ul>
</template>

<script>
export default {
  props: ["list", "activeStatus", "hideStatus", "url", "componentsType"],
  data() {
    return {};
  },
  methods: {
    changeTab(item) {
      this.$emit('toggleTab', item)
    }
  }
};
</script>

<style lang="scss" scoped>
$titleColor: #1c1e2b;
$activeColor: #fc6b00;
.tab {
  color: $titleColor;
  font-size: 18px;
  margin-right: 88px;
  .tablist {
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 144px;
    border-top: 0.5px solid #e8e5e5;
    border-bottom: 0.5px solid #e8e5e5;
    padding: 10px 0;
    cursor: pointer;
    &:hover {
      color: #fc6b00;
    }
  }
  .tablist2 {
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 144px;
    border-top: 0.5px solid #e8e5e5;
    border-bottom: 0.5px solid #e8e5e5;
    padding: 20px 0;
    cursor: pointer;
    &:hover {
      color: #fc6b00;
    }
  }
}
</style>