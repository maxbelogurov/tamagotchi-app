import {defineStore} from "pinia";

export const useStore = defineStore('store', {
  state: () => {
    return {
      user: {},
    }
  },
  actions: {
    setTelegramId(telegramId) { this.user.telegram_id = telegramId },
    setUser(user) { this.user = user },
  },
})