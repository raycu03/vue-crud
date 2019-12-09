<template>
  <div class="container text-center">
    <h1>INGRESO DE NUEVO ESTUDIANTE</h1>
    <form id="form" style="margin-top:50px">
      <b-form-group
        label-cols="4"
        label-cols-lg="2"
        label="Name"
        label-for="input-default"
      >
        <b-form-input
          type="text"
          v-model="model.name"
          placeholder="Ingrese Nombre"
        ></b-form-input>
      </b-form-group>
      <b-form-group
        label-cols="4"
        label-cols-lg="2"
        label="Code"
        label-for="input-default"
      >
        <b-form-input
          type="number"
          v-model="model.code"
          placeholder="Ingrese Codigo"
        ></b-form-input>
      </b-form-group>

      <b-button
        type="submit"
        @click="POST_STUDENTS(model)"
        variant="success"
        style="margin:20px"
        >Agregar</b-button
      >
    </form>
  </div>
</template>

<script>
import { mapActions, mapGetters } from "vuex";
import { TypeStore } from "../store/types/store.types";
export default {
  name: "newStudent",
  methods: {
    ...mapActions({
      GET_STUDENTS: TypeStore.actions.GET_STUDENTS,
      POST_STUDENTS: TypeStore.actions.POST_STUDENTS
    })
  },
  computed: {
    ...mapGetters({
      STUDENTS: TypeStore.state.STUDENTS,
      PSTUDENT: TypeStore.state.PSTUDENT
    })
  },
  mounted() {
    this.GET_STUDENTS();
    //this.POST_STUDENTS(this.model);
  },
  props: ["post-route"],
  data() {
    return {
      model: {
        name: "",
        code: ""
      }
    };
  }
};
</script>
