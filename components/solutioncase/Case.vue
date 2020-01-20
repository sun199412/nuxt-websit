<template>
  <div class="contentBox">
    <div class="title">行业案例</div>
    <div class="tabBox">
      <el-tabs tab-position="left">
        <el-tab-pane v-for="item in dataSource.tabList" :key="item.id" :label="item.val">
          <ul class="tabPane">
            <li v-for="it in item.list" :key="it.id" class="tabPane_list">
              <img class="logo" :src="it.logo_url" />
              <div class="content">
                <div class="tabPane_title">{{ it.title }}</div>
                <div class="tabPane_text">{{ it.detail }}</div>
                <ul>
                  <li v-for="i in it.iconList" :key="i.id">
                    <img class="icon" :src="i.icon" />
                    <span class="icon_text">{{ i.val }}</span>
                  </li>
                </ul>
              </div>
            </li>
          </ul>
        </el-tab-pane>
      </el-tabs>
      <!-- <tab 
        :list="dataSource.tabList" 
        :activeStatus="active" 
        :hideStatus="hide" 
        :url="dataSource.next_url"
        @toggleTab="renderTab"
      ></tab>-->
      <!-- <ul
        class="tabPane"
        v-show="record.val ? record.val === '教育' : dataSource.tabList[0].val ==='教育'"
      >
        <li v-for="item in tabPaneList" :key="item.id" class="tabPane_list">
          <img class="logo" :src="item.logo_url" />
          <div class="content">
            <div class="tabPane_title">{{ item.title }}</div>
            <div class="tabPane_text">{{ item.detail }}</div>
            <ul>
              <li v-for="it in item.iconList" :key="it.id">
                <img class="icon" :src="it.icon" />
                <span class="icon_text">{{ it.val }}</span>
              </li>
            </ul>
          </div>
        </li>
      </ul>
      <div v-show="record.val==='电商'">电商</div>
      <div v-show="record.val==='金融保险'">金融保险</div>
      <div v-show="record.val==='生活服务'">生活服务</div>
      <div v-show="record.val==='政企服务'">政企服务</div>
      <div v-show="record.val==='交通'">交通</div>
      <div v-show="record.val==='医疗'">医疗</div>
      <div v-show="record.val==='社交'">社交</div>-->
    </div>
  </div>
</template>

<script>
import Tab from "~/components/solutioncase/Tab";
export default {
  props: ["dataSource"],
  components: {
    Tab
  },
  data() {
    return {
      next_url: "images/ic_jjfa_sj.png",
      active: {
        color: "#fc6b00"
      },
      hide: {
        color: "#1C1E2B"
      },
      tabList: [
        { id: "000000000", val: "教育", showFlag: "1" },
        { id: "000000001", val: "电商", showFlag: "2" },
        { id: "000000002", val: "金融保险", showFlag: "2" },
        { id: "000000003", val: "生活服务", showFlag: "2" },
        { id: "000000004", val: "政企服务", showFlag: "2" },
        { id: "000000005", val: "交通", showFlag: "2" },
        { id: "000000006", val: "医疗", showFlag: "2" },
        { id: "000000007", val: "社交", showFlag: "2" }
      ],
      tabPaneList: [
        {
          id: "00",
          logo_url: "images/pic_jjfa_logo1.png",
          title: "大融汇",
          detail:
            "中国移动通信集团有限公司（英文名称：China Mobile Communications Group Co.,Ltd，简称“中国移动”、“CMCC”或“中国移动通信”、“中移动”）是按照国家电信体制改革的总体部署，于2000年4月20日成立的中央企业。",
          iconList: [
            { id: "10", icon: "images/ic_cp_dx.png", val: "验证码&通知短信" },
            { id: "11", icon: "images/ic_yyyz_gbf.png", val: "推广短信" },
            { id: "12", icon: "images/ic_cp_yy.png", val: "语音验证码" }
          ]
        },
        {
          id: "01",
          logo_url: "images/pic_jjfa_logo2.png",
          title: "永辉超市",
          detail:
            "中国移动通信集团有限公司（英文名称：China Mobile Communications Group Co.,Ltd，简称“中国移动”、“CMCC”或“中国移动通信”、“中移动”）是按照国家电信体制改革的总体部署，于2000年4月20日成立的中央企业。",
          iconList: [
            { id: "13", icon: "images/ic_mty_ypt.png", val: "美唐云 " },
            { id: "14", icon: "images/ic_cp_xxpt.png", val: "SI短信网关平台" },
            { id: "15", icon: "images/ic_cp_dxpt.png", val: "企业通信平台" }
          ]
        },
        {
          id: "02",
          logo_url: "images/pic_jjfa_logo3.png",
          title: "果琳",
          detail:
            "中国移动通信集团有限公司（英文名称：China Mobile Communications Group Co.,Ltd，简称“中国移动”、“CMCC”或“中国移动通信”、“中移动”）是按照国家电信体制改革的总体部署，于2000年4月20日成立的中央企业。",
          iconList: [
            { id: "16", icon: "images/ic_cp_dx.png", val: "验证码&通知短信" },
            { id: "17", icon: "images/ic_yyyz_gbf.png", val: "推广短信" },
            { id: "18", icon: "images/ic_cp_yy.png", val: "语音验证码" }
          ]
        },
        {
          id: "03",
          logo_url: "images/pic_jjfa_logo4.png",
          title: "协信天骄物业",
          detail:
            "中国移动通信集团有限公司（英文名称：China Mobile Communications Group Co.,Ltd，简称“中国移动”、“CMCC”或“中国移动通信”、“中移动”）是按照国家电信体制改革的总体部署，于2000年4月20日成立的中央企业。",
          iconList: [
            { id: "19", icon: "images/ic_cp_dx.png", val: "验证码&通知短信" },
            { id: "20", icon: "images/ic_yyyz_gbf.png", val: "推广短信" },
            { id: "21", icon: "images/ic_cp_yy.png", val: "语音验证码" }
          ]
        }
      ],
      record: {} // 选中的数据
    };
  },
  methods: {
    renderTab(item) {
      this.record = item;
      this.dataSource.tabList.forEach((it, index) => {
        if (it.id === item.id) {
          this.$set(this.dataSource.tabList[index], "showFlag", "1");
        } else {
          this.$set(this.dataSource.tabList[index], "showFlag", "2");
        }
      });
    }
  }
};
</script>

<style lang="scss" scoped>
$titleColor: #1c1e2b;
$activeColor: #fc6b00;
.contentBox {
  width: 100%;
  height: 1000px;
  padding: 54px 394px 0 394px;
  box-sizing: border-box;
  .title {
    font-size: 22px;
    color: $titleColor;
    width: 144px;
    border-bottom: 0.5px solid #e8e5e5;
    padding-bottom: 10px;
  }
  .tabBox {
    display: flex;
    .tabPane {
      position: relative;
      .tabPane_list {
        margin-bottom: 58px;
        display: flex;
        align-items: center;
        .logo {
          margin-right: 29px;
          display: inline-block;
        }
        .content {
          width: 694px;
          display: inline-block;
          margin-bottom: 19px;
          .tabPane_title {
            color: $titleColor;
            font-size: 22px;
            margin-bottom: 8px;
          }
          .tabPane_text {
            font-size: 14px;
            color: #666;
            line-height: 20px;
          }
          ul {
            display: flex;
            margin-top: 19px;
            li {
              height: 22px;
              position: relative;
              margin-right: 38px;
              .icon {
                width: 22px;
              }
              .icon_text {
                font-size: 14px;
                color: $titleColor;
                position: relative;
                top: -5px;
              }
            }
          }
        }
      }
    }
  }
}

/deep/ .el-tabs__item {
  padding: 0 36px;
}
</style>