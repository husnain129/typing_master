import { getFirestore } from "@firebase/firestore";
import { initializeApp } from "firebase/app";

const config = {
  apiKey: "AIzaSyBit9IxvTzoWoTxlCZ0VujSaZi7iCp9t_A",

  authDomain: "typingtest-c4015.firebaseapp.com",

  projectId: "typingtest-c4015",

  storageBucket: "typingtest-c4015.appspot.com",

  messagingSenderId: "907439539682",

  appId: "1:907439539682:web:aa7f7d8691f9eeb433e5bb",
};

// Initialize Firebase

const app = initializeApp(config);
const db = getFirestore(app);

// Get a reference to the database service

export { db, app };
