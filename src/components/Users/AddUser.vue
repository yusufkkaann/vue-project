<template>
  <div>
    <form @submit.prevent="handleSubmit">
      <div class="mb-3">
        <label class="form-label">Ad</label>
        <input v-model="user.name" type="text" class="form-control" />
      </div>
      <div class="mb-3">
        <label class="form-label">Soyad</label>
        <input v-model="user.lastName" type="text" class="form-control" />
      </div>
      <div>
        <Loading v-if="loading" />
      </div>

      <button type="submit" class="btn btn-primary">Submit</button>
    </form>
  </div>
</template>
<script setup>
import { reactive, ref, inject } from "vue";
import postUser from "@/composables/postUser";
import Loading from "@/components/Utilitys/Loading.vue";

const user = reactive({
  name: "",
  lastName: "",
});
const { loading, handleSubmit } = postUser(user);
</script>
