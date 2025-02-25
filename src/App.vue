<script setup>
  import { onBeforeMount } from "vue";
  import { useRouter } from "vue-router";
  import { useMiniApp } from "vue-tg";

  const router = useRouter()
  const miniApp = useMiniApp();

  onBeforeMount(() => {
    const tgUser = miniApp.initDataUnsafe?.user || {id: 1234}
    if (!tgUser.id) {
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

