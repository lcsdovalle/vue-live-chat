import { firebaseApp } from "./config";
import { getAuth, onAuthStateChanged } from "firebase/auth";
import { ref } from "vue";

const user = ref(getAuth().currentUser);
const userObserver = (_user) => {
  user.value = _user;
};

/**
 * Watchs for changes on user.
 */
onAuthStateChanged(getAuth(), userObserver);

const getUser = () => {
  return { user };
};

export default getUser;
