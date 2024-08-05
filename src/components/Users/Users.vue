<template>
  <div class="loading">
    <Loading v-if="data.loading" />
  </div>
  <div class="col-sm-3 mb-5" v-for="user in data.users" :key="user.id">
    <div class="card">
      <img
        :src="'http://placebeard.it/300/300?' + user.id"
        class="card-img-top"
      />
      <div class="card-body">
        <p class="card-text">{{ user.name }} {{ user.lastName }}</p>
      </div>
    </div>
  </div>
</template>
<script setup>
import Loading from "../Utilitys/Loading.vue";
import getUsers from "../../composables/getUsers";
import { onMounted } from "vue";
const { loadUsers, data } = getUsers();

onMounted(() => {
  loadUsers();
});
</script>
<style scoped>
.loading {
  display: flex;
  justify-content: center;
  align-items: center;
}
</style>
