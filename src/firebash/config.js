import { initializeApp, firebase } from "firebase/app";
import {
  getFirestore,
  doc,
  onSnapshot,
  collection,
  addDoc,
  getDoc,
  getDocs,
  query,
  where,
} from "firebase/firestore";

import {
  getAuth,
  onAuthStateChanged,
  GoogleAuthProvider,
  signInWithPopup,
} from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyDuCmpfSw0YfdIlFh1UIK0-A2s2f6wcqGQ",
  authDomain: "livechat-66c21.firebaseapp.com",
  projectId: "livechat-66c21",
  storageBucket: "livechat-66c21.appspot.com",
  messagingSenderId: "1057797709926",
  appId: "1:1057797709926:web:7e90427f5527b89ba94da7",
};

// Initialize Firebase
const firebaseApp = initializeApp(firebaseConfig);
const firestoreDb = getFirestore(firebaseApp);
const firebaseAuth = getAuth(firebaseApp);
export { firebaseApp, firestoreDb, firebaseAuth };
