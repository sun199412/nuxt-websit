<template>
  <div>
    <header ref="head">
      <img :src="logo" />
      <div class="navBox">
        <ul>
          <li>
            <nuxt-link to="/">首页</nuxt-link>
          </li>
          <li class="service">
            <!-- <nuxt-link to="/a">服务与产品</nuxt-link> -->
            <el-dropdown>
              <span class="el-dropdown-link" ref="production">服务与产品</span>
              <el-dropdown-menu slot="dropdown">
                <div class="screen" @mousemove="changeHover()" @mouseout="hideHover()">
                  <div class="service_box">
                    <img :src="light" />
                    <div>服务</div>
                    <el-dropdown-item>
                      <nuxt-link to="/shortmessage">验证码&通知短信</nuxt-link>
                    </el-dropdown-item>
                    <el-dropdown-item>
                      <nuxt-link to="/extension">推广短信</nuxt-link>
                    </el-dropdown-item>
                    <el-dropdown-item>
                      <nuxt-link to="/audiocode">语音验证码</nuxt-link>
                    </el-dropdown-item>
                  </div>
                  <div class="production_box">
                    <img :src="prod" />
                    <div>服务</div>
                    <el-dropdown-item>
                      <nuxt-link to="/cloudplatform">美唐云平台</nuxt-link>
                    </el-dropdown-item>
                    <el-dropdown-item>
                      <nuxt-link to="/gateway">SI短信平台</nuxt-link>
                    </el-dropdown-item>
                    <el-dropdown-item>
                      <nuxt-link to="/enterprise">ECP企业通信平台</nuxt-link>
                    </el-dropdown-item>
                  </div>
                </div>
              </el-dropdown-menu>
            </el-dropdown>
          </li>
          <li>
            <nuxt-link to="/solutioncase">解决方案</nuxt-link>
          </li>
          <li>
            <nuxt-link to="/onlineexperience">在线体验</nuxt-link>
          </li>
          <li>
            <nuxt-link to="/developmentcenter">开发中心</nuxt-link>
          </li>
          <li>
            <nuxt-link to="/aboutme">关于我们</nuxt-link>
          </li>
        </ul>
        <div class="btnBox">
          <el-button class="login" @click="login">登录</el-button>
          <el-button type="warning" class="register" @click="register">注册有礼</el-button>
        </div>
      </div>
    </header>
  </div>
</template>

<script>
export default {
  data() {
    return {
      light: "images/ic_home_fw.png",
      prod: "images/ic_home_cp.png",
      logo: "images/pic_home_logo.png"
    };
  },
  mounted() {
    window.addEventListener("scroll", this.handleScroll);
  },
  methods: {
    // 获取高度
    handleScroll() {
      const top =
        window.pageYOffset ||
        document.documentElement.scrollTop ||
        document.body.scrollTop;
      if (top > 102) {
        this.$refs.head.style.background = "#232323";
        this.$refs.head.style.opacity = "0.8";
      } else {
        this.$refs.head.style.background = "";
        this.$refs.head.style.opacity = "1";
      }
    },
    changeHover() {
      this.$refs.production.style.color = '#fc6b00';
    },
    hideHover() {
      this.$refs.production.style.color = '#fff';
    },
    // 点击跳转登录
    login() {
      this.$router.push('/login')
    },
    // 跳转到注册
    register() {
      this.$router.push('/register')
    }
  }
};
</script>

<style lang="scss" scoped>
$activeColor: #fc6b00;
@mixin productCss() {
  div {
    font-size: 14px;
    color: #8b8b8b;
    margin-top: 4px;
  }
}

header {
  width: 100%;
  height: 102px;
  display: flex;
  justify-content: space-between;
  align-content: center;
  padding: 33px 40px;
  box-sizing: border-box;
  position: fixed;
  top: 0;
  z-index: 3;
  img {
    width: 162.92px;
    height: 27.19px;
    margin-top: 5px;
  }
  .navBox {
    display: flex;
    ul {
      display: flex;
      margin-top: 5px;
      li {
        margin: 0 22px;
        font-size: 22px;
        color: #fff;
        &:hover {
          a {
            color: $activeColor;
          }
          .el-dropdown {
            color: $activeColor;
          }
        }
        a {
          text-decoration: none;
          color: #fff;
        }
        .nuxt-link-exact-active {
          color: $activeColor;
        }
        .el-dropdown {
          color: #fff;
          font-size: 22px;
        }
      }
      // .service {
      //   a {
      //     &:hover {
      //       color: red;
      //     }
      //   }
      // }
    }
    .btnBox {
      margin-left: 21px;
      button {
        height: 36px;
        width: 95px;
        padding-top: 10px;
      }
      .login {
        color: $activeColor;
      }
      .register {
        background: $activeColor;
      }
    }
  }
}
.el-dropdown-menu {
  width: 100%;
  height: 303px;
  background: #000;
  top: 102px !important;
  left: 0 !important;
  border: none;
  box-shadow: inherit;
  border-radius: 0px;
  padding: 0;
}
.el-popper {
  margin: 0;
}
.screen {
  display: flex;
  width: 100%;
  height: 100%;
  padding: 50px 0 75px 0;
  box-sizing: border-box;
  .service_box {
    margin-left: 828px;
    margin-right: 208px;
    @include productCss();
  }
  .production_box {
    @include productCss();
  }
}

.nuxt-link-exact-active {
  color: $activeColor;
}

/deep/ .el-icon-arrow-left {
  font-size: 39px;
  color: #a7a7a7;
}
/deep/ .el-icon-arrow-right {
  font-size: 39px;
  color: #a7a7a7;
}

/deep/ .el-dropdown-menu__item {
  padding: 0;
  a {
    color: #fff;
    &:hover {
      color: $activeColor;
    }
  }
}

/deep/ .el-dropdown-menu__item:focus,
.el-dropdown-menu__item:not(.is-disabled):hover {
  color: $activeColor;
  background: #000;
}
/deep/ .popper__arrow {
  display: none;
}
</style>