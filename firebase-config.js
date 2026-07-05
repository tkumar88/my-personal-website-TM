import { initializeApp } from "https://www.gstatic.com/firebasejs/12.15.0/firebase-app.js";
import { getFirestore } from "https://www.gstatic.com/firebasejs/12.15.0/firebase-firestore.js";

const firebaseConfig = {
  apiKey: "AIzaSyCbfy9TvoodKFuy5sFvr-RwTWG_mz2mOLw",
  authDomain: "mylifedashboard-94964.firebaseapp.com",
  projectId: "mylifedashboard-94964",
  storageBucket: "mylifedashboard-94964.firebasestorage.app",
  messagingSenderId: "590572591968",
  appId: "1:590572591968:web:59304a73eb99cfdb795c05"
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
