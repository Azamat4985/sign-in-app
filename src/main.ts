import { createApp } from "vue";

import en from "@/locale/en.json";

// Vuetify
import "vuetify/styles";
import { createVuetify } from "vuetify";
import * as components from "vuetify/components";
import * as directives from "vuetify/directives";
import "@mdi/font/css/materialdesignicons.css";

import App from "./App.vue";
import router from "./router";
import { createPinia } from "pinia";
import { createI18n, useI18n } from "vue-i18n";

const vuetify = createVuetify({
  components,
  directives,
  icons: {
    defaultSet: "mdi",
  },
});

const pinia = createPinia();

const i18n = createI18n({
  locale: "ru",
  messages: {
    en: en,
  },
});

createApp(App).use(pinia).use(i18n).use(router).use(vuetify).mount("#app");
