<template>
  <div style= "margin:20px" class="text-center">
    <h1>Tabla de Estudiantes</h1>
    <div class="container">
      <b-table striped hover :items="STUDENTS"></b-table>
      <div >
      <b-button variant="success" style="margin:20px" router-link to="/newStudent">Ingresar</b-button>
      <b-button variant="danger" style="margin:20px" router-link to="/">Eliminar</b-button>
      </div>
    </div>
  </div>
</template>

<script>
import { TypeStore } from "./../store/types/store.types";
import { mapActions, mapGetters } from "vuex";

export default {
  name: 'StudentComponent',
  methods: {
    ...mapActions({
      GET_STUDENTS: TypeStore.actions.GET_STUDENTS
    })
  },
  computed: {
    ...mapGetters({
      STUDENTS: TypeStore.state.STUDENTS
    })
  },
  mounted() {
    this.GET_STUDENTS();
  }
};
</script>

<style scoped></style>
