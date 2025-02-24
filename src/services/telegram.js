export function useTelegram() {
    const tg = window.Telegram.WebApp
    if (tg.platform === 'unknown') {
        return false
    }
    return {
        tg,
        user: tg.initDataUnsafe()?.user
    }
}