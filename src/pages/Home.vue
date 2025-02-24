<script setup>
  import { onMounted } from "vue";
  import { useStore } from "@/stores/main.js";
  import { supabase } from "@/services/supabase.js";

  import Spinner from "@/ui/Spinner.vue";

  const store = useStore();
  
  async function getUsers() {
    try {
      const { data, error } = await supabase
          .from('users')
          .select('*')

      if (error) {
        console.error('Error:', error.message)
        return
      }

      console.log('Data:', data)
    } catch (err) {
      console.error('Error:', err)
    }
  }

  onMounted(async() => {
    await getUsers()
  })

</script>

<template>
  <div class="flex flex-col items-center">
    <Spinner />
    <img src="/vite.svg" alt="Tamagotchi" class="w-32 h-32 my-6" />
    <p class="text-gray-300">User name: {{ store.user.name }}</p>
  </div>
</template>

<style scoped>

</style>