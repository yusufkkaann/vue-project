import axios from "axios";
import { reactive, ref, inject } from "vue";

import { useToast } from "vue-toast-notification";
import Users from "../components/Users/Users.vue";
import "vue-toast-notification/dist/theme-sugar.css";
const postUser = (user) => {
  const $toast = useToast();
  const loading = ref(false);
  const activeComponent = inject("activeComponent");

  const handleSubmit = () => {
    loading.value = true;
    axios
      .post("http://localhost:3000/users", user)
      .then(() => {
        loading.value = false;
        $toast.success("Başarıyla eklendi!");
        activeComponent.value = Users;
      })
      .catch((error) => {
        console.error(error);
        loading.value = false;
        $toast.error("Bir hata oluştu!");
      });
    user.name = "";
    user.lastName = "";
  };
  return { loading, handleSubmit };
};
export default postUser;
