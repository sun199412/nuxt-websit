<template>
  <div class="container">
    <communication></communication>
    <solutions></solutions>
    <choose-me></choose-me>
    <examples></examples>
    <sponsor></sponsor>
  </div>
</template>

<script>
import Communication from '~/components/home/Communication'
import Solutions from '~/components/home/Solutions'
import ChooseMe from '~/components/home/ChooseMe'
import Examples from '~/components/home/Examples'
import Sponsor from '~/components/home/Sponsor'

export default {
  layout: 'default',
  components: {
    Communication,
    Solutions,
    ChooseMe,
    Examples,
    Sponsor
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
