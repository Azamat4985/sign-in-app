<script setup lang="ts">
import { theme } from "@/utils/theme";
import { defineEmits, ref } from "vue";
import { useI18n } from "vue-i18n";

interface IEmits {
  (emit: "goBack"): void;
}

const emit = defineEmits<IEmits>();
const { t } = useI18n();

const error = ref("");
const isLoading = ref(false);

const checkStatus = () => {
  isLoading.value = true;
  setTimeout(() => {
    isLoading.value = false;
    error.value = t(
      "Вы все еще не авторизованы в боте, пожалуйста, повторите попытку"
    );
  }, 3000);
};
</script>

<template>
  <div class="w-100">
    <v-btn
      icon="mdi-arrow-left"
      variant="plain"
      @click="() => emit('goBack')"
    ></v-btn>
    <div class="content">
      <div class="first-content">
        <img src="@/assets/icons/telegram_large.svg" alt="telegram icon" />
        <h1 class="title">Telegram</h1>
        <p class="subtitle" :class="{ error: error }">
          {{
            error
              ? error
              : t(
                  "Для использования данного канала связи вам необходимо авторизоваться в боте"
                )
          }}
        </p>
      </div>
      <div class="w-100">
        <v-btn class="buttons" :color="theme.primary" block>{{
          t("Авторизоваться в боте")
        }}</v-btn>
        <v-btn
          class="buttons"
          variant="text"
          block
          :color="theme.primary"
          :loading="isLoading"
          @click="checkStatus"
          >{{ t("Проверить статус") }}</v-btn
        >
      </div>
    </div>
  </div>
</template>

<style scoped>
.content {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 70px;
  width: 100%;
}
.first-content {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 30px;
}
.title {
  font-size: 32px;
}
.subtitle {
  color: #808080;
  text-align: center;
}
.buttons {
  height: 55px;
}
.buttons:first-child {
  margin-bottom: 10px;
}
.error {
  color: #eb4036;
}
</style>
