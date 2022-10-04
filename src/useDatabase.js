import useSupabase from './supabase'
import useAuthUser from './useAuthUser'
export default function useDatabase() {

  const {supabase} = useSupabase();
  const {user} = useAuthUser();
  const fetchConsultaMedico =  async () => {
    const { data, error } = await supabase
      .from('consultas')
      .select(`
      *,
      usuario(data),
      medico(data)
    `).eq('medico',user.value.id)
      if (error) throw error;
      return data;
  };
  const fetchConsultaPaciente =  async () => {
    const { data, error } = await supabase
      .from('consultas')
      .select(`
      *,
      usuario(data),
      medico(data)
    `).eq('usuario',user.value.id)
      if (error) throw error;
      return data;
  };

  

  return {
    fetchConsultaMedico,
    fetchConsultaPaciente
  };
}