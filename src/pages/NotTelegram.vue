<script setup>
  import { ref } from 'vue'
  const appUrl = ref(import.meta.env.VITE_APP_URL)
</script>

<template>
  <div class="text-center">
    <h2 class="mb-4">You should open this page in Telegram bot</h2>
    <a :href="appUrl" 
      class="bg-linear-to-r from-cyan-500 to-purple-500 text-white pt-1 pb-2 px-4 rounded-sm select-none">
      Tamagotchi App
    </a>
  </div>
</template>