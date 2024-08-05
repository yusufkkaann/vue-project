<template>
  <div class="container">
    <div class="row">
      <form @submit.prevent="handleSubmit">
        <div class="mb-3">
          <label class="form-label">Adınız</label>
          <input v-model="formData.name" type="text" class="form-control" />
        </div>
        <div class="mb-3">
          <label class="form-label">Soyadınız</label>
          <input v-model="formData.surname" type="text" class="form-control" />
        </div>
        <div class="mb-3">
          <h2>Cinsiyetiniz:</h2>
          <div class="form-check">
            <input
              class="form-check-input"
              type="radio"
              value="male"
              v-model="formData.gender"
            />
            <label class="form-check-label"> Erkek </label>
          </div>
          <div class="form-check">
            <input
              class="form-check-input"
              value="female"
              v-model="formData.gender"
              type="radio"
            />
            <label class="form-check-label"> Kadın </label>
          </div>
        </div>
        <div class="mb-3">
          <label for="exampleInputEmail1" class="form-label">Email </label>
          <input v-model="formData.email" type="email" class="form-control" />
        </div>
        <div class="mb-3">
          <h2>Hangi Amaçla yazıyorsunuz</h2>
          <div class="form-check">
            <input
              class="form-check-input"
              type="checkbox"
              value="livetrainings"
              v-model="formData.purposes"
            />
            <label class="form-check-label"> Canlı eğitim </label>
          </div>
          <div class="form-check">
            <input
              class="form-check-input"
              type="checkbox"
              value="videotrainings"
              v-model="formData.purposes"
            />
            <label class="form-check-label"> Video Eğitim </label>
          </div>
        </div>
        <div class="mb-3">
          <label for="exampleFormControlTextarea1" class="form-label"
            >Mesajınız</label
          >
          <textarea
            v-model="formData.message"
            class="form-control"
            rows="3"
          ></textarea>
        </div>

        <button type="submit" class="btn btn-primary">Gönder</button>
      </form>
      {{ formData }}
    </div>
  </div>
</template>
<script setup>
import { reactive } from "vue";
const formData = reactive({
  name: "",
  surname: "",
  gender: "",
  email: "",
  purposes: [],
  message: "",
});
const handleSubmit = () => {
  console.log(formData);
  formData.name = "";
  formData.surname = "";
  formData.gender = "";
  formData.email = "";
  formData.purposes = [];
  formData.message = "";
};
</script>
