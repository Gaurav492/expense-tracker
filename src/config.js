// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBe2OXd0UW0eS2613NLt9I0npB-rAq2Nu0",
  authDomain: "users-8a405.firebaseapp.com",
  projectId: "users-8a405",
  storageBucket: "users-8a405.appspot.com",
  messagingSenderId: "988017280340",
  appId: "1:988017280340:web:e43bd4ca39a50eee5d74c1",
};

const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);
