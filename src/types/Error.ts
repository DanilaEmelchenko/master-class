import type { PostgrestError } from '@supabase/supabase-js'

export interface CustomError extends Error {
  customCode?: number
}

export interface ExtendedPosgrestError extends PostgrestError {
  statusCode?: number
}
