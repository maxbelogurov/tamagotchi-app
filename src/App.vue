<script setup>
  import { useStore } from "./stores/main.js";
  const store = useStore();
</script>

<template>
  <div class="min-h-screen bg-gray-900 text-white flex flex-col items-center p-4">
    <div class="container mx-auto max-w-md">
      <!-- Header -->
      <h1 class="text-2xl font-bold text-center mb-6">Tamagotchi App</h1>
      
      <!-- Main content -->
      <div class="flex flex-col items-center">
        <img src="/vite.svg" alt="Tamagotchi" class="w-32 h-32 mb-6" />
        <p class="text-gray-300">User name: {{ store.user.name }}</p>
      </div>
    </div>
  </div>
</template>

<style scoped>

</style>
