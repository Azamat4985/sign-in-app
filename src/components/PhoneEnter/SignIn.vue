<script setup lang="ts">
import { defineModel, defineEmits, ref, watch, inject } from "vue";
import CountrySelect from "@/components/PhoneEnter/CountrySelect.vue";
import PhoneInput from "@/components/PhoneEnter/PhoneInput.vue";
import { ICountry } from "@/services/sign-in/model";
import { signInService } from "@/services/sign-in/service";
import { useSignInStore } from "@/store";
import { useI18n } from "vue-i18n";

interface IEmits {
  (emit: "onNext"): void;
}

const country = defineModel<ICountry>("country");
const phone = defineModel("phone");
const emit = defineEmits<IEmits>();

const store = useSignInStore();

const { t } = useI18n();

const isLoading = ref(false);
const phoneError = ref("");

/* eslint-disable */ // ругается на символы в regex
const phoneRegexes: any = {
  russia:
    /^((8|\+7)[\- ]?)?(\(?\d{3}\)?[\- ]?)?[\d\- ]{7,10}$/, // тестились только РУ
  kazakhstan:
      /^(\+7|8)?[\s\-]?\(?7\d{2}\)?[\s\-]?\d{3}[\s\-]?\d{2}[\s\-]?\d{2}$/, // и КЗ номер
  kyrgyzstan: /^(\+?996|0)?[\s\-]?\(?\d{3}\)?[\s\-]?\d{3}[\s\-]?\d{3}$/,
  uzbekistan: /^(\+?998|0)?[\s\-]?\(?\d{2}\)?[\s\-]?\d{3}[\s\-]?\d{4}$/,
  usa: /^(\+?1)?[\s\-]?\(?\d{3}\)?[\s\-]?\d{3}[\s\-]?\d{4}$/,
};
/* eslint-enable */

const onNextClick = async () => {
  if (country.value) {
    if (
      !phoneRegexes[country.value.value].test(country.value.code + phone.value) // валидируем номер телефона
    ) {
      phoneError.value = "Неверный формат номера";
      return;
    }
    phoneError.value = "";
    try {
      isLoading.value = true;
      const res = await signInService.createCode(
        country.value.code + phone.value
      );
      if (res.success) {
        store.availableChannels = res.data.clientChannels;
        store.sessionId = res.data.sessionId;
        store.sentTo = res.data.clientChannels.find(
          (i) => i.type === res.data.sentTo
        );
        emit("onNext");
      }
    } catch (e) {
      console.log(e);
    } finally {
      isLoading.value = false;
    }
  }
};

watch(phone, () => {
  phoneError.value = ""; // чтобы сбрасывать ошибку при вводе
});
</script>

<template>
  <div class="wrapper">
    <h1 class="title">{{ t("Введите номер телефона") }}</h1>
    <p class="subtitle">{{ t("Чтобы войти или зарегистрироваться") }}</p>
    <CountrySelect v-model="country" />
    <PhoneInput
      v-model="phone"
      :code="country ? country.code : ''"
      :error="phoneError"
    />
    <v-btn
      variant="flat"
      color="#007AFF"
      height="55"
      class="continue-btn"
      :disabled="!phone"
      @click="onNextClick"
      >{{ t("Продолжить") }}</v-btn
    >
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
.phone-input {
  margin-bottom: 50px;
}
</style>
