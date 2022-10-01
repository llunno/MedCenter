import { firestore } from "@/firebase";
import {
  getFirestore,
  collection,
  query,
  where,
  doc,
} from "firebase/firestore";

export default {
  state: {
    consultaList: null,
  },
  mutations: {
    fetchConsultaList(state, consultaList) {
      state.consultaList = consultaList;
    },
  },
  actions: {
    async fetchConsultaList({ commit, rootState }) {
      const userUid = rootState.auth.user.uid;
      let consultaArray = [];

      const queryRef = query(
        collection(getFirestore(), "consultas"),
        where("user", "==", userUid)
      );

      await firestore
        .getDocs(queryRef)
        .then((response) => {
          response.forEach((element) => {
            const elementData = element.data();
            elementData.id = element.id;
            consultaArray.push(elementData);
          });
          commit("fetchConsultaList", consultaArray);
        })
        .catch(() => {
          throw Error("Erro ao buscar Consultas.");
        });
    },

    async addNewConsulta({ rootState, dispatch }, newConsulta) {
      const userUid = rootState.auth.user.uid;
      newConsulta.user = userUid;

      const collectionRef = collection(getFirestore(), "consultas");
      await firestore
        .addDoc(collectionRef, newConsulta)
        .then(() => dispatch("fetchConsultaList"))
        .catch(() => {
          throw Error("Erro ao adicionar nova Consulta.");
        });
    },

    async deleteConsulta({ dispatch }, id) {
      const documentRef = doc(getFirestore(), "consultas", id);
      await firestore
        .deleteDoc(documentRef)
        .then(() => dispatch("fetchConsultaList"))
        .catch(() => {
          throw Error("Erro ao excluir Consulta.");
        });
    },
  },
};