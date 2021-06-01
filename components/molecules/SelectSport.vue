<template>
  <ul class="ps-0">
    <li>
      <fut-button class="w-100">
        <fa class="icon text-primary" :icon="['fas', 'futbol']" />
        <p>Futebol</p>
      </fut-button>
    </li>
    <li>
      <fut-button class="w-100">
        <fa class="icon text-primary" :icon="['fas', 'basketball-ball']" />
        <p>Basquete</p>
      </fut-button>
    </li>
  </ul>
</template>
<script>
import FutButton from '@/components/atoms/FutButton'
export default {
  components: { FutButton }
}
</script>
<style lang="scss" scoped>
  @import "@/assets/layout/variables";
  ul{
    display: flex;
    flex-direction: row;
    li{
      display: flex;
      justify-content: center;
      width: 90px;
      height: 90px;
      border: 2px solid $gray-800;
      padding-top: 5px;
      .icon{
        font-size: 40px;
      }
    }
    p{
      color: $white;
      font-size: 12px;
      padding-top: 5px;
    }
  }
</style>
