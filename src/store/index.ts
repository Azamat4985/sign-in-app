import { defineStore } from "pinia";
import { Ref, ref } from "vue";
import { IChannel } from "@/services/sign-in/model";

export const useSignInStore = defineStore("signInStore", () => {
  const availableChannels = ref([]) as Ref<IChannel[]>;
  const sessionId = ref("");
  const sentTo = ref<IChannel | undefined>();

  return {
    availableChannels,
    sessionId,
    sentTo,
  };
});
