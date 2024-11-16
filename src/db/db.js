import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use

const firebaseConfig = {
  apiKey: "AIzaSyBjvtxbedRS8dJxqS_GgwOEMQ7_Wj42EPM",
  authDomain: "ng-clothes.firebaseapp.com",
  projectId: "ng-clothes",
  storageBucket: "ng-clothes.firebasestorage.app",
  messagingSenderId: "359482756261",
  appId: "1:359482756261:web:33e2eff1ecd0b98fead14c"
};


const app = initializeApp(firebaseConfig);

const db = getFirestore()

export default db