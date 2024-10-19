<script setup lang="ts">
import { onMounted, ref } from "vue";
import { useI18n } from "vue-i18n";

const currentLanguage = ref("Русский");

const languages = ["Русский", "English"];

const i18n = useI18n();

const onLanguageChange = (value: string) => {
  switch (value) {
    case "Русский":
      i18n.locale.value = "ru";
      localStorage.setItem("locale", "ru");
      break;
    case "English":
      i18n.locale.value = "en";
      localStorage.setItem("locale", "en");
      break;
  }
};

onMounted(() => {
  const locale = localStorage.getItem("locale");
  if (locale) {
    currentLanguage.value = locale === "ru" ? "Русский" : "English";
    i18n.locale.value = locale;
  }
});
</script>

<template>
  <div class="d-flex align-center justify-space-between w-100">
    <v-select
      v-model="currentLanguage"
      :items="languages"
      variant="plain"
      density="compact"
      hide-details
      max-width="80"
      @update:model-value="onLanguageChange"
    >
      <template #selection="{ item }">
        <p>{{ item.value }}</p>
      </template>
    </v-select>
    <div class="d-flex align-center ga-6">
      <router-link to="">{{ i18n.t("Условия") }}</router-link>
      <router-link to="">{{ i18n.t("Конфиденциальность") }}</router-link>
    </div>
  </div>
</template>

<style scoped>
a,
p {
  font-size: 12px;
  color: #666666;
  text-decoration: none;
}
</style>
