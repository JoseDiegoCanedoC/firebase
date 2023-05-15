import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey:  process.env.REACT_APP_FIREBASE_KEY,
  authDomain: "crud-39d56.firebaseapp.com",
  projectId: "crud-39d56",
  storageBucket: "crud-39d56.appspot.com",
  messagingSenderId: "567266433831",
  appId: "1:567266433831:web:64e776c40f9b3f0c66e702",
};
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
export const auth = getAuth();
export const storage = getStorage(app);

