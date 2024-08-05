<template>
  <!-- <Form /> -->
  <div class="container">
    <div class="mt-3 mb-3">
      <button class="btn btn-primary me-5" @click="activeComponent = Users">
        Kullanıcılar
      </button>
      <button class="btn btn-success" @click="activeComponent = AddUser">
        Yeni Kullanıcı ekle
      </button>
    </div>

    <div class="row">
      <component :is="activeComponent"></component>
      <!-- <VeeValidate /> -->
    </div>
  </div>
</template>

<script setup>
// import VeeValidate from "./components/Form/VeeValidate.vue";
import Users from "./components/Users/Users.vue";
import AddUser from "./components/Users/AddUser.vue";
import { shallowRef, provide } from "vue";
const activeComponent = shallowRef(Users);
provide("activeComponent", activeComponent);
</script>

<style scoped></style>
