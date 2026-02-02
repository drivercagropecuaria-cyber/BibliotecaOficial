import { supabase } from './supabase'

export const fetchAreas = async (signal: AbortSignal) => {
  const { data, error } = await supabase.from('view_areas').select('*').abortSignal(signal)

  if (error) throw error
  return data ?? []
}

export const fetchStatus = async (signal: AbortSignal) => {
  const { data, error } = await supabase.from('view_status').select('*').abortSignal(signal)

  if (error) throw error
  return data ?? []
}

export const fetchTemas = async (signal: AbortSignal) => {
  const { data, error } = await supabase.from('view_temas').select('*').abortSignal(signal)

  if (error) throw error
  return data ?? []
}

export const fetchTipos = async (signal: AbortSignal) => {
  const { data, error } = await supabase.from('view_tipos').select('*').abortSignal(signal)

  if (error) throw error
  return data ?? []
}
