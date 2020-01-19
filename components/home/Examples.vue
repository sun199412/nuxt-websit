<template>
<div>
  <div class="example">
    <el-carousel :interval="5000" arrow="always" height="700px">
      <el-carousel-item v-for="item in dataSource.list" :key="item.id">
        <div class="exampleItem">
          <img :src="dataSource.bg_url" />
          <div class="title">{{ dataSource.title }}</div>
          <div class="description">{{ dataSource.desc }}</div>
          <div class="example_content">
            <img :src="item.cover_url" />
            <img :src="exampleImg1Logo" class="exampleImg1Logo" />
            <div class="example_content_text">
              <div class="example_content_text_title">{{ item.title }}</div>
              <div>{{ item.desc }}</div>
              <div>{{ item.eng }}</div>
            </div>
          </div>
        </div>
      </el-carousel-item>
    </el-carousel>
  </div>
  <sponsor :dataSource="dataSource.sponsorList"></sponsor>
</div>
</template>

<script>
import Sponsor from "~/components/home/Sponsor";
export default {
  props: ['dataSource'],
  components:{
    Sponsor
  },
  data() {
    return {
      exampleImg1Logo: "images/ic_al_yh.png"
    };
  }
};
</script>

<style lang="scss" scoped>
.example {
  .exampleItem {
    position: relative;
    .title {
      text-align: center;
      font-size: 44px;
      padding-bottom: 17px;
      position: absolute;
      top: 82px;
      color: #fff;
      left: 50%;
      margin-left: -88px;
    }
    .description {
      font-size: 20px;
      color: #666;
      text-align: center;
      margin-bottom: 71px;
      position: absolute;
      top: 143px;
      color: #fff;
      left: 50%;
      margin-left: -70px;
    }
    .example_content {
      width: 862px;
      position: absolute;
      top: 50%;
      margin-top: -61px;
      left: 50%;
      margin-left: -431px;
      display: flex;
      .exampleImg1Logo {
        position: relative;
        top: -84px;
        left: 93px;
      }
      .example_content_text {
        width: 613px;
        position: absolute;
        right: -15px;
        color: #fff;
        top: -56px;
        .example_content_text_title {
          font-size: 28px;
          margin: 0;
        }
        div {
          margin-top: 37px;
        }
      }
    }
  }

  /deep/ .el-carousel__arrow--left {
    left: 350px;
  }
  /deep/ .el-carousel__arrow--right {
    right: 350px;
  }
  /deep/ .el-carousel__indicator--horizontal {
    padding: 38px 4px;
  }
  /deep/ .el-icon-arrow-left {
    font-size: 39px;
    color: #a7a7a7;
  }
  /deep/ .el-icon-arrow-right {
    font-size: 39px;
    color: #a7a7a7;
  }
  /deep/ .el-carousel__button {
    width: 10px;
    height: 10px;
    border-radius: 5px;
  }
}
</style>