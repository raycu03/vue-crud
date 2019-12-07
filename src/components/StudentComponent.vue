<template>
  <div>
    <div class="">
      <b-table striped hover :items="STUDENTS"></b-table>
    </div>
  </div>
</template>

<script>
import { TypeStore } from "./../store/types/store.types";
import { mapActions, mapGetters } from "vuex";

export default {
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
