// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/11.2.0/firebase-app.js";
import { getAuth } from "https://www.gstatic.com/firebasejs/11.2.0/firebase-auth.js"; 
import { getFirestore } from "https://www.gstatic.com/firebasejs/11.2.0/firebase-firestore.js";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDdRGx62J-YY5FlMSXYd-GDtGidL88B2BE",
  authDomain: "filebridge-net102.firebaseapp.com",
  projectId: "filebridge-net102",
  storageBucket: "filebridge-net102.firebasestorage.app",
  messagingSenderId: "410908758576",
  appId: "1:410908758576:web:eda6423aaa415deda893f5",
  measurementId: "G-82V4QZFRZC"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);

export { auth, db };