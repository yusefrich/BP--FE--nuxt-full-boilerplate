<template>
    <input type="email" :value="value" @input="('input', $event.target.value)" class="form-control">
</template>
<script>
export default {
  props: {
    value: {
      type: String,
      required: true
    }
  }
}
</script>
<style scoped lang="scss">
  @import "@/assets/layout/variables";
  input{
    background-color: $black !important;
    border-radius: 0;
    border: none;
    margin-left: 10px;
    margin-right: 10px;
    color: $primary;
  }
</style>
