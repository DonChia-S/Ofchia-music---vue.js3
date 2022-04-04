<template lang="pug">
.card(v-if="track && track.album")
    .card-image
        figure.image.is-1by1
            img(:src="track.album.images[0].url")

    .card-content
        .media
            .media-left
                figure.image.is-48x48
                    img(:src="track.album.images[0].url")
            .media-content 
                p.title.is-6
                    strong {{ track.name }}
                p.subtitle.is-6 {{track.artists[0].name}}
                    
        .content
            small {{ convertMsToMm(track.duration_ms) }}
            nav.level
                .level-start
                    button.level-items.button.is-primary
                        span.icon.is-small(@click="selectTrack") ▶
                    button.level-items.button.is-warning
                        span.icon.is-small(@click="goToTrack(track.id)") 🌎
</template>
<script>
import { convertMsToMm } from "@/filters/ms-to-mm";
import trackMixin from "@/mixins/track";

export default {
  name: "PmTrack",

  mixins: [trackMixin],

  props: {
    track: { type: Object, required: true },
  },

  methods: {
    goToTrack(id) {
      if (!this.track.preview_url) {
        return;
      }

      this.$router.push({ name: "track", params: { id: id } });
    },

    selectTrack() {
      this.$emit("select", this.track.id);
    },
  },

  setup() {
    return {
      convertMsToMm,
    };
  },
};
</script>
<style lang="scss" scoped></style>
