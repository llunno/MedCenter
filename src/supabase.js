import { createClient } from '@supabase/supabase-js'

const supabaseUrl = 'https://sgozpjslfqexghneabog.supabase.co'
const supabaseAnonKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InNnb3pwanNsZnFleGdobmVhYm9nIiwicm9sZSI6ImFub24iLCJpYXQiOjE2NjQ2NzAwNDQsImV4cCI6MTk4MDI0NjA0NH0.uRd_UHDpITZ_wZyAviqLOO9fL5KTLF2oZ17TCQu58eU'

export const supabase = createClient(supabaseUrl, supabaseAnonKey)