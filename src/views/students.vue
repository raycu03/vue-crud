<template>
  <div class="container text-center">
    <h1>INGRESO DE NUEVO ESTUDIANTE</h1>
    <form id="form" v-on:submit.prevent="nuevoes" style="margin-top:50px" >
      <b-form-group  label-cols="4" label-cols-lg="2" label="Name" label-for="input-default">
        <b-form-input type="text" v-model="nombre" placeholder="Ingrese Nombre"></b-form-input>
      </b-form-group>
      <b-form-group label-cols="4" label-cols-lg="2" label="Code" label-for="input-default">
        <b-form-input type="number" v-model="code" placeholder="Ingrese Codigo"></b-form-input>
      </b-form-group>

       <b-button type="submit" variant="success" style="margin:20px">Agregar</b-button>
    </form>
  </div>
</template>

<script>
import { mapActions, mapGetters } from 'vuex';
import { TypeStore } from '../store/types/store.types';
export default {
  name: "newStudent",
  methods:{
    ...mapActions ({
      POST_STUDENTS: TypeStore.actions.POST_STUDENTS
    })
  },
  computed: {
    ... mapGetters({
      STUDENTS: TypeStore.state.STUDENTS
    })
  },
  mounted(){
    this.POST_STUDENTS();
  },
  props: ['post-route'],
  data() {
    return {
      nombre: '',
      code:''
    };
  }
};
</script>   