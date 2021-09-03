<template>
  <div id="app">
    <router-view :key="$route.path" />
  </div>
</template>

<script>


export default {
  components: {}
}
</script>

<style lang="scss">
  @import "@/scss/main.scss";
</style>
