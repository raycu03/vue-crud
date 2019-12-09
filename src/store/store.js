import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

import { TypeStore } from "./types/store.types";
import Axios from "axios";

export const store = new Vuex.Store({
  //variables
  state: {
    lenguage: "es",
    students: [],
    pstudent: []
  },
  //Valor de las variables
  getters: {
    [TypeStore.state.LENGUAGE]: state => state.lenguage,
    [TypeStore.state.STUDENTS]: state => state.students,
    [TypeStore.state.PSTUDENT]: state => state.pstudent
  },
  //LLamado de API y parte operacional
  actions: {
    [TypeStore.actions.GET_STUDENTS]: ({ commit }) => {
      Axios.get("students").then(response => {
        commit(TypeStore.mutations.SET_STUDENTS, response.data);
      });
    },
    [TypeStore.actions.POST_STUDENTS]: ({ commit }, datajson) => {
      Axios.post("students", datajson)
        .then(response => {
          commit(TypeStore.mutations.SET_PSTUDENT, response.data);
        })
        .catch(function(error) {
          commit(TypeStore.mutations.SET_PSTUDENT, error);
        });
    }
  },
  //Cambio de valor de variables
  mutations: {
    [TypeStore.mutations.SET_LANGUAGE]: (state, lenguage) => {
      state.lenguage = lenguage;
    },
    [TypeStore.mutations.SET_STUDENTS]: (state, students) => {
      state.students = students;
    },

  },
  modules: {}
});
