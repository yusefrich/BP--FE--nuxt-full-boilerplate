<template>
  <div class="d-flex">
    <fut-input v-model="data.login" />
    <fut-input v-model="data.password" />
    <fut-button class="no-break" @click="()=>{$emit('submit', data)}" :primary="true" :sm="true">
      <strong class="text-uppercase font-weight-bold">log in</strong>
    </fut-button>
  </div>
</template>
<script>
import FutInput from '@/components/atoms/FutInput'
import FutButton from '@/components/atoms/FutButton'
export default {
  data () {
    return {
      data: {
        login: '',
        password: ''
      }
    }
  },
  components: { FutInput, FutButton }
}
</script>
<style scoped lang="scss">
  .no-break{
    white-space: nowrap;
  }
</style>
