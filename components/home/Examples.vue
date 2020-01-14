<template>
  <div class="example">
    <el-carousel :interval="5000" arrow="always" height="700px">
      <el-carousel-item>
        <div class="exampleItem">
          <img :src="exampleImg1" />
          <div class="title">客户案列</div>
          <div class="description">Customer case</div>
          <div class="example_content">
            <img :src="exampleItemImg" />
            <img :src="exampleImg1Logo" class="exampleImg1Logo" />
            <div class="example_content_text">
              <div class="example_content_text_title">果琳用户群发短信</div>
              <div>大家都知道每个短信平台的业务内容是差不多的，唯一不同的是提供的服务质量和发送的效果。美唐云短信平台</div>
              <div>Everyone knows that the business content of each SMS platform is the same, the only difference is the quality of service provided and the delivery effect. Meitangyun SMS platform</div>
            </div>
          </div>
        </div>
      </el-carousel-item>
      <el-carousel-item>
        <div class="exampleItem">
          <img :src="exampleImg1" />
          <div class="title">客户案列</div>
          <div class="description">Customer case</div>
          <div class="example_content">
            <img :src="exampleItemImg" />
            <img :src="exampleImg1Logo" class="exampleImg1Logo" />
            <div class="example_content_text">
              <div class="example_content_text_title">果琳用户群发短信</div>
              <div>大家都知道每个短信平台的业务内容是差不多的，唯一不同的是提供的服务质量和发送的效果。美唐云短信平台</div>
              <div>Everyone knows that the business content of each SMS platform is the same, the only difference is the quality of service provided and the delivery effect. Meitangyun SMS platform</div>
            </div>
          </div>
        </div>
      </el-carousel-item>
      <!-- <el-carousel-item v-for="item in 4" :key="item">
        {{item}}
      </el-carousel-item>-->
    </el-carousel>
  </div>
</template>

<script>
export default {
  data() {
    return {
      exampleImg1: "images/pic_al_bg.png",
      exampleItemImg: "images/ic_al_logo.png",
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