<template>
  <div class="sponsor">
    <div v-swiper:mySwiper="swiperOption">
      <div class="swiper-wrapper">
        <div class="swiper-slide" v-for="item in dataSource" :key="item.id">
          <img :src="item.cover_url" />
        </div>
      </div>
      <div class="swiper-pagination"></div>
    </div>
  </div>
</template>

<script>
export default {
  props: ['dataSource'],
  data() {
    return {
      swiperOption: {
        slidesPerView: 5,
        slidesPerColumn: 2,
        pagination: {
          el: ".swiper-pagination",
          clickable: true,
          paginationType: ""
        }
      },
    };
  }
};
</script>

<style lang="scss" scoped>
/deep/ .swiper-pagination-bullet-active {
  background: #fff;
}
.sponsor {
  width: 100%;
  height: 396px;
  padding: 28px 0 108px 0;
  box-sizing: border-box;
  background: #f4f5fa;
  .swiper-container {
    width: 1240px;
    margin: 0 auto;
    display: flex;
    flex-wrap: wrap;
    .swiper-slide {
      width: 208px !important;
      margin-top: 40px !important;
      height: 90px;
      margin-right: 40px !important;
    }
  }
}
</style>