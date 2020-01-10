<template>
  <div class="production">
    <div class="title">产品动态</div>
    <div class="description">News and information</div>
    <div class="contentBox">
      <div class="pic">
        <img :src="picUrl" />
        <div class="dateBox">
          <div class="dateBox_left">
            <div class="dateBox_left_day">{{ record.publishDate | filterDay(record.publishDate) }}</div>
            <div class="dateBox_left_mouth">{{ record.publishDate | filterDay(record.publishDate) }}</div>
            <img :src="nextPic" />
          </div>
          <div class="dateBox_right">
            <div class="dateBox_right_title">{{ record.title }}</div>
            <div class="dateBox_right_text">{{ record.detail }}</div>
          </div>
        </div>
      </div>
      <div class="news">
        <div
          class="listItem"
          v-for="(item) in newsArr"
          :key="item.id"
          @mouseover="handleActive(item)"
          @mouseout="handleHide(item)"
          @click="handleClick(item)"
        >
          <div class="listactive" v-show="item.hoverFlag === '1'">
            <div class="list_active_left">
              <div class="list_active_left_title">{{ item.title }}</div>
              <div class="list_active_left_text">{{ item.detail }}</div>
            </div>
            <div class="list_active_right">
              <div
                class="list_active_right_title"
              >{{ item.publishDate | filterDay(item.publishDate) }}</div>
              <div
                class="list_active_right_text"
              >{{ item.publishDate | filterMouth(item.publishDate) }}</div>
            </div>
          </div>
          <div class="list" v-show="item.hoverFlag !== '1'">
            <span>{{ item.title }}</span>
            <span>{{ item.publishDate }}</span>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      picUrl: "images/pic_zx_tp.png",
      nextPic: "images/ic_zx_xq.png",
      record: {},
      newsArr: [
        {
          id: "00001000",
          title: "传蚂蚁金服拟建10亿美元创投基金",
          detail:
            "11月27日消息，据外媒报道，据知情人士透露，马云旗下的蚂蚁金服正计划筹集持资约10亿美元。",
          publishDate: "20191127",
          picUrl: "images/pic_zx_tp.png",
          hoverFlag: "2",
          clickFlag: "2"
        },
        {
          id: "00001001",
          title: "韩方向朝鲜转达特朗普对金正恩的生日祝福",
          detail:
            "10日下午，刚刚结束访美的韩国青瓦台国家安保室室长郑义溶在仁川国际机场会见记者时，透露了他与特朗普的会面情况。郑义溶表示，1月8日是金正恩的生日，特朗普嘱咐其向金正恩转达生日祝福。",
          publishDate: "20191129",
          picUrl: "images/pic_zx_tp.png",
          hoverFlag: "2",
          clickFlag: "2"
        },
        {
          id: "00001002",
          title: "伊朗总统与卡塔尔副首相通话:希望美国不要再犯错",
          detail:
            "据美国有线电视新闻网(CNN)刚刚更新消息，伊朗外交部发表声明说，伊朗总统鲁哈尼与卡塔尔副首相穆罕默德9日通电话，两人讨论了军事行动以及美国在该地区的介入。",
          publishDate: "20191130",
          picUrl: "images/pic_zx_tp.png",
          hoverFlag: "2",
          clickFlag: "2"
        },
        {
          id: "00001003",
          title: "冬青奥会洛桑开幕 圣火点亮“奥运之都",
          detail:
            "新华社瑞士洛桑1月9日电（记者刘曲苏斌刘旸）第三届冬季青年奥林匹克运动会（以下简称“冬青奥会”）9日晚在“奥运之都”瑞士洛桑开幕。以“家”为主创理念的开幕式突出洛桑作为国际奥委会所在地和国际体育故乡，欢迎世界体育“回家”。",
          publishDate: "20191101",
          picUrl: "images/pic_zx_tp.png",
          hoverFlag: "2",
          clickFlag: "2"
        },
        {
          id: "00001004",
          title: "继续追缉！日本检方提请向戈恩妻子发出国际通缉令",
          detail:
            "海外网1月10日电 对于日产汽车公司前董事长卡洛斯·戈恩在取保候审阶段神秘逃离日本一事，最近又有新进展。据日本媒体10日报道，东京检方已向国际刑警组织提请，对戈恩的妻子发出国际通缉令。",
          publishDate: "20191201",
          picUrl: "images/pic_zx_tp.png",
          hoverFlag: "2",
          clickFlag: "2"
        },
        {
          id: "00001005",
          title: "不明身份飞机袭击叙东部，伊拉克准军事部队8名士兵丧生",
          detail:
            "法新社刚刚消息，在美国和伊朗之间紧张局势不断升级的背景下，叙利亚东部周五(10日)遭遇空袭，造成伊拉克准军事部队哈西德•沙比(Hashed al-Shaabi)8名士兵丧生。",
          publishDate: "20191220",
          picUrl: "images/pic_zx_tp.png",
          hoverFlag: "2",
          clickFlag: "2"
        },
        {
          id: "00001006",
          title: "中东局势难测 美国多个城市出现反战抗议活动(图)",
          detail:
            "法新社刚刚消息，在美国和伊朗之间紧张局势不断升级的背景下，叙利亚东部周五(10日)遭遇空袭，造成伊拉克准军事部队哈西德•沙比(Hashed al-Shaabi)8名士兵丧生。",
          publishDate: "20191224",
          picUrl: "images/pic_zx_tp.png",
          hoverFlag: "2",
          clickFlag: "2"
        }
      ]
    };
  },
  mounted() {
    this.record = this.newsArr[0];
  },
  methods: {
    // 鼠标移入
    handleActive(list) {
      this.changeHandleFlag(list, "mouseover");
    },
    // 鼠标移出
    handleHide(list) {
      this.changeHandleFlag(list, "mouseout");
    },
    // 点击事件
    handleClick(list) {
      this.changeHandleFlag(list, "click");
    },
    // 封装触发事件
    changeHandleFlag(item, type) {
      this.newsArr.forEach((it, index) => {
        if (item.id === it.id) {
          if (type === "mouseover") {
            this.$set(this.newsArr[index], "hoverFlag", "1");
          } else if (type === "mouseout") {
            this.$set(this.newsArr[index], "hoverFlag", "2");
          } else {
            this.$set(this.newsArr[index], "clickFlag", "1");
            this.record = this.newsArr[index];
          }
        } else {
          this.$set(this.newsArr[index], "clickFlag", "2");
        }
      });
    }
  },
  filters: {
    filterDay(val) {
      // 展示天
      try {
        return val.substr(6, 2);
      } catch (error) {
        return val
      }
    },
    filterMouth(val) {
      // 展示年月
      try {
        return val.substr(0, 4) + "." + val.substr(4, 2);
      } catch (error) {
        return val
      }
    }
  }
};
</script>

<style lang="scss" scoped>
$activeColor: #fc6b00;
$textColor: #1c1e2b;
$border: 1px solid #ecedf2;
.production {
  width: 100%;
  height: 888px;
  padding: 96px 360px 103px 360px;
  box-sizing: border-box;
  .title {
    text-align: center;
    font-size: 44px;
    color: $textColor;
    padding-bottom: 10px;
  }
  .description {
    font-size: 20px;
    color: #666;
    text-align: center;
  }
  .contentBox {
    display: flex;
    justify-content: space-between;
    margin-top: 76px;
    .pic {
      background: #f4f5fa;
      width: 544px;
      .dateBox {
        height: 210px;
        width: 100%;
        padding: 21px 32px;
        box-sizing: border-box;
        display: flex;
        justify-content: space-between;
        .dateBox_left {
          color: $activeColor;
          text-align: center;
          margin-right: 44px;
          .dateBox_left_day {
            font-size: 44px;
          }
          .dateBox_left_mouth {
            font-size: 14px;
            margin-bottom: 10px;
          }
        }
        .dateBox_right {
          width: 376px;
          .dateBox_right_title {
            color: $textColor;
            font-size: 20px;
            border-bottom: $border;
            padding: 20px 0;
            box-sizing: border-box;
            overflow: hidden;
            text-overflow: ellipsis;
            white-space: nowrap;
          }
          .dateBox_right_text {
            font-size: 14px;
            color: #666666;
            padding-top: 20px;
            box-sizing: border-box;
          }
        }
      }
    }
    .news {
      width: 622px;
      .listItem {
        .listactive {
          display: flex;
          justify-content: space-between;
          padding: 0 19px 0 28px;
          box-sizing: border-box;
          box-shadow: 0 1px 1px 1px #ccc;
          .list_active_left {
            width: 477px;
            .list_active_left_title {
              color: $activeColor;
              font-size: 18px;
              border-bottom: $border;
              padding: 17px 0 15px 0;
              box-sizing: border-box;
            }
            .list_active_left_text {
              color: #666;
              font-size: 14px;
              padding: 15px 0;
              box-sizing: border-box;
            }
          }
          .list_active_right {
            display: flex;
            flex-direction: column;
            align-items: center;
            justify-content: center;
            .list_active_right_title {
              font-size: 44px;
              color: $activeColor;
            }
            .list_active_right_text {
              font-size: 14px;
              color: $activeColor;
            }
          }
        }
        .list {
          display: flex;
          justify-content: space-between;
          font-size: 14px;
          color: #666;
          padding: 22px 0;
          border-bottom: $border;
        }
      }
    }
  }
}
</style>