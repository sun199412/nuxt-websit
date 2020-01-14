<template>
  <div class="register">
    <img :src="logo_url" class="logo" />
    <div class="registerBox">
      <img :src="bg_url" />
      <div class="box">
        <div class="title">重置密码</div>
        <el-form
          :model="ruleForm"
          status-icon
          :rules="rules"
          ref="ruleForm"
          label-width="100px"
          class="demo-ruleForm"
        >
          <el-form-item prop="phone">
            <el-input placeholder="请输入手机号码" v-model="ruleForm.phone" autocomplete="off"></el-input>
          </el-form-item>
          <el-form-item prop="shortMsg">
            <el-input placeholder="请输入短信验证码" v-model="ruleForm.shortMsg" autocomplete="off"></el-input>
          </el-form-item>
          <el-form-item prop="password">
            <el-input
              type="password"
              placeholder="请设置登录密码"
              v-model="ruleForm.password"
              autocomplete="off"
            ></el-input>
          </el-form-item>
          <el-form-item prop="code">
            <el-input placeholder="请输入验证码" v-model="ruleForm.code"></el-input>
            <div class="code">MCFK</div>
          </el-form-item>
          <div class="btn">
            <el-form-item>
              <el-button type="warning" @click="submitForm('ruleForm')">重置密码</el-button>
            </el-form-item>
          </div>
        </el-form>
        <div class="bottomBox">
          <el-button type="text" @click="login">登录</el-button>
          <el-button type="text" @click="register">注册</el-button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  layout: "Other",
  data() {
    return {
      logo_url: "images/pic_home_logo.png",
      bg_url: "images/pic_login_ch.png",
      ruleForm: {
        phone: "",
        password: "",
        code: "",
        shortMsg: "",
        read: ""
      },
      rules: {
        phone: [{ required: true, message: "请输入手机号码", trigger: "blur" }],
        password: [{ required: true, message: "请输入密码", trigger: "blur" }],
        code: [{ required: true, message: "请输入验证码", trigger: "blur" }],
        shortMsg: [
          { required: true, message: "请输入短信验证码", trigger: "blur" }
        ],
        read: [{ required: true, message: "请勾选", trigger: "change" }]
      }
    };
  },
  methods: {
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
    },
    // 跳转到登录页
    login() {
      this.$router.push('/login')
    },
    // 跳转到注册页面
    register() {
      this.$router.push('register')
    }
  }
};
</script>

<style lang="scss" scoped>
$activeColor: #fc6b00;
.register {
  width: 100%;
  height: 100vh;
  overflow: hidden;
  background: #272c3a;
  padding: 175px 330px;
  box-sizing: border-box;
  position: relative;
  .logo {
    width: 176px;
    position: absolute;
    width: 176px;
    top: 55px;
    left: 47px;
  }
  .registerBox {
    width: 100%;
    // display: flex;
    img {
      width: 630px;
    }
    .box {
      width: calc(100% - 630px);
      background: #fff;
      padding: 32px 95px 32px 95px;
      box-sizing: border-box;
      float: right;
      .title {
        font-size: 30px;
        color: #333333;
        text-align: center;
      }
      .el-form {
        width: 439.75px;
        margin-top: 49px;
        box-sizing: border-box;
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
        .btn {
          .el-form-item {
            margin-bottom: 0;
          }
        }
      }
      .bottomBox {
        font-size: 18px;
        color: #666;
        text-align: center;
        .el-button {
          font-size: 18px;
          color: $activeColor;
        }
      }
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