// src/firebase.js
import { initializeApp } from "firebase/app";
import { getDatabase, ref, onValue } from "firebase/database";

// Firebase 설정
const firebaseConfig = {
  apiKey: "AIzaSyAYqvPNoFkCxn06QD5XfQpA6z_287vfAYY",
  authDomain: "yoripang-e0f64.firebaseapp.com",
  databaseURL: "https://yoripang-e0f64-default-rtdb.firebaseio.com",
  projectId: "yoripang-e0f64",
  storageBucket: "yoripang-e0f64.firebasestorage.app",
  messagingSenderId: "1065505632024",
  appId: "1:1065505632024:web:3a05485c54962ec8c5786d",
  measurementId: "G-P2L17WQ5FW"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const database = getDatabase(app);

export { database, ref, onValue };
