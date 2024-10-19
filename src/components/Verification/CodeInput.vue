<script setup lang="ts">
import { defineModel, ref, onMounted, computed, watch, defineProps } from "vue";
import { signInService } from "@/services/sign-in/service";
import { useSignInStore } from "@/store";
import { useI18n } from "vue-i18n";

interface IProps {
  responseError: string;
}

const model = defineModel();
const props = defineProps<IProps>();
const store = useSignInStore();
const { t } = useI18n();

const timeout = ref(store.sentTo ? store.sentTo.timeout : 0);
const isLoading = ref(false);
const error = ref("");
let interval: any;

onMounted(() => {
  startCountdown();
});

const startCountdown = () => {
  interval = setInterval(() => {
    if (timeout.value === 0) {
      clearInterval(interval);
      return;
    }
    timeout.value -= 1;
  }, 1000);
};

const formattedTimeout = computed(() => {
  const minutes = "" + Math.floor(timeout.value / 60);
  const seconds = "" + (timeout.value - Math.floor(timeout.value / 60) * 60);
  return `${+minutes < 10 ? minutes.padStart(2, "0") : minutes}:${
    +seconds < 10 ? seconds.padStart(2, "0") : seconds
  }`; // форматируем чтобы было mm:ss
});

const onCodeSend = async () => {
  try {
    isLoading.value = true;
    const res = await signInService.sendCode(
      store.sessionId,
      store.sentTo ? store.sentTo.type : ""
    );
    if (res.success) {
      timeout.value = res.data.clientChannel.timeout;
    } else {
      timeout.value = res.errorParams.timeout;
      error.value = res.error as string;
    }
    startCountdown();
  } catch (e) {
    console.log(e);
  } finally {
    isLoading.value = false;
  }
};

watch(
  () => store.sentTo,
  (newValue) => {
    timeout.value = newValue ? newValue.timeout : 0;
  }
);
</script>

<template>
  <v-text-field
    v-model="model"
    variant="outlined"
    :label="t('Введите код')"
    class="code-input"
    type="number"
    :hide-details="!error && !responseError"
    :error-messages="error + responseError"
  >
    <template #append-inner>
      <v-btn
        v-if="timeout === 0"
        variant="text"
        color="#007AFF"
        :loading="isLoading"
        @mouseup.stop
        @mousedown.stop
        @click.stop="onCodeSend"
      >
        {{ t("Отправить") }}
      </v-btn>
      <p class="timeout" v-else>{{ formattedTimeout }}</p>
    </template>
  </v-text-field>
</template>

<style scoped>
.code-input {
  margin-bottom: 50px;
}
.timeout {
  font-size: 14px;
  color: #9e9e9e;
}
</style>
