import useSupabase from './supabase'
import useAuthUser from './useAuthUser'
import { ref } from "vue";
const {user} = useAuthUser();
const novaConsulta = ref({
  consulta: "",
  hora_de: "",
  hora_ate: "",
  pagamento: "",
  usuario: user.value.id
});
export default function useDatabase() {

  const {supabase} = useSupabase();

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
      medico(data)
    `).eq('usuario',user.value.id)
    console.log("fetch")
    console.log(data)
      if (error) throw error;
      return data;
  };
  const fetchConsultaLivre =  async () => {
    const { data, error } = await supabase
      .from('consultas')
      .select(`
      *,
      usuario(data),
      medico(data)
    `).eq('pego',false)
      if (error) throw error;
      return data;
  };
  const insertConsulta = async () =>{
     const {data,error} = await supabase
     .from('consultas')
     .insert([novaConsulta.value])
     if(error) throw error;
     novaConsulta.value = {
       consulta: "",
       hora_de: "",
       hora_ate: "",
       pagamento: "",
       usuario: user.value.id
     };
     console.log(novaConsulta)
     return data;
  };
  const pegarConsulta = async (passId) =>{
    const {data,error} = await supabase
    .from('consultas')
    .update({pego:true, medico: user.value.id})
    .match({id: passId})
    if(error) throw error;
    console.log(data)
    return data;
 };
 const marcarHora = async (passId,hora) =>{
  const {data,error} = await supabase
  .from('consultas')
  .update({hora_marcada:hora})
  .match({id: passId})
  if(error) throw error;
  console.log(data)
  return data;
};

  

  return {
    fetchConsultaMedico,
    fetchConsultaPaciente,
    insertConsulta,
    novaConsulta,
    pegarConsulta,
    fetchConsultaLivre,
    marcarHora
  };
}