<script setup>
  import { onBeforeMount } from "vue";
  import { useRouter } from "vue-router";
  import { useTelegram } from "@/services/telegram.js";
  const router = useRouter()

  
  onBeforeMount(() => {
    const tg = useTelegram()
    if (!tg) {
      router.push('/not-tg')
    }
  })


</script>

<template>
  <div class="min-h-screen bg-gray-900 text-white flex flex-col items-center">
    <div class="container mx-auto max-w-md">
      <RouterView />
    </div>
  </div>
</template>

<style scoped>

</style>

