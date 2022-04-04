<template lang="pug">
main
  pm-notification(v-show="showNotification")
    p No se encontraron resultados

  pm-loader(v-show="isLoading")
  section.section(v-show="!isLoading")
    nav.navbar
      .container
          input.input.is-large(type="text", 
          placeholder="Buscar Canciones", 
          v-model="searchQuery", 
          @Keyup.enter="search"
          )
          a.button.is-info.is-large(@click="search") Buscar
          a.button.is-danger.is-large &times;
          p
            small.is-large {{ searchMessage }}

    .container.results
        .columns.is-multiline
          .column.is-one-quarter(v-for="t in tracks")
              pm-track(
                v-blur="t.preview_url",
                :key="t.id", 
                :class="{ 'is-active': t.id === selectedTrack }",
                :track="t", 
                @select="setSelectedTrack"
              )    

</template>

<script>
import trackService from "@/services/track";

import PmTrack from "@/components/Track.vue";

import PmLoader from "@/components/shared/Loader.vue";
import PmNotification from "@/components/shared/Notification.vue";

import blur from "@/directives/blur";

export default {
  name: "App",

  components: { PmTrack, PmLoader, PmNotification },

  data() {
    return {
      searchQuery: "",
      tracks: [],

      isLoading: false,
      showNotification: false,

      selectedTrack: "",
    };
  },

  computed: {
    searchMessage() {
      return `Encontrados: ${this.tracks.length}`;
    },
  },

  directives: {
    blur,
  },

  watch: {
    showNotification() {
      if (this.showNotification) {
        setTimeout(() => {
          this.showNotification = false;
        }, 3000);
      }
    },
  },

  methods: {
    search() {
      if (!this.searchQuery) {
        return;
      }

      this.isLoading = true;

      trackService.search(this.searchQuery).then((res) => {
        this.showNotification = res.tracks.total === 0;
        this.tracks = res.tracks.items;
        this.isLoading = false;
      });
    },

    setSelectedTrack(id) {
      this.selectedTrack = id;
    },
  },
};
</script>

<style lang="scss">
.results {
  margin-top: 30px;
}

.is-active {
  border: 3px #fc0054 solid;
  scale: 5px;
}
</style>
