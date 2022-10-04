import useSupabase from './supabase'
export default function useDatabase() {

  const {supabase} = useSupabase();

  const fetchConsultaMedico =  async () => {
    const { data, error } = await supabase
      .from('consultas')
      .select(`
      *,
      usuario(data),
      medico(data)
    `)
      if (error) throw error;
      return data;
  };

  

  return {
    fetchConsultaMedico
  };
}