import { firebaseApp } from "./config";
import { getAuth, GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import { ref } from "vue";

const provider = new GoogleAuthProvider();
const error = ref(null);

const loginOrSignUpByGoogle = () => {
  signInWithPopup(getAuth(), provider)
    .then((result) => {
      console.log(result);
      // store.dispatch("login", result.user);
      // router.push("/");
    })
    .catch((error) => {
      console.log(error.message);
      error.value = error.message;
    });
};

export default useSignInWithGoogle = () => {
  return { error, loginOrSignUpByGoogle };
};
