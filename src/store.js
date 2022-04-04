import { createApp } from "vue";
import { createStore } from "vuex";

import trackService from "./services/track";

const store = createStore({
  state() {
    return {
      track: {},
    };
  },

  getters: {
    trackTitle(state) {
      if (!state.track.name) {
        return "";
      }
      return `${state.track.name} - ${state.track.artists[0].name}`;
    },
  },

  mutations: {
    setTrack(state, track) {
      state.track = track;
    },
  },

  actions: {
    getTrackById(context, payload) {
      return trackService.getById(payload.id).then((res) => {
        context.commit("setTrack", res);
        return res;
      });
    },
  },
});

const app = createApp();

app.use(store);

export default store;
