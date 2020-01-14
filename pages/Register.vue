<template>
  <div class="register">
    <img :src="logo_url" class="logo" />
    <div class="registerBox">
      <img :src="bg_url" />
      <div class="box">
        <div class="title">注册</div>
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
            <el-form-item prop="read">
              <el-checkbox-group v-model="ruleForm.read">
                <el-checkbox label="我已阅读美唐云平台用户协议" name="type" v-model="ruleForm.read"></el-checkbox>
              </el-checkbox-group>
            </el-form-item>
          </div>
          <div class="btn">
            <el-form-item>
              <el-button type="warning" @click="submitForm('ruleForm')">注册</el-button>
            </el-form-item>
          </div>
        </el-form>
        <div class="bottomBox">
          <span>已有账号，</span>
          <el-button type="text" @click="login">去登录</el-button>
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
/deep/ .el-checkbox__input.is-checked + .el-checkbox__label {
  color: $activeColor;
}
/deep/ .el-checkbox__input.is-checked .el-checkbox__inner,
.el-checkbox__input.is-indeterminate .el-checkbox__inner {
  background-color: $activeColor;
  border-color: $activeColor;
}
/deep/ .el-checkbox__inner:hover {
  border-color: $activeColor;
}
</style>