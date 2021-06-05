<template>
<div class="d-flex">
  <label v-if="label">{{label}}</label>
  <input :placeholder="placeholder" :type="type" :value="value" @input="$emit('input', $event.target.value)" class="form-control">
</div>
</template>
<script>
export default {
  props: {
    label: {
      type: String,
      default: ''
    },
    placeholder: {
      type: String,
      default: ''
    },
    type: {
      type: String,
      require: true,
      default: 'text'
    },
    value: {
      type: String,
      required: true
    }
  }
}
</script>
<style scoped lang="scss">
  @import "@/assets/layout/variables";
  label{
    background: $gray-700;
    padding-left: 10px;
    padding-right: 10px;
    color: $white;
    padding-top: 6px;
    max-width: 200px;
    width: 100%;
  }
  input{
    background-color: $black !important;
    border-radius: 0;
    border: none;
    color: $primary;
  }
</style>
