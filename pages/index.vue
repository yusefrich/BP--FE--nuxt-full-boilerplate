<template>
  <div class="container mx-0">
    <div class="row mx-0">
      <div class="col-md-10">
        <select-sport></select-sport>
        <current-games></current-games>
        <games-list></games-list>
      </div>
      <div class="col-md-2">
        <tickets></tickets>
      </div>
    </div>
  </div>
</template>

<script>
import SelectSport from '@/components/atoms/SelectSport'
import CurrentGames from '@/components/atoms/CurrentGames'
import GamesList from '@/components/atoms/GamesList'
import Tickets from '@/components/atoms/Tickets'

export default {
  components: { SelectSport, CurrentGames, GamesList, Tickets }
}
</script>

<style>
</style>
