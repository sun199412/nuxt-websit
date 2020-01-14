<template>
  <div>
    <header-nav></header-nav>
    <nuxt />
    <footer-component></footer-component>
  </div>
</template>

<script>
import HeaderNav from '~/components/HeaderNav'
import FooterComponent from '~/components/FooterComponent'
export default {
  components: {
    HeaderNav,
    FooterComponent
  }
}
</script>

<style>
/* html {
  font-family: 'Source Sans Pro', -apple-system, BlinkMacSystemFont, 'Segoe UI',
    Roboto, 'Helvetica Neue', Arial, sans-serif;
  font-size: 16px;
  word-spacing: 1px;
  -ms-text-size-adjust: 100%;
  -webkit-text-size-adjust: 100%;
  -moz-osx-font-smoothing: grayscale;
  -webkit-font-smoothing: antialiased;
  box-sizing: border-box;
}

*,
*:before,
*:after {
  box-sizing: border-box;
  margin: 0;
} */
</style>
