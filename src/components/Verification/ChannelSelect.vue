<script setup lang="ts">
import { useSignInStore } from "@/store";
import { useI18n } from "vue-i18n";

const store = useSignInStore();
const { t } = useI18n();

const onSelect = (value: string) => {
  store.sentTo = store.availableChannels.find((c) => c.name === value);
};
</script>

<template>
  <v-select
    :model-value="store.sentTo"
    :items="store.availableChannels"
    variant="outlined"
    :label="t('Способ получения кода')"
    class="channel-select"
    hide-details
    item-title="name"
    @update:model-value="onSelect"
  >
    <template #item="{ item, props }">
      <v-list-item v-bind="props" title="">
        <template #prepend>
          <img
            :src="item.raw.imageUrl"
            class="mr-2"
            alt="social-icon"
            width="24"
          />
        </template>
        <p>{{ item.raw.name }}</p>
      </v-list-item>
    </template>
  </v-select>
</template>

<style scoped>
.channel-select {
  margin-bottom: 40px;
}
</style>
