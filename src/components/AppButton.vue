<template>
  <button
      class="btn"
      :class="color"
      @click="$emit('btnclick')"
  >
    <slot></slot>
  </button>
</template>

<script>
export default {
  name: "AppButton",
  emits: ['btnclick'],
  props: {
    color: {
      type: String,
      default: '',
    },
  }
}
</script>

<style scoped>


</style>
