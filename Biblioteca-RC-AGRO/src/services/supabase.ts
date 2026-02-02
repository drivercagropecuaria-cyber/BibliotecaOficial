import { createClient } from '@supabase/supabase-js'
import { env } from '@/config/env'
import type { Database } from '@/types/database'

if (!env.supabaseUrl || !env.supabaseAnonKey) {
  throw new Error('VITE_SUPABASE_URL e VITE_SUPABASE_ANON_KEY são obrigatórios')
}

export const supabase = createClient<Database>(env.supabaseUrl, env.supabaseAnonKey)
