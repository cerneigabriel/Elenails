<template>
  <div class="Container">
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: "Container"
}
</script>

<style lang="scss" scoped>
  .Container {
    max-width: 1400px;
    margin: auto;
  }
</style>