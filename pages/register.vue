<template>
  <register />
</template>

<script>
import Register from '@/components/templates/Register'
import authService from '@/services/authService'

export default {
  components: { Register },
  layout: 'register',
  mounted () {
    this.$root.$on('register', (payload) => {
      authService.register(payload).then((result) => {
        if (result.status === 200) {
          this.$router.push('/')
        }
      }).catch((err) => {
        alert('err', err)
      })
    })
  }
}
</script>

<style>
</style>
