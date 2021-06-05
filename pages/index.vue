<template>
  <home />
</template>

<script>
import Home from '@/components/templates/Home'
import authService from '@/services/authService'

export default {
  components: { Home },
  mounted () {
    this.$root.$on('login', (payload) => {
      console.log('login CORECTOMUNDO')
      console.log(payload)
      authService.login(payload).then((result) => {
        console.log('result', result)
      }).catch((err) => {
        console.log('err', err)
      })
    })
  }
}
</script>

<style>
</style>
