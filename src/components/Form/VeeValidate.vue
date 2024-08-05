<template>
  <Form :validation-schema="formSchema">
    <div class="mb-3">
      <label class="mb-3">Adınızı Giriniz</label>
      <Field name="name" class="form-control" />
      <ErrorMessage name="name" as="div" v-slot="{ message }">
        <div class="alert alert-danger mt-3">
          {{ message }}
        </div>
      </ErrorMessage>
    </div>

    <div class="mb-3">
      <label class="mb-3">Soyadınızı Giriniz</label>
      <Field name="surname" class="form-control" />
      <ErrorMessage name="surname" as="div" v-slot="{ message }">
        <div class="alert alert-danger mt-3">
          {{ message }}
        </div>
      </ErrorMessage>
    </div>

    <button class="btn btn-primary">Kaydet</button>
  </Form>
</template>
<script setup>
import { Field, Form, ErrorMessage } from "vee-validate";
import * as yup from "yup";
const formSchema = yup.object({
  name: yup
    .string()
    .required("Bu alan zorunludur")
    .min(3, "Adınız en az 3 karakter olmalıdır"),
  surname: yup
    .string()
    .required("Bu alan zorunludur")
    .min(3, "Soyadınız en az 5 karakter olmalıdır"),
});
// const isRequired = (value) => {
//   if (!value) {
//     return "Bu alan zorunludur";
//   }
//   return true;
// };
// const validateName = (value) => {
//   if (value.length < 3) {
//     return "Adınız en az 3 karakter olmalıdır";
//   }
//   return true;
// };
</script>
