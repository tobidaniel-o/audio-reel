import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";

const config = {
  apiKey: "AIzaSyAKa-A83KeJpO4snQ9gim9IncIG6dlOudE",
  authDomain: "audioreel-db.firebaseapp.com",
  projectId: "audioreel-db",
  storageBucket: "audioreel-db.appspot.com",
  messagingSenderId: "894946577539",
  appId: "1:894946577539:web:f45547267734c35ea51fb6",
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: "select_account" });

export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
