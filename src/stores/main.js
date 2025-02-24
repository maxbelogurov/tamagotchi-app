import { defineStore } from "pinia";

export const useStore = defineStore('store', {
    state: () => {
        return {
            user: {},
        }
    },
    actions: {
        check({ commit }, telegramId) {

        }
    },
})