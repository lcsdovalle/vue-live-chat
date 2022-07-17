import {
  createUserWithEmailAndPassword,
  getAuth,
  updateProfile,
} from "firebase/auth";
import { ref } from "vue";
import { firebaseApp } from "./config";
const error = ref(null);

const register = (email, password, name) => {
  createUserWithEmailAndPassword(getAuth(), email, password)
    .then((data) => {
      updateProfile(data.user, { displayName: name });
      //   store.dispatch("login", data);
      //   router.push("/");
    })
    .catch((error) => {
      switch (error.code) {
        case "auth/credential-already-in-use":
          error.value = "Já possui conta";
          break;
        case "auth/email-already-in-use":
          error.value = "Já tem cadastro!";
          break;
        case "auth/user-not-found":
          error.value = "User not found";
          break;
        default:
          error.value = "Email já em uso ou inválido";
          break;
      }
    });
};

const useCreateAccountFirebase = () => {
  return { error, register };
};

export default useCreateAccountFirebase;
