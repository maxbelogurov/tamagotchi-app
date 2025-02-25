export function useTelegram() {
  const tg = window.Telegram.WebApp
  if (tg.platform === 'unknown') {
      return false
  }
  return {
    tg,
    telegram_id: tg.platform === 'unknown' ? '1234' : tg.initDataUnsafe()?.user
  }
}