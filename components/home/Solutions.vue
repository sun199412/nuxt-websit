<template>
  <div class="solutions">
    <div class="title">{{ dataSource.title }}</div>
    <div class="description">{{ dataSource.desc }}</div>
    <div class="tabBox">
      <el-tabs v-model="activeName" @tab-click="handleClick">
        <el-tab-pane
          class="tabItem"
          v-for="item in dataSource.tab_pane_list"
          :key="item.id"
          :label="item.title"
          :name="item.title"
        >
          <div class="tabPane">
            <div class="tabPaneLft">
              <div class="tabPaneLftItem" v-for="it in item.left_list" :key="it.id">
                <div class="tabPaneLftItemText">{{ it.desc }}</div>
                <div class="triangle"></div>
              </div>
            </div>
            <img :src="solutionsImg" class="tabPanePic" />
            <div class="tabPaneLft">
              <div class="tabPaneLftItem" v-for="it in item.right_list" :key="it.id">
                <div class="tabPaneLftItemText">{{ it.desc }}</div>
                <div class="triangle2"></div>
              </div>
            </div>
          </div>
        </el-tab-pane>
      </el-tabs>
    </div>
  </div>
</template>

<script>
export default {
  props: ["dataSource"],
  data() {
    return {
      activeName: this.dataSource.tab_pane_list[0].title,
      solutionsImg: "images/pic_jjfa.png"
    };
  },
  methods: {
    handleClick(tab, event) {
      this.activeName = tab.name;
    }
  }
};
</script>

<style lang="scss">
$activeColor: #fc6b00;
.el-tabs__item {
  font-size: 18px;
  padding: 0 72px;
  &:hover {
    color: $activeColor;
  }
}
.el-tabs__active-bar {
  background-color: $activeColor;
}
.el-tabs__item.is-active {
  color: $activeColor;
}
</style>

<style lang="scss" scoped>
$titleColor: #1c1e2b;
.solutions {
  width: 100%;
  height: 1000px;
  background: #f4f5fa;
  padding: 98px 360px 107px 360px;
  box-sizing: border-box;
  .title {
    text-align: center;
    font-size: 44px;
    color: $titleColor;
    padding-bottom: 17px;
  }
  .description {
    font-size: 20px;
    color: #666;
    text-align: center;
    margin-bottom: 71px;
  }
  .tabBox {
    .tabPane {
      margin-top: 66px;
      display: flex;
      justify-content: space-between;
      .tabPaneLft {
        width: 241px;
        .tabPaneLftItem {
          position: relative;
          margin-top: 25px;
          .tabPaneLftItemText {
            width: 215px;
            padding: 17px 20px 45px 20px;
            box-sizing: border-box;
            background: #fff;
            border-radius: 5px;
            color: #666;
            font-size: 14px;
          }
          .triangle {
            width: 0;
            height: 0;
            border: solid;
            border-width: 14px 14px 14px 14px;
            border-color: transparent transparent transparent #fff;
            position: absolute;
            right: 0;
            top: 50%;
            margin-top: -14px;
          }
          .triangle2 {
            @extend .triangle;
            border-color: transparent #fff transparent transparent;
            left: -28px;
          }
        }
        .tabPaneLftItem:first-child {
          margin-top: 0;
        }
        .isfirst {
          margin-top: 0;
        }
      }
      // .tabPaneRight {
      //   width: 241px;
      // }
    }
  }
}
</style>