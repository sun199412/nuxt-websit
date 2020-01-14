<template>
  <div class="sponsor">
    <div v-swiper:mySwiper="swiperOption">
      <div class="swiper-wrapper">
        <div class="swiper-slide" v-for="item in picArr" :key="item.id">
          <img :src="item.picUrl" />
        </div>
      </div>
      <div class="swiper-pagination"></div>
    </div>
  </div>
</template>

<script>
export default {
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
      picArr: [
        { id: "00000000", picUrl: "images/pic_ke_dx_nor.png" },
        { id: "00000001", picUrl: "images/pic_ke_jtdx_nor.png" },
        { id: "00000002", picUrl: "images/pic_ke_lt_nor.png" },
        { id: "00000003", picUrl: "images/pic_ke_tk_nor.png" },
        { id: "00000004", picUrl: "images/pic_ke_xhw_nor.png" },
        { id: "00000005", picUrl: "images/pic_ke_xndx_nor.png" },
        { id: "00000006", picUrl: "images/pic_ke_xx_nor.png" },
        { id: "00000007", picUrl: "images/pic_ke_yd_pre.png" },
        { id: "00000008", picUrl: "images/pic_ke_yhcs_nor.png" },
        { id: "00000009", picUrl: "images/pic_ke_zsj_nor.png" }
      ]
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