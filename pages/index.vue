<template>
  <div class="container">
    <communication></communication>
    <solutions></solutions>
    <choose-me></choose-me>
  </div>
</template>

<script>
import Communication from '~/components/home/Communication'
import Solutions from '~/components/home/Solutions'
import ChooseMe from '~/components/home/ChooseMe'

export default {
  layout: 'default',
  components: {
    Communication,
    Solutions,
    ChooseMe
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
