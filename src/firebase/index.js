import firebase from "firebase/compat/app";
import "firebase/compat/firestore";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAk_S9uubcDQ6RfAD_sdKNCG5mTVX-Yrk0",
  authDomain: "todo-app-4bd61.firebaseapp.com",
  projectId: "todo-app-4bd61",
  storageBucket: "todo-app-4bd61.appspot.com",
  messagingSenderId: "112578575778",
  appId: "1:112578575778:web:f4abce235e1037a62006fb",
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

export default firebase;