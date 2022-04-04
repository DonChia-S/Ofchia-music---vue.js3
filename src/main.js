import { createApp } from "vue";
import App from "./App.vue";
import $bus from "@/plugins/event-bus.js";
import router from "@/routes";
import store from "@/store";

import blur from "./directives/blur";

const app = createApp(App);
app.config.globalProperties.$bus = $bus;

app.use(router).use(blur).use(store).mount("#app");
