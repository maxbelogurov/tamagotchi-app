<script setup>
  import { onMounted, ref } from "vue";
  import { useRouter } from "vue-router";
  import { useMiniApp } from "vue-tg";
  import { useStore } from "@/stores/main.js";

  import { findUserById } from "@/api/users.js"
  import Spinner from "@/ui/Spinner.vue";

  const router = useRouter()
  const store = useStore();
  const userIsLoading = ref(true)

  const miniApp = useMiniApp();
  const tgUser = miniApp.initDataUnsafe?.user || {id: 1234}

  onMounted(async () => {
    userIsLoading.value = true
    // const user = await store.getUser(telegram_id);
    store.setTelegramId(tgUser.id)
    const user = await findUserById(tgUser.id)
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
      <div class="text-center">
        <p>Success, your pet was created</p>
        <img src="/cat-demo.svg" alt="Tamagotchi" class="mx-auto w-32 h-32 my-6" />
        <p>Main actions will be soon</p>
      </div>
      <div class="text-center">
        <p class="text-gray-600">Telegram id: {{ store.user.telegram_id }}</p>
        <p class="text-gray-600">Pet name: {{ store.user.pet_name }}</p>
      </div>
      </div>
  </div>
</template>

<style scoped>

</style>