import { firestoreDb } from "./config";
import { getAuth } from "firebase/auth";
import {
  collection,
  addDoc,
  doc,
  getDocs,
  onSnapshot,
  orderBy,
  query,
} from "firebase/firestore";
import { ref } from "vue";

const getCollection = (table) => {
  const error = ref(null);
  const documents = ref();
  try {
    let results = [];
    let collectionRef = collection(firestoreDb, table);
    getDocs(query(collectionRef, orderBy("name", "asc"))).then((docs) => {
      docs.forEach((doc) => {
        results.push({ ...doc.data(), id: doc.id });
      });
    });
    documents.value = results;
  } catch (er) {
    error.value = er.message;
    documents.value = null;
  }
  return { documents, error };
};

export default getCollection;
