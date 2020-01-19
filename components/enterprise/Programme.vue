<template>
  <div class="programme">
    <div class="title">{{ dataSource.title }}</div>
    <div class="desc">{{ dataSource.desc }}</div>
    <div class="programme_box">
      <div class="pic">
        <div class="pic_title">{{ dataSource.flame_pic_title }}</div>
        <img :src="dataSource.flame_url" />
      </div>
      <div class="into">
        <div class="into_title">{{ dataSource.flame_desc_title }}</div>
        <div class="listBox">
          <div class="listBox_title">{{ dataSource.flame_desc }}</div>
          <ul>
            <li v-for="item in dataSource.list" :key="item.id"><span>{{ item.val }}</span></li>
          </ul>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: ['dataSource'],
  data() {
    return {
      frame_url: "images/pic_ecp_fnjg.png"
    };
  }
};
</script>

<style lang="scss" scoped>
$titleColor: #1c1e2b;
$activeColor: #fc6b00;
.programme {
  width: 100%;
  height: 1014px;
  padding: 98px 360px 108px 360px;
  box-sizing: border-box;
  text-align: center;
  background: #f4f5fa;
  .title {
    color: $titleColor;
    font-size: 44px;
  }
  .desc {
    color: #666;
    font-size: 28px;
    width: 1200px;
    margin: 11px auto 0 auto;
  }
  .programme_box {
    display: flex;
    justify-content: space-between;
    margin-top: 78px;
    .pic {
      margin-right: 227px;
      .pic_title {
        height: 31px;
        border-left: 7px solid $activeColor;
        font-size: 24px;
        color: $titleColor;
        text-align: left;
        text-indent: 7px;
        margin-bottom: 29px;
      }
    }
    .into {
      width: 401px;
      .into_title {
        height: 31px;
        border-left: 7px solid $activeColor;
        font-size: 24px;
        color: $titleColor;
        text-align: left;
        text-indent: 7px;
        margin-bottom: 29px;
      }
      .listBox {
        width: 100%;
        padding: 23px 26px 71px 31px;
        box-sizing: border-box;
        background: #fff;
        .listBox_title {
          text-align: left;
          color: $titleColor;
          margin-bottom: 27px;
        }
        ul {
          list-style: disc;
          color: $activeColor;
          text-align: left;
          li {
            font-size: 14px;
            margin-bottom: 20px;
            span {
              color: #666;
            }
          }
        }
      }
    }
  }
}
</style>