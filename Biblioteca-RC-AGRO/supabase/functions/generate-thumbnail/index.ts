import { serve } from 'https://deno.land/std@0.224.0/http/server.ts'

serve(async () => {
  return new Response(
    JSON.stringify({
      status: 'todo',
      message: 'Placeholder de Edge Function para geração de thumbnails',
    }),
    { headers: { 'Content-Type': 'application/json' } },
  )
})
