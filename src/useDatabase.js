import useSupabase from './supabase'
export default function useDatabase() {

  const {supabase} = useSupabase();

  const fetchConsultaMedico =  async () => {
    const { data, error } = await supabase
      .from('consultas')
      .select(`consulta,
       usuario,
       user(email),
       hora_de, 
       hora_ate, 
       pego, 
       hora_marcada`)
      .match({pego:false})
      if (error) throw error;
      return data;
  };

  

  return {
    fetchConsultaMedico
  };
}