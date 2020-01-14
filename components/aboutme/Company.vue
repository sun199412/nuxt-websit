<template>
  <div class="company">
    <div class="title">公司资质</div>
    <ul>
      <li v-for="item in companyList" :key="item.id">
        <img :src="item.pic_url" />
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  data() {
    return {
      companyList: [
        { id: "0000", pic_url: "images/pic_aboutus_yyzz.png" },
        { id: "0001", pic_url: "images/pic_aboutus_bossxt.png" },
        { id: "0002", pic_url: "images/pic_aboutus_fwpt.png" },
        { id: "0003", pic_url: "images/pic_aboutus_xkz.png" }
      ]
    };
  }
};
</script>

<style lang="scss" scoped>
$titleColor: #1c1e2b;
.company {
  width: 100%;
  background: #f4f5fa;
  .title {
    font-size: 44px;
    color: $titleColor;
    text-align: center;
    padding-top: 100px;
  }
  ul {
    display: flex;
    padding: 36px 336px 81px 336px;
    box-sizing: border-box;
  }
}
</style>