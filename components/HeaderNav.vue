<template>
  <div>
    <el-carousel :interval="5000" arrow="hover" height="780px" :autoplay="false">
      <el-carousel-item v-for="item in picArr" :key="item.id">
        <img :src="item.pic_url" />
      </el-carousel-item>
    </el-carousel>
    <header ref="head">
      <img :src="logo" />
      <div class="navBox">
        <ul>
          <li>
            <nuxt-link to="/">首页</nuxt-link>
          </li>
          <li>
            <nuxt-link to="/a">服务与产品</nuxt-link>
          </li>
          <li>
            <nuxt-link to="/b">解决方案</nuxt-link>
          </li>
          <li>
            <nuxt-link to="/c">在线体验</nuxt-link>
          </li>
          <li>
            <nuxt-link to="/d">开发中心</nuxt-link>
          </li>
          <li>
            <nuxt-link to="/e">关于我们</nuxt-link>
          </li>
        </ul>
        <div class="btnBox">
          <el-button class="login">登录</el-button>
          <el-button type="warning" class="register">注册有礼</el-button>
        </div>
      </div>
    </header>
  </div>
</template>

<script>
export default {
  data() {
    return {
      picArr: [
        {
          id: 201910111,
          title: "固定1",
          pic_url: "/images/pic_home_banner.png"
        },
        {
          id: 201910112,
          title: "固定2",
          pic_url: "/images/pic_banner_yzm.png"
        },
        {
          id: 201910113,
          title: "固定3",
          pic_url: "/images/pic_yyyz_banner.png"
        }
      ],
      logo: "/images/pic_home_logo.png"
    };
  },
  mounted() {
    window.addEventListener("scroll", this.handleScroll);
  },
  methods: {
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
    }
  }
};
</script>

<style lang="scss" scoped>
$activeColor: #fc6b00;

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
  z-index: 2;
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
        a {
          text-decoration: none;
          color: #fff;
        }
        .nuxt-link-exact-active {
          color: $activeColor;
        }
      }
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

/deep/ .el-icon-arrow-left {
  font-size: 39px;
  color: #a7a7a7;
}
/deep/ .el-icon-arrow-right {
  font-size: 39px;
  color: #a7a7a7;
}
</style>