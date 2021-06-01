<template>
  <button v-bind:class="[`btn`, (sm)?'btn-sm':'', (primary)?'btn-primary':'']" >
    <slot />
  </button>
</template>
<script>
export default {
  props: {
    primary: Boolean,
    sm: Boolean
  }
}
</script>
