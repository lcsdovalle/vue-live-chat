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
  serverTimestamp,
  Timestamp,
} from "firebase/firestore";
import { effect, ref, watchEffect } from "vue";

const getCollection = (table) => {
  const error = ref(null);
  const documents = ref([]);
  const collectionRef = collection(firestoreDb, table);
  const unsub = onSnapshot(
    query(collectionRef, orderBy("createdAt", "asc")),
    (snapShot) => {
      snapShot.docs.forEach((doc) => {
        console.log("newSnapshot");
        if (!documents.value.find((d) => d.id === doc.id)) {
          documents.value.push({
            ...doc.data(),
            id: doc.id,
            createdAt: doc.data().createdAt
              ? doc.data().createdAt
              : Timestamp.now(),
          });
        }
      });
    },
    (err) => (error.value = err.message)
  );

  watchEffect((cleanUp) => {
    //Stop listining events when the component is unmounted
    cleanUp(() => unsub());
  });
  return { error, documents };
};

export default getCollection;
