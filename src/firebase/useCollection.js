import { firebaseApp, firestoreDb } from "./config";
import { getAuth } from "firebase/auth";
import { collection, addDoc } from "firebase/firestore";
import { ref } from "vue";

const useCollection = (table) => {
  const error = ref(null);
  const pushDoc = async (data) => {
    try {
      let docRef = await addDoc(collection(firestoreDb, table), data);
      return docRef;
    } catch (err) {
      console.log(err);
      error.value = "Erro ao enviar mensagem!";
    }
  };

  return { error, pushDoc };
};

export default useCollection;
