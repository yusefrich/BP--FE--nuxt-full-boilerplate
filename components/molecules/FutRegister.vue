<template>
  <div class="register-container">
    <label class="text-white text-start">Nome: </label>
    <fut-input v-model="data.name" type="text" class="mx-0 mt-2" />
    <label class="text-white text-start">Email: </label>
    <fut-input v-model="data.email" type="email" class="mx-0 mt-2" />
    <label class="text-white text-start">Senha: </label>
    <fut-input v-model="data.password" type="password" class="mx-0 mt-2" />
    <label class="text-white text-start">Confirme a senha: </label>
    <fut-input v-model="data.password_confirmation" type="password" class="mx-0 mt-2" />
    <fut-button class="no-break mt-3 text-center" :primary="true" @click="()=>$root.$emit('register', data)">
      <strong class="text-uppercase font-weight-bold">Registrar</strong>
    </fut-button>
  </div>
</template>
<script>
import FutInput from '@/components/atoms/FutInput'
import FutButton from '@/components/atoms/FutButton'
export default {
  components: { FutInput, FutButton },
  data () {
    return {
      data: {
        name: '',
        email: '',
        password: '',
        password_confirmation: ''
      }
    }
  }
}
</script>
<style scoped lang="scss">
  .register-container{
    margin-top: 100px;
    max-width: 400px;
    position: relative;
    left: 50%;
    transform: translateX(-50%);
  }
  .no-break{
    white-space: nowrap;
  }
</style>
