<template>
  <div class="document">
    <tab
      :list="tabList"
      :activeStatus="active"
      :hideStatus="hide"
      :url="next_url"
      @toggleTab="renderTab"
      componentsType="develop"
    ></tab>
    <div class="tabPane" v-show="record.val ? record.val === '快速入手' : tabList[0].val ==='快速入手'">
      <fast :progressList="progressList" :sendList="sendList"></fast>
    </div>
    <div class="tabPane" v-show="record.val === '接口文档'">222</div>
    <div class="tabPane" v-show="record.val === 'SDK下载'">
      <down-load></down-load>
    </div>
  </div>
</template>

<script>
import Tab from "~/components/solutioncase/Tab";
import Fast from "~/components/developmentcenter/Fast";
import DownLoad from "~/components/developmentcenter/DownLoad";
export default {
  components: {
    Tab,
    Fast,
    DownLoad
  },
  data() {
    return {
      next_url: "/images/ic_jjfa_sj.png",
      active: {
        color: "#fc6b00"
      },
      hide: {
        color: "#1C1E2B"
      },
      tabList: [
        // tab数据
        { id: "000", val: "快速入手", showFlag: "1" },
        { id: "001", val: "接口文档", showFlag: "2" },
        { id: "002", val: "SDK下载", showFlag: "2" }
      ],
      progressList: [ // API接入流程
        { id: "0000", val: "注册美唐云账号", num: "1" },
        { id: "0001", val: "登录美唐云官网，获取ACCOUNT和AUTH TOKN并创建对应类型短信的模板跟进美唐运营人员审核通过该模板。", num: "2" },
        { id: "0002", val: "参照文档和DEMO，对接接口并测试。", num: "3" },
        { id: "0003", val: "测试通过，正式上线。", num: "4" },
        { id: "0004", val: "充值使用。", num: "5" }
      ],
      sendList: [
        { id: "0005", val: "注册美唐云账号", num: "1" },
        { id: "0006", val: "登录美唐云官网，创建对应类型短信的模板，跟进美唐运营人员审核通过该模板。", num: "2" },
        { id: "0007", val: "点击对应的业务类型进入业务模块，测试网页发送。", num: "3" },
        { id: "0008", val: "测试通过，充值使用。", num: "4" },
      ],
      record: {} // 选中的数据
    };
  },
  methods: {
    renderTab(item) {
      this.record = item;
      this.tabList.forEach((it, index) => {
        if (it.id === item.id) {
          this.$set(this.tabList[index], "showFlag", "1");
        } else {
          this.$set(this.tabList[index], "showFlag", "2");
        }
      });
    }
  }
};
</script>

<style lang="scss" scoped>
.document {
  width: 100%;
  // height: 1082px;
  padding: 45px 390px 113px 390px;
  box-sizing: border-box;
  display: flex;
}
</style>