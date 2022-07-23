import { firebaseApp } from "./config";
import { getAuth, signOut } from "firebase/auth";
import { ref } from "vue";

const error = ref(null);
const logout = () => {
  signOut(getAuth())
    .then((data) => {
      //   store.dispatch("logout");
      //   router.push("/");
    })
    .catch((err) => {
      error.value = err.message;
    });
};

const useLogoutFirebase = () => {
  return { error, logout };
};
export default useLogoutFirebase;
