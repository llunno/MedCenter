import { createClient } from '@supabase/supabase-js'
import useAuthUser from "./useAuthUser";

const supabaseUrl = 'https://sgozpjslfqexghneabog.supabase.co'
const supabaseAnonKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InNnb3pwanNsZnFleGdobmVhYm9nIiwicm9sZSI6ImFub24iLCJpYXQiOjE2NjQ2NzAwNDQsImV4cCI6MTk4MDI0NjA0NH0.uRd_UHDpITZ_wZyAviqLOO9fL5KTLF2oZ17TCQu58eU'

const supabase = createClient(supabaseUrl, supabaseAnonKey);

supabase.auth.onAuthStateChange((event, session) => {
  const { user } = useAuthUser();
  user.value = session?.user || null;
  //console.log(event, session)

  if (event == 'SIGNED_IN'){
    
  }
});


export default function useSupabase() {
  return { supabase };
}