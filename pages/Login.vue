<template>
  <div class="login">
    <img :src="logo_url" class="logo" />
    <div class="loginBox">
      <img :src="bg_url" />
      <div class="box">
        <div class="title">欢迎登录</div>
        <el-form
          :model="ruleForm"
          status-icon
          :rules="rules"
          ref="ruleForm"
          label-width="100px"
          class="demo-ruleForm"
        >
          <el-form-item prop="username">
            <el-input placeholder="请输入用户名" v-model="ruleForm.username" autocomplete="off"></el-input>
          </el-form-item>
          <el-form-item prop="password">
            <el-input
              type="password"
              placeholder="请输入密码"
              v-model="ruleForm.password"
              autocomplete="off"
            ></el-input>
          </el-form-item>
          <el-form-item prop="code">
            <el-input placeholder="请输入验证码" v-model="ruleForm.code"></el-input>
            <div class="code">MCFK</div>
          </el-form-item>
          <div class="otherHandle">
            <el-form-item prop="type">
              <el-checkbox-group v-model="ruleForm.rememberNm">
                <el-checkbox label="记住用户名" name="type" v-model="ruleForm.rememberNm"></el-checkbox>
              </el-checkbox-group>
            </el-form-item>
            <el-button type="text" class="forgetPs">忘记密码</el-button>
          </div>
          <el-form-item>
            <el-button type="warning" @click="submitForm('ruleForm')">立即发送</el-button>
          </el-form-item>
        </el-form>
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
        username: "",
        password: "",
        code: "",
        rememberNm: ""
      },
      rules: {
        username: [
          { required: true, message: "请输入用户名", trigger: "blur" }
        ],
        password: [{ required: true, message: "请输入密码", trigger: "blur" }],
        code: [{ required: true, message: "请输入验证码", trigger: "blur" }],
        rememberNm: [{ required: true, message: "请选择", trigger: "change" }]
      }
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
$activeColor: #fc6b00;
.login {
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
  .loginBox {
    width: 100%;
    display: flex;
    img {
      width: 630px;
    }
    .box {
      width: 100%;
      background: #fff;
      padding: 93px 95px 65px 95px;
      box-sizing: border-box;
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
.otherHandle {
  position: relative;
}
/deep/ .el-checkbox {
  position: absolute;
  top: -18px;
}
/deep/ .forgetPs {
  position: absolute;
  top: -18px;
  right: 0;
  color: #666;
  font-size: 14px;
}
</style>