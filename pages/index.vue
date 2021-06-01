<template>
  <home @login="logIn" />
</template>

<script>
import Home from '@/components/templates/Home'

export default {
  components: { Home },
  methods: {
    logIn () {
      console.log('login called')
    }
  }
}
</script>

<style>
</style>
