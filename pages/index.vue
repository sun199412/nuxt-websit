<template>
  <div class="container">
    <banner></banner>
    <communication></communication>
    <solutions></solutions>
    <choose-me></choose-me>
    <examples></examples>
    <sponsor></sponsor>
    <production></production>
  </div>
</template>

<script>
import Banner from '~/components/home/Banner'
import Communication from '~/components/home/Communication'
import Solutions from '~/components/home/Solutions'
import ChooseMe from '~/components/home/ChooseMe'
import Examples from '~/components/home/Examples'
import Sponsor from '~/components/home/Sponsor'
import Production from '~/components/home/Production'

export default {
  layout: 'default',
  components: {
    Banner,
    Communication,
    Solutions,
    ChooseMe,
    Examples,
    Sponsor,
    Production
  }
}
</script>

<style>
/* .container {
  margin: 0 auto;
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
} */
</style>
