<template lang="pug">
.content(v-if="track && track.album")
  p.is-128x128
    img(:src="track.album.images[0].url")
  p
    strong {{ track.name }}
    small {{ convertMsToMm(track.duration_ms) }}
  p
    audio(controls, :src="track.preview_url")
</template>
<script>
import { convertMsToMm } from "@/filters/ms-to-mm";
import { mapState } from "vuex";
export default {
  name: "PmPlayer",

  data() {
    return {
      image: "",
    };
  },

  computed: {
    ...mapState(["track"]),
  },

  setup() {
    return {
      convertMsToMm,
    };
  },
};
</script>
<style lang="scss" scoped>
img {
  width: 124px;
  border-radius: 50%;
}
</style>
