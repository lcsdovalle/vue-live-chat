import { signInWithEmailAndPassword, getAuth } from "firebase/auth";
import { ref } from "vue";

const error = ref(null);

const login = (email, password) => {
  signInWithEmailAndPassword(getAuth(), email, password)
    .then((data) => {
      console.log(data);
      //   store.dispatch("login", data);
      //   router.push("/");
    })
    .catch((error) => {
      switch (error.code) {
        case "auth/invalid-email":
          error.value = "*Digite seu e-mail";
          break;
        case "auth/wrong-password":
          error.value = "*Senha inválida";
          break;
        case "auth/user-not-found":
          error.value = `*E-mail não registrado. Deseja criar uma conta?`;
          break;
        default:
          error.value = "*E-mail ou senha está incorreta";
          break;
      }
    });
};

const useLoginFirebase = () => {
  return { error, login };
};
export default useLoginFirebase;
