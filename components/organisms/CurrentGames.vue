<template>
  <div class="game-holder py-2">
    <div class="d-inline-flex">
      <current-game />
      <current-game />
      <current-game />
      <current-game />
    </div>
  </div>
</template>
<script>
import CurrentGame from '../molecules/CurrentGame.vue'

export default {
  components: { CurrentGame }
}
</script>
<style lang="scss" scoped>
  .game-holder{
    overflow: auto;
  }
</style>
