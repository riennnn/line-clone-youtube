import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/firestore";


const firebaseApp = firebase.initializeApp({
  apiKey: "AIzaSyDCDMtNDT9VC3s9vri9FwsA7xOPHG21nR4",
  authDomain: "line-clone-3fe07.firebaseapp.com",
  projectId: "line-clone-3fe07",
  storageBucket: "line-clone-3fe07.appspot.com",
  messagingSenderId: "570143904424",
  appId: "1:570143904424:web:a794ae4c0e3bb07ec1689d"
});

const db = firebaseApp.firestore();

const auth = firebase.auth();

export { db, auth };