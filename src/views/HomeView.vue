<script setup lang="ts">
import Logo from "@/components/Logo.vue";
import { ref } from "vue";
import SignIn from "@/components/PhoneEnter/SignIn.vue";
import ModalFooter from "@/components/ModalFooter.vue";
import { ICountry } from "@/services/sign-in/model";
import CodeVerification from "@/components/Verification/CodeVerification.vue";
import TelegramContent from "@/components/Telegram/TelegramContent.vue";

const currentTab = ref("sign-in");
const parentTab = ref("main");
const country = ref<ICountry>();
const phone = ref("");

const onNext = () => {
  currentTab.value = "code";
};

const onBack = () => {
  currentTab.value = "sign-in";
};

const onTelegramSelect = () => {
  parentTab.value = "telegram";
};

const onGoToMain = () => {
  parentTab.value = "main";
};
</script>

<template>
  <div class="w-100 h-screen d-flex justify-center align-center">
    <div
      class="modal"
      :style="{
        paddingTop: (parentTab === 'telegram' ? 27 : 50) + 'px', // вопросы к дизайну)
        paddingBottom: (parentTab === 'telegram' ? 109 : 24) + 'px', // вопросы к дизайну)
      }"
    >
      <v-tabs-window v-model="parentTab" class="w-100">
        <!-- Основной контент-->
        <v-tabs-window-item value="main">
          <div class="content">
            <Logo />
            <!-- Внутренние табы -->
            <v-tabs-window v-model="currentTab" class="windows">
              <v-tabs-window-item value="sign-in">
                <SignIn
                  v-model:country="country"
                  v-model:phone="phone"
                  @on-next="onNext"
                />
              </v-tabs-window-item>
              <v-tabs-window-item value="code">
                <CodeVerification
                  :country="country as ICountry"
                  :phone="phone"
                  @on-telegram="onTelegramSelect"
                  @go-back="onBack"
                />
              </v-tabs-window-item>
            </v-tabs-window>
            <ModalFooter />
          </div>
        </v-tabs-window-item>
        <!-- Телеграм -->
        <v-tabs-window-item value="telegram">
          <TelegramContent @go-back="onGoToMain" />
        </v-tabs-window-item>
      </v-tabs-window>
    </div>
  </div>
</template>

<style scoped>
.modal {
  padding: 0 30px;
  width: 500px;
  border: 1px solid #dfdfdf;
  border-radius: 8px;
}
.content {
  display: flex;
  flex-direction: column;
  align-items: center;
}
.windows {
  margin-bottom: 70px;
  width: 100%;
}
</style>
