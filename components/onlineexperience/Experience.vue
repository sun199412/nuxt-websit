<template>
  <div class="experience">
    <div class="shortCode isleft">
      <div class="shortBg">
        <div class="title">短信验证码</div>
        <el-form
          :model="ruleForm"
          status-icon
          :rules="rules"
          ref="ruleForm"
          label-width="100px"
          class="demo-ruleForm"
        >
          <el-form-item prop="phoneNumber">
            <el-input
              placeholder="输入手机号码"
              v-model.number="ruleForm.phoneNumber"
              autocomplete="off"
            ></el-input>
          </el-form-item>
          <el-form-item prop="code">
            <el-input placeholder="验证码或计算结果" v-model="ruleForm.code"></el-input>
            <div class="code">MCFK</div>
          </el-form-item>
          <el-form-item>
            <el-button type="warning" @click="submitForm('ruleForm')">立即发送</el-button>
          </el-form-item>
        </el-form>
        <div class="func">
          <div>
            <img :src="icon_url" />
            <span class="icon_text">52,569人已体验</span>
          </div>
          <div>
            <a href="/" class="left">了解产品</a>
            <a href="/">立即注册</a>
          </div>
        </div>
      </div>
    </div>
    <div class="shortCode">
      <div class="shortBg shortBg_right">
        <div class="title">语音验证码</div>
        <el-form
          :model="ruleForm2"
          status-icon
          :rules="rules2"
          ref="ruleForm2"
          label-width="100px"
          class="demo-ruleForm"
        >
          <el-form-item prop="phoneNumber">
            <el-input
              placeholder="输入手机号码"
              v-model.number="ruleForm2.phoneNumber"
              autocomplete="off"
            ></el-input>
          </el-form-item>
          <el-form-item prop="code">
            <el-input placeholder="验证码或计算结果" v-model="ruleForm2.code"></el-input>
            <div class="code">MCFK</div>
          </el-form-item>
          <el-form-item>
            <el-button type="warning" @click="submitForm('ruleForm2')">立即发送</el-button>
          </el-form-item>
        </el-form>
        <div class="func">
          <div>
            <img :src="icon_url" />
            <span class="icon_text">52,569人已体验</span>
          </div>
          <div>
            <a href="/" class="left">了解产品</a>
            <a href="/">立即注册</a>
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
      ruleForm: {
        phoneNumber: "",
        code: ""
      },
      rules: {
        phoneNumber: [
          { required: true, message: "请输入手机号", trigger: "blur" }
        ],
        code: [{ required: true, message: "请输入验证码", trigger: "blur" }]
      },

      ruleForm2: {
        phoneNumber: "",
        code: ""
      },
      rules2: {
        phoneNumber: [
          { required: true, message: "请输入手机号", trigger: "blur" }
        ],
        code: [{ required: true, message: "请输入验证码", trigger: "blur" }]
      },
      icon_url: "/images/ic_zxty_dz.png"
    };
  },
  methods: {
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
$activeColor: #fc6b00;
.experience {
  width: 100%;
  background: #f4f5fa;
  padding: 78px 380px 98px 380px;
  box-sizing: border-box;
  display: flex;
  .isleft {
    margin-right: 60px;
  }
  .shortCode {
    width: 550px;
    height: 630px;
    background: #fff;
    .shortBg {
      width: 550px;
      height: 607px;
      background: url("/images/pic_zxty_dx.png") center no-repeat;
      .title {
        font-size: 28px;
        color: $titleColor;
        padding: 31px 0;
        box-sizing: border-box;
        border-bottom: 1px solid #e8e5e5;
        text-align: center;
      }
      .el-form {
        width: 439.75px;
        margin: 210px auto 0 auto;
        .el-form-item {
          margin-bottom: 30px;
          .code {
            background: #eff2ff;
            width: 96px;
            height: 43px;
            text-align: center;
            line-height: 43px;
            position: absolute;
            top: 6px;
            right: 28px;
            font-size: 24px;
          }
          .el-button {
            width: 100%;
            font-size: 20px;
            height: 56px;
          }
        }
      }
      .func {
        width: 439.75px;
        display: flex;
        justify-content: space-between;
        margin: 0 auto;
        .icon_text {
          font-size: 14px;
          color: #666;
        }
        a {
          font-size: 14px;
          color: $activeColor;
        }
        .left {
          margin-right: 28px;
        }
      }
    }
    .shortBg_right {
      background: url('/images/pic_zxty_yy.png') center no-repeat;
    }
  }
}

/deep/ .el-form-item__content {
  margin-left: 0 !important;
}
/deep/ .el-form-item__error {
  height: 30px;
  line-height: 30px;
  padding-top: 0;
}
/deep/ .el-input__inner {
  height: 56px;
  line-height: 56px;
}
/deep/ .el-button--warning {
  background-color: $activeColor;
  border-color: $activeColor;
}
</style>