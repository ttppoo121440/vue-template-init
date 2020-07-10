<template>
  <div id="app">
    <transition
      name="page"
      appear
    >
      <router-view :key="$route.fullPath" />
    </transition>
  </div>
</template>

<script>
export default {
  name: "App",
};
</script>

<style lang="scss">
@import "@/assets/scss/main.scss";
</style>
