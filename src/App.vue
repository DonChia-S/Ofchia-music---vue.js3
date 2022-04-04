<template lang="pug">
#App
  pm-header

  router-view
  
  pm-footer
</template>

<script>
import PmHeader from "@/components/layout/Header.vue";
import PmFooter from "@/components/layout/Footer.vue";

export default {
  name: "App",

  components: { PmHeader, PmFooter },
};
</script>

<style lang="scss">
@import "@/scss/main.scss";
</style>
