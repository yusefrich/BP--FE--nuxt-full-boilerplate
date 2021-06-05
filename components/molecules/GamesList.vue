<template>
  <div>
    <nav>
      <div class="nav nav-tabs mt-3" id="nav-tab" role="tablist">
        <button
          class="nav-link active"
          id="nav-home-tab"
          data-bs-toggle="tab"
          data-bs-target="#nav-home"
          type="button"
          role="tab"
          aria-controls="nav-home"
          aria-selected="true"
        >
          Home
        </button>
        <button
          class="nav-link"
          id="nav-profile-tab"
          data-bs-toggle="tab"
          data-bs-target="#nav-profile"
          type="button"
          role="tab"
          aria-controls="nav-profile"
          aria-selected="false"
        >
          Profile
        </button>
        <button
          class="nav-link"
          id="nav-contact-tab"
          data-bs-toggle="tab"
          data-bs-target="#nav-contact"
          type="button"
          role="tab"
          aria-controls="nav-contact"
          aria-selected="false"
        >
          Contact
        </button>
        <div class="ms-auto">
            <fut-input v-model="search" placeholder="Buscar Jogo" />
        </div>
      </div>
    </nav>
    <div class="tab-content" id="nav-tabContent">
    </div>
    <table class="table">
      <thead>
        <tr>
          <!-- 11 -->
          <th class="text-white" colspan="5"></th>
          <th class="text-white" colspan="3">RESULTADO FINAL</th>
          <th class="text-white" colspan="2">AMBOS MARCAM</th>
          <th class="text-white"><fa :icon="['fas', 'plus']" /></th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td class="bg-table-black text-white" colspan="5">
            Casa x Visitante
          </td>
          <td class="bg-table-black text-white" colspan="1">Casa</td>
          <td class="bg-table-black text-white" colspan="1">Empate</td>
          <td class="bg-table-black text-white" colspan="1">Fora</td>
          <td class="bg-table-black text-white" colspan="1">Sim</td>
          <td class="bg-table-black text-white" colspan="1">Não</td>
          <td class="bg-table-black text-white" colspan="1">Odds</td>
        </tr>
      </tbody>
      <tbody>
        <tr>
          <td class="bg-primary text-white" colspan="1">2</td>
          <td class="bg-primary text-white" colspan="2">Brasil</td>
          <td class="bg-primary text-white" colspan="1">
            Campeonato Brasileiro
          </td>
          <td class="bg-primary text-white" colspan="7">Serie A</td>
        </tr>
      </tbody>
      <tbody class="stripped">
        <tr>
          <td class="text-white" colspan="2">17/09/21</td>
          <td class="text-white" colspan="1">19:15h</td>
          <td class="text-white" colspan="2">Vila Nova</td>
          <td class="text-white" colspan="1">1.98</td>
          <td class="text-white" colspan="1">2.85</td>
          <td class="text-white" colspan="1">3.96</td>
          <td class="text-white" colspan="1">1.98</td>
          <td class="text-white" colspan="1">3.96</td>
          <td class="text-white" colspan="1">+154</td>
        </tr>
      </tbody>
      <tbody class="stripped">
        <tr>
          <td class="text-white" colspan="2">17/09/21</td>
          <td class="text-white" colspan="1">19:15h</td>
          <td class="text-white" colspan="2">Vila Nova</td>
          <td class="text-white" colspan="1">1.98</td>
          <td class="text-white" colspan="1">2.85</td>
          <td class="text-white" colspan="1">3.96</td>
          <td class="text-white" colspan="1">1.98</td>
          <td class="text-white" colspan="1">3.96</td>
          <td class="text-white" colspan="1">+154</td>
        </tr>
      </tbody>
      <tbody class="stripped">
        <tr>
          <td class="text-white" colspan="2">17/09/21</td>
          <td class="text-white" colspan="1">19:15h</td>
          <td class="text-white" colspan="2">Vila Nova</td>
          <td class="text-white" colspan="1">1.98</td>
          <td class="text-white" colspan="1">2.85</td>
          <td class="text-white" colspan="1">3.96</td>
          <td class="text-white" colspan="1">1.98</td>
          <td class="text-white" colspan="1">3.96</td>
          <td class="text-white" colspan="1">+154</td>
        </tr>
      </tbody>
    </table>
  </div>
</template>
<script>
import FutInput from '@/components/atoms/FutInput.vue'
export default {
  components: { FutInput },
  data () {
    return {
      search: ''
    }
  }
}
</script>
<style lang="scss" scoped>
@import "@/assets/layout/variables";
.nav-link{
    color: $white;
}
.nav-link:hover{
    background-color: $gray-900;
    border: none;
    border-radius: 0;
}
.nav-tabs .nav-link.active, .nav-tabs .nav-item.show .nav-link{
    color: $white;
    background-color: $gray-900;
    border: none;
    border-radius: 0;
    border-bottom: 2px solid $primary;
    font-weight: 900;
}
.nav-tabs{
    border-bottom: 1px solid $gray-600 !important;
}
.bg-table-black {
  background: $black !important;
}
.table {
  th,
  td {
    text-align: center;
  }
}
.stripped:nth-child(even) {
  td {
    background: $gray-700 !important;
  }
}
.stripped:nth-child(odd) {
  td {
    background: $gray-900 !important;
  }
}
</style>
