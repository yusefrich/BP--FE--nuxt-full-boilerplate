<template>
    <div class="ticket-holder">
        <div class="ticket-header d-flex justify-content-between">
            <p class="text-white mb-0 pt-1 ps-2">Bilhetes</p>
            <button class="btn btn-primary font-weigth-bold btn-sm">
                Consulta de bilhetes
            </button>
        </div>
        <div class="ticket-container">
            <p class="text-white">N de jogos:</p>
            <fut-input label="Valor da aposta:" class="my-2" v-model="valorAposta" />
            <fut-input label="Valor do Prêmio:" class="my-2" v-model="valorDoPremio" />
            <fut-input label="Cliente (opcional):" class="my-2" v-model="cliente" />
            <ad-banner class="mb-3" size="tall" />
            <ad-banner class="mb-3" size="tall" />
        </div>
    </div>
</template>
<script>
import AdBanner from '../atoms/AdBanner.vue'
import FutInput from '../atoms/FutInput.vue'
export default {
  components: { FutInput, AdBanner },
  data () {
    return {
      valorAposta: '',
      valorDoPremio: '',
      cliente: ''
    }
  }
}
</script>
<style lang="scss" scoped>
  @import "@/assets/layout/variables";
  .ticket-container{
      padding: 5px;
  }
  .ticket-header{
      background: $gray-700;
  }
  .font-weigth-bold{
      font-weight: bold;
  }
</style>
