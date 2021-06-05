<template>
  <div class="container-fluid mx-0">
    <div class="row mx-0">
      <div class="col-md-9">
        <select-sport></select-sport>
        <current-games></current-games>
        <games-list></games-list>
      </div>
      <div class="col-md-3">
        <tickets></tickets>
      </div>
    </div>
  </div>
</template>
<script>
import SelectSport from '@/components/molecules/SelectSport'
import CurrentGames from '@/components/organisms/CurrentGames'
import GamesList from '@/components/molecules/GamesList'
import Tickets from '@/components/molecules/Tickets'

export default {
  components: { SelectSport, CurrentGames, GamesList, Tickets }
}
</script>

<style>
</style>
