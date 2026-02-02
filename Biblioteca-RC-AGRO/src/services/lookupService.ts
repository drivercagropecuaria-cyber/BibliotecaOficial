import { supabase } from './supabase'

export const fetchAreas = async (signal: AbortSignal) => {
  const { data, error } = await supabase.from('areas').select('*').abortSignal(signal)

  if (error) throw error
  return data ?? []
}

export const fetchStatus = async (signal: AbortSignal) => {
  const { data, error } = await supabase.from('status').select('*').abortSignal(signal)

  if (error) throw error
  return data ?? []
}

export const fetchTemas = async (signal: AbortSignal) => {
  const { data, error } = await supabase.from('temas').select('*').abortSignal(signal)

  if (error) throw error
  return data ?? []
}

export const fetchTipos = async (signal: AbortSignal) => {
  const { data, error } = await supabase.from('tipos_projeto').select('*').abortSignal(signal)

  if (error) throw error
  return data ?? []
}
