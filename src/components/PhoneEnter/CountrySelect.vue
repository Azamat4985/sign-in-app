<script setup lang="ts">
import { ref, defineModel, onMounted } from "vue";
import { VListItem } from "vuetify/components";
import { ICountry } from "@/services/sign-in/model";
import { useI18n } from "vue-i18n";

const model = defineModel();

const countries: readonly ICountry[] = [
  {
    title: "Kazakhstan (Қазақстан)",
    flag: "🇰🇿",
    code: "+7",
    value: "kazakhstan",
  },
  {
    title: "Kyrgyzstan (Кыргызстан)",
    flag: "🇰🇬",
    code: "+998",
    value: "kyrgyzstan",
  },
  {
    title: "Russia (Россия)",
    flag: "🇷🇺",
    code: "+7",
    value: "russia",
  },
  {
    title: "Uzbekistan (O'zbekiston)",
    flag: "🇺🇿",
    code: "+996",
    value: "uzbekistan",
  },
  {
    title: "United States (United States)",
    flag: "🇺🇸",
    code: "+996",
    value: "usa",
  },
];

const filteredCountries = ref(countries);

const { t } = useI18n();

const onFilter = (value: string) => {
  filteredCountries.value = countries.filter((c) =>
    c.title.toLowerCase().includes(value.toLowerCase())
  );
};

onMounted(() => {
  model.value = countries[2]; // Чтобы по умолчанию страна была Россия
});

const onSelect = (value: string) => {
  model.value = countries.find((c) => c.value === value);
};
</script>

<template>
  <v-select
    :items="filteredCountries"
    :model-value="model"
    :label="t('Страна')"
    variant="outlined"
    class="country-select"
    hide-details
    @update:model-value="onSelect"
  >
    <template #selection="{ item }">
      <p>{{ item.title.split("(")[1].replace(")", "") }}</p>
    </template>
    <template #prepend-item>
      <v-text-field
        variant="solo-filled"
        density="compact"
        class="px-4"
        prepend-inner-icon="mdi-magnify"
        :placeholder="t('Поиск')"
        @update:model-value="onFilter"
      />
    </template>
    <template #item="{ item, props }">
      <v-list-item
        v-bind="props"
        class="px-4 d-flex align-center justify-space-between w-100"
        title=""
      >
        <template #prepend>
          <div class="d-flex align-center ga-2">
            <p>{{ item.raw.flag }}</p>
            <p>{{ item.raw.title }}</p>
          </div>
        </template>
        <template #append>
          <p>{{ item.raw.code }}</p>
        </template>
      </v-list-item>
    </template>
  </v-select>
</template>

<style scoped>
.country-select {
  margin-bottom: 40px;
}
</style>
