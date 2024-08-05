import { reactive } from "vue";
import { useToast } from "vue-toast-notification";
import axios from "axios";
import "vue-toast-notification/dist/theme-sugar.css";
const getUsers = () => {
  const $toast = useToast();
  const data = reactive({
    users: [],
    loading: true,
  });
  const loadUsers = async () => {
    try {
      const response = await axios.get("http://localhost:3000/users");
      console.log(response);
      data.users = response.data;
      data.loading = false;
    } catch (error) {
      $toast.error("Bir hata oluştu!");
    }
  };
  return { data, loadUsers };
};
export default getUsers;
