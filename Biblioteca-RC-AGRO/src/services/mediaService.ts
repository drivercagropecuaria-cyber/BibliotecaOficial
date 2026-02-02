import { supabase } from './supabase'
import { env } from '@/config/env'

export const uploadMedia = async (file: File, path: string) => {
  if (!env.storageBucket) {
    throw new Error('VITE_SUPABASE_STORAGE_BUCKET não configurado')
  }

  const { data, error } = await supabase.storage.from(env.storageBucket).upload(path, file)

  if (error) throw error
  return data
}

export const getPublicUrl = (path: string) => {
  if (!env.storageBucket) {
    throw new Error('VITE_SUPABASE_STORAGE_BUCKET não configurado')
  }

  return supabase.storage.from(env.storageBucket).getPublicUrl(path).data.publicUrl
}
