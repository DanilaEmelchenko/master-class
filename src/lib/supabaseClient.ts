import { createClient } from '@supabase/supabase-js'

// Create a single supabase client for interacting with your database
export const supabase = createClient(
  'https://knmdztjytzoyuibyqkzw.supabase.co',
  'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImtubWR6dGp5dHpveXVpYnlxa3p3Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDc3MjczMzcsImV4cCI6MjA2MzMwMzMzN30.bKy09vtAd2zGKK-WokBj3hu7vtLKk-rKupdZBMX4WT4',
)
