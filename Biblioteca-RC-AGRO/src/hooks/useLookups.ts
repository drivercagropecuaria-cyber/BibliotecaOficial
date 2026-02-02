import { useQuery } from '@tanstack/react-query'
import { fetchAreas, fetchStatus, fetchTemas, fetchTipos } from '@/services/lookupService'

export const useAreas = () =>
  useQuery({
    queryKey: ['areas'],
    queryFn: ({ signal }) => fetchAreas(signal),
    staleTime: 5 * 60_000,
  })

export const useStatus = () =>
  useQuery({
    queryKey: ['status'],
    queryFn: ({ signal }) => fetchStatus(signal),
    staleTime: 5 * 60_000,
  })

export const useTemas = () =>
  useQuery({
    queryKey: ['temas'],
    queryFn: ({ signal }) => fetchTemas(signal),
    staleTime: 5 * 60_000,
  })

export const useTipos = () =>
  useQuery({
    queryKey: ['tipos'],
    queryFn: ({ signal }) => fetchTipos(signal),
    staleTime: 5 * 60_000,
  })
