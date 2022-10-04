import { ref } from "vue";

const user = ref(null);


import useSupabase from './supabase'
export default function useAuthUser() {

  const {supabase} = useSupabase();
  
  const login = async ({ email, password }) => {
    const { error } = await supabase.auth.signIn({ email, password })
    if (error) throw error;
    return user;
  };

  const loginWithSocialProvider = async (provider) => {
    const { user, error } = await supabase.auth.signIn({ provider });
    if (error) throw error;
    return user;
  };

  const logout = async () => {
    const { error } = await supabase.auth.signOut();
    if (error) throw error;
  };


  const isLoggedIn = () => {
    return !!user.value;
  };

  const session = () => {
    return supabase.auth.session()
  }

  const register = async ({ email, password, ...meta }) => {
    const { user, error } = await supabase.auth.signUp(
      { email, password },
      { data: meta,}
    );
    if (error) throw error;
    return user;
  };

  const update = async (data) => {
    const { user, error } = await supabase.auth.update(data);
    if (error) throw error;
    return user;
  };


  const sendPasswordRestEmail = async (email) => {};

  return {
    user,
    login,
    loginWithSocialProvider,
    isLoggedIn,
    session,
    logout,
    register,
    update,
    sendPasswordRestEmail,
  };
}