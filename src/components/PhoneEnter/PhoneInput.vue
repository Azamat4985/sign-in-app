<script setup lang="ts">
import { defineProps, defineModel } from "vue";
import { useI18n } from "vue-i18n";

interface IProps {
  code: string;
  error: string;
}

const props = defineProps<IProps>();
const model = defineModel();

const { t } = useI18n();
</script>

<template>
  <v-text-field
    v-model="model"
    type="number"
    :label="t('Номер телефона')"
    variant="outlined"
    class="phone-input"
    :hide-details="!error"
    :error-messages="error"
  >
    <template #prepend-inner>
      <p v-if="props.code">{{ props.code }}</p>
    </template>
  </v-text-field>
</template>

<style scoped></style>
