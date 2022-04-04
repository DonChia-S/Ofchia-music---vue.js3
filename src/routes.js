import { createWebHistory, createRouter } from "vue-router";
import Search from "@/components/Search.vue";
import PmAbout from "@/components/About.vue";
import TrackDetails from "@/components/TrackDetails.vue";

const history = createWebHistory();

export default createRouter({
  history,
  routes: [
    { path: "/", component: Search, name: "search" },
    { path: "/about", component: PmAbout, name: "about" },
    { path: "/track/:id", component: TrackDetails, name: "track" },
  ],
});
