<template>
  <div class="production">
    <div class="title">{{ dataSource.title }}</div>
    <div class="description">{{ dataSource.desc }}</div>
    <div class="contentBox">
      <div class="pic">
        <img :src="dataSource.bg_url" />
        <div class="dateBox">
          <div class="dateBox_left">
            <div class="dateBox_left_day">{{ record.publishDate | filterDay(record.publishDate) }}</div>
            <div class="dateBox_left_mouth">{{ record.publishDate | filterDay(record.publishDate) }}</div>
            <img :src="dataSource.icon_url" />
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
          v-for="(item) in dataSource.rows"
          :key="item.id"
          @mouseover="handleActive(item)"
          @mouseout="handleHide(item)"
          @click="handleClick(item)"
        >
          <div class="listactive" v-show="item.hover_flag === '1'">
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
          <div class="list" v-show="item.hover_flag !== '1'">
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
  props: ['dataSource'],
  data() {
    return {
      record: this.dataSource.rows[0]
    };
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
      const newsArr = this.dataSource.rows;
      newsArr.forEach((it, index) => {
        if (item.id === it.id) {
          if (type === "mouseover") {
            this.$set(newsArr[index], "hover_flag", "1");
          } else if (type === "mouseout") {
            this.$set(newsArr[index], "hover_flag", "2");
          } else {
            this.$set(newsArr[index], "click_flag", "1");
            this.record = newsArr[index];
          }
        } else {
          this.$set(newsArr[index], "click_flag", "2");
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
$titleColor: #1C1E2B;
$border: 1px solid #ecedf2;
.production {
  width: 100%;
  height: 888px;
  padding: 96px 360px 103px 360px;
  box-sizing: border-box;
  .title {
    text-align: center;
    font-size: 44px;
    color: $titleColor;
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
            color: $titleColor;
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