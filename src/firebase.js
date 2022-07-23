import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyANw-Aqy_sz6OxxdWLnsQrBCFEg9IWgbLc",
  authDomain: "confession-b227e.firebaseapp.com",
  projectId: "confession-b227e",
  storageBucket: "confession-b227e.appspot.com",
  messagingSenderId: "375744418836",
  appId: "1:375744418836:web:f8f98f356f60bc5236c301",
};

// Initialize Firebase
const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();

export { db, auth };
