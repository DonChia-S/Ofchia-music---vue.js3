<template lang="pug">
section.hero.bg
    .hero-head
        header.navbar
          .container
              .navbar-brand
                .navbar-item
                  strong 📻  OfChia Music
              .navbar-start.navbar-menu
                  router-link.navbar-item(to="/") Buscar
                  router-link.navbar-item(to="about") Nosotros

    .hero-body
        .container.has-text-centered
            h1.title OfChia Music
            h2.subtitle Canciones que estan Vue-nisimas!
            PmPlayer
</template>
<script>
import PmPlayer from "@/components/Player.vue";

export default {
  name: "PmHeader",

  components: { PmPlayer },
};
</script>
<style lang="scss" scoped>
router-link {
  text-decoration: none;
}

.bg {
  background: linear-gradient(
    45deg,
    rgba(111, 0, 255, 0.75),
    rgba(255, 0, 119, 0.749)
  );
}
</style>
