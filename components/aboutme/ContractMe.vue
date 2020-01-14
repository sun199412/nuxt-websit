<template>
  <div class="contract">
    <div class="title">联系我们</div>
    <ul class="iconBox">
      <li v-for="item in contractList" :key="item.id">
        <img :src="item.pic_url" />
        <div class="iconBox_title">{{ item.title }}</div>
        <div class="iconBox_text">{{ item.val }}</div>
      </li>
    </ul>
    <div class="address" id="allmap"></div>
    <!-- <img :src="address_url" class="address" /> -->
    <el-form
      :model="ruleForm"
      status-icon
      :rules="rules"
      ref="ruleForm"
      label-width="100px"
      class="demo-ruleForm"
    >
      <el-form-item prop="companyNm">
        <el-input placeholder="请输入公司名称" v-model="ruleForm.companyNm" autocomplete="off"></el-input>
      </el-form-item>
      <el-form-item prop="name">
        <el-input placeholder="请输入姓名" v-model="ruleForm.name" autocomplete="off"></el-input>
      </el-form-item>
      <div class="phone">
        <el-form-item prop="phone">
          <el-input placeholder="请输入电话" v-model.number="ruleForm.phone" autocomplete="off"></el-input>
        </el-form-item>
      </div>
      <div class="content">
        <el-form-item prop="reason">
          <el-input
            type="textarea"
            :rows="4"
            placeholder="请输入内容"
            v-model="ruleForm.reason"
            autocomplete="off"
          ></el-input>
        </el-form-item>
      </div>
      <el-form-item>
        <el-button type="warning" @click="submitForm('ruleForm')" plain>提交</el-button>
      </el-form-item>
    </el-form>
  </div>
</template>

<script>
export default {
  mounted() {
    this.init();
  },
  data() {
    return {
      ruleForm: {
        companyNm: "",
        name: "",
        phone: "",
        reason: ""
      },
      rules: {
        companyNm: [
          { required: false, message: "请输入公司名称", trigger: "blur" }
        ],
        name: [{ required: false, message: "请输入姓名", trigger: "blur" }],
        phone: [{ required: false, message: "请输入电话", trigger: "blur" }],
        reason: [{ required: false, message: "请输入内容", trigger: "blur" }]
      },
      contractList: [
        {
          id: "00000",
          title: "地址",
          val: "重庆市渝北区光电园麒麟D座12-1",
          pic_url: "images/ic_aboutus_adr.png"
        },
        {
          id: "00001",
          title: "电话",
          val: "400-100-4220",
          pic_url: "images/ic_aboutus_phone.png"
        },
        {
          id: "00002",
          title: "邮箱",
          val: "258563460@qq.com",
          pic_url: "images/ic_aboutus_yx.png"
        },
        {
          id: "00003",
          title: "微信公众号",
          val: "gh_279162e2b0eb",
          pic_url: "images/ic_aboutus_wxgzh.png"
        }
      ],
      address_url: "images/address.png"
    };
  },
  methods: {
    init() {
      var map = new BMap.Map("allmap");
      var point = new BMap.Point(106.504330,29.619820);
      var marker = new BMap.Marker(point); // 创建标注
      map.addOverlay(marker); // 将标注添加到地图中
      map.centerAndZoom(point, 19);
      var opts = {
        width: 307, // 信息窗口宽度
        height: 100, // 信息窗口高度
        title: "重庆市美唐科技有限公司" // 信息窗口标题
      };
      var infoWindow = new BMap.InfoWindow(
        "重庆市渝北区光电园麒麟D座12-1",
        opts
      ); // 创建信息窗口对象
      map.openInfoWindow(infoWindow, point); //开启信息窗口
      map.enableScrollWheelZoom(true);
    },

    // 提交
    submitForm(formName) {
      this.$refs[formName].validate(valid => {
        if (valid) {
          alert("submit!");
        } else {
          console.log("error submit!!");
          return false;
        }
      });
    }
  }
};
</script>

<style lang="scss" scoped>
$titleColor: #1c1e2b;
$activeColor: #FC6B00;
.contract {
  width: 100%;
  background: #fff;
  padding: 120px 360px;
  box-sizing: border-box;
  .title {
    font-size: 44px;
    color: $titleColor;
    text-align: center;
  }
  .iconBox {
    display: flex;
    justify-content: space-between;
    padding: 0 33px;
    box-sizing: border-box;
    margin-top: 126px;
    li {
      text-align: center;
      .iconBox_title {
        font-size: 24px;
        color: $titleColor;
        margin-top: 32px;
      }
      .iconBox_text {
        color: #666;
        margin-top: 13px;
      }
    }
  }
  .address {
    width: 1200px;
    height: 408px;
    margin-top: 82px;
    margin-bottom: 50px;
  }
  .phone {
    float: left;
    .el-form-item {
      margin-right: 0;
    }
  }
  .content {
    clear: both;
    .el-form-item {
      width: 100%;
    }
  }
  .el-form-item {
    float: left;
    width: 369px;
    margin-right: 38px;
  }
}

/deep/ .el-input__inner {
  border: none;
  border-bottom: 1px solid #dcdfe6;
  border-radius: 0;
}
/deep/ .el-form-item__content {
  margin-left: 0 !important;
}
/deep/ .el-button {
  width: 112px;
  font-size: 16px;
  padding: 15px 20px;
}

/deep/ .el-form {
  height: 230px;
}
/deep/ .el-textarea__inner {
  @extend .el-input__inner;
}
/deep/ .BMap_bubble_title {
  font-size: 18px;
  color: $activeColor;
}

/deep/ .BMap_bubble_content {
  font-size: 16px;
  color: $titleColor;
  margin-top: 14px;
}
</style>