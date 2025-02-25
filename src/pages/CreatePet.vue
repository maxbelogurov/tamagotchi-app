<script setup>
import {computed, ref } from "vue";
import {createUser} from "@/api/users.js";
import {useStore} from "@/stores/main.js";
import { useRouter } from "vue-router";

const router = useRouter();
const store = useStore();

const petName = ref("");
const nameIsFull = computed(() =>
    petName.value.length >= 3 ? true : false
)

const createPet = async () => {
  const data = {
    telegram_id: store.user.telegram_id,
    pet_name: petName.value,
  }
  const result = await createUser(data);
  if (result) {
    console.log("User created successfully:", result);
    store.setUser(result)
    router.push('/')
  } else {
    console.error("Failed to create user.");
  }
};
</script>

<template>
  <div class="flex flex-col items-center">
    <h2 class="mb-4">Hello, create your Telegram pet</h2>
    <div class="mb-4">
      <input
          id="pet-name"
          v-model="petName"
          type="text"
          class="border rounded p-2"
          placeholder="Enter pet name"
      />
    </div>
    <button
        :disabled="!nameIsFull"
        @click="createPet"
        :class="{
          'bg-linear-to-r from-cyan-500 to-purple-500 text-white': nameIsFull,
          'bg-gray-400 text-gray-700': !nameIsFull
        }"
        class="pt-1 pb-2 px-4 rounded-sm select-none">
      Create pet
    </button>
  </div>
</template>

<style scoped>


</style>