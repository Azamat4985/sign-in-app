<script setup lang="ts">
import { defineProps, ref, watch, defineEmits, Ref } from "vue";
import { IChannel, ICountry } from "@/services/sign-in/model";
import ChannelSelect from "@/components/Verification/ChannelSelect.vue";
import CodeInput from "@/components/Verification/CodeInput.vue";
import { theme } from "@/utils/theme";
import { useSignInStore } from "@/store";
import { signInService } from "@/services/sign-in/service";
import { useI18n } from "vue-i18n";

interface IEmits {
  (emit: "onTelegram"): void;
  (emit: "goBack"): void;
}

interface IProps {
  phone: string;
  country: ICountry;
}

const props = defineProps<IProps>();
const emit = defineEmits<IEmits>();

const store = useSignInStore();

const { t } = useI18n();

const code = ref("");
const isLoading = ref(false);
const error = ref("");

watch(
  () => store.sentTo,
  (newValue: IChannel | undefined) => {
    if (newValue && newValue.name === "Telegram") {
      emit("onTelegram");
      store.sentTo = undefined; // чтобы не остался выбранным Telegram в select
    } // для изменения тела модалки при выборе телеги
  }
);

const onCodeVerify = async () => {
  try {
    isLoading.value = true;
    const res = await signInService.checkCode(store.sessionId, code.value);
    if (res.success) {
      console.log(res.data.verifyToken);
      alert(res.data.verifyToken);
      error.value = "";
    }
  } catch (e: any) {
    error.value = e.response.data.error;
  } finally {
    isLoading.value = false;
  }
};

const onGoBack = () => {
  emit("goBack");
  code.value = "";
  error.value = "";
};
</script>

<template>
  <div class="wrapper">
    <h1 class="title">{{ t("Введите код") }}</h1>
    <p class="subtitle">
      {{ t("Отправлен по номеру") }} {{ props.country.code }}{{ props.phone }}
    </p>
    <ChannelSelect />
    <CodeInput v-model="code" :response-error="error" />
    <div class="d-flex">
      <v-btn
        class="action-button"
        variant="text"
        :color="theme.primary"
        width="50%"
        prepend-icon="mdi-arrow-left"
        @click="onGoBack"
        >{{ t("Назад") }}</v-btn
      >
      <v-btn
        class="action-button"
        width="50%"
        :color="theme.primary"
        :loading="isLoading"
        :disabled="!code"
        @click="onCodeVerify"
        >{{ t("Введите код") }}</v-btn
      >
    </div>
  </div>
</template>

<style scoped>
.wrapper {
  display: flex;
  flex-direction: column;
  align-items: stretch;
}
.title {
  text-align: center;
  margin-bottom: 14px;
}
.subtitle {
  color: #666666;
  text-align: center;
  margin-bottom: 30px;
}
.action-button {
  height: 55px;
}
</style>
