import useSupabase from './supabase'
import useAuthUser from './useAuthUser'
import { ref } from "vue";
const novaConsulta = ref({
  consulta: "",
  hora_de: "",
  hora_ate: "",
  pagamento: ""
});
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
  const insertConsulta = async () =>{
    // const {data,error} = await supabase
    // .from('consultas')
    // .insert([novaConsulta])
    // if(error) throw error;
    // novaConsulta = ref({
    //   consulta: "",
    //   hora_de: "",
    //   hora_ate: "",
    //   pagamento: ""
    // });
    // return data;
    console.log(novaConsulta.value)
  }

  

  return {
    fetchConsultaMedico,
    fetchConsultaPaciente,
    insertConsulta,
    novaConsulta
  };
}