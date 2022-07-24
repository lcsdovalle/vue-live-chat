import {
  createUserWithEmailAndPassword,
  getAuth,
  updateProfile,
} from "firebase/auth";
import { ref } from "vue";
import { firebaseApp } from "./config";
const error = ref(null);

const register = (email, password, name) => {
  return createUserWithEmailAndPassword(getAuth(), email, password)
    .then(async (data) => {
      await updateProfile(data.user, { displayName: name });
      //   store.dispatch("login", data);
      //   router.push("/");
    })
    .catch((err) => {
      console.log(err);
      switch (err.code) {
        case "auth/credential-already-in-use":
          error.value = "Já possui conta";
          break;
        case "auth/email-already-in-use":
          error.value = "Já tem cadastro!";
          break;
        case "auth/user-not-found":
          error.value = "User not found";
          break;
        case "auth/invalid-email":
          error.value = "Informe um e-mail";
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
