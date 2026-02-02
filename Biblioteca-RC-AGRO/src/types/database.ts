export type Json = string | number | boolean | null | { [key: string]: Json } | Json[]

export interface Database {
  public: {
    Tables: {
      media: {
        Row: {
          id: string
          title: string
          description: string | null
          type: string
          storage_path: string
          thumbnail_path: string | null
          created_at: string
          updated_at: string
        }
        Insert: {
          id?: string
          title: string
          description?: string | null
          type: string
          storage_path: string
          thumbnail_path?: string | null
          created_at?: string
          updated_at?: string
        }
        Update: {
          id?: string
          title?: string
          description?: string | null
          type?: string
          storage_path?: string
          thumbnail_path?: string | null
          created_at?: string
          updated_at?: string
        }
      }
      areas: {
        Row: { id: string; nome: string; descricao: string | null }
        Insert: { id: string; nome: string; descricao?: string | null }
        Update: { id?: string; nome?: string; descricao?: string | null }
      }
      status: {
        Row: { id: string; nome: string; descricao: string | null }
        Insert: { id: string; nome: string; descricao?: string | null }
        Update: { id?: string; nome?: string; descricao?: string | null }
      }
      temas: {
        Row: { id: string; nome: string }
        Insert: { id: string; nome: string }
        Update: { id?: string; nome?: string }
      }
      tipos_projeto: {
        Row: { id: string; nome: string }
        Insert: { id: string; nome: string }
        Update: { id?: string; nome?: string }
      }
    }
  }
}
