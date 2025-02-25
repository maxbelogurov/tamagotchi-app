import {supabase} from "@/services/supabase.js";

export async function findUserById(telegramId) {
  const { data, error } = await supabase
    .from('users')
    .select('*')
    .eq('telegram_id', telegramId )
    .single()
  if (error && error.code !== 'PGRST116') {
    console.error('Error:', error.message)
    return null
  }
  if (!data) {
    return null; //return null if user not found
  }
  console.log('Data:', data)
  return data
}

export async function createUser(data) {
  const { error } = await supabase
    .from('users')
    .insert(data)
  if (error) {
    console.error('Error:', error.message)
    return undefined
  }
  return data
}