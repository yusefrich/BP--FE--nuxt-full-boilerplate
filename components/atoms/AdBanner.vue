<template>
  <div v-bind:class="['banner-container', `size-${size}`]">
  </div>
</template>
<script>
export default {
  props: {
    size: {
      type: String,
      default: 'tall'
    }
  }
}
</script>
<style scoped lang="scss">
  @import "@/assets/layout/variables";
  .banner-container{
    background: $white;
  }
  .size-tall{
    height: 500px;
    background-image: url('https://via.placeholder.com/320x500');
  }
</style>
