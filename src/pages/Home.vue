<script setup>
  import { onMounted, ref } from "vue";
  import { useRouter } from "vue-router";
  import { useStore } from "@/stores/main.js";

  import { useTelegram } from "@/services/telegram.js";
  import { findUserById } from "@/api/users.js"
  import Spinner from "@/ui/Spinner.vue";

  const router = useRouter()
  const store = useStore();
  const { telegram_id } = useTelegram();

  const userIsLoading = ref(true)

  onMounted(async () => {
    userIsLoading.value = true
    // const user = await store.getUser(telegram_id);
    store.setTelegramId(telegram_id)
    const user = await findUserById(telegram_id)
    userIsLoading.value = false

    if (!user || user.length === 0) {
      router.push('/create-pet')
    } else {
      store.setUser(user)
    }
  })

</script>

<template>
  <div class="flex flex-col items-center">
    <Spinner v-if="userIsLoading" class="mt-6"/>
    <div v-else class="flex flex-col justify-between p-4 min-h-screen">
      <div>
        <img src="/vite.svg" alt="Tamagotchi" class="w-32 h-32 my-6" />
      </div>
      <div class="text-left">
        <p class="text-gray-600">User ID: {{ store.user.id }}</p>
        <p class="text-gray-600">Telegram ID: {{ store.user.telegram_id }}</p>
        <p class="text-gray-600">Telegram Name: {{ store.user.telegram_name }}</p>
        <p class="text-gray-600">Pet name: {{ store.user.pet_name }}</p>
      </div>
      </div>

  </div>
</template>

<style scoped>

</style>