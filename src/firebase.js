import firebase from 'firebase';

const firebaseConfig = {
  apiKey: "AIzaSyBXxAdjzzJ7zjWuFF-1mWQSRsxVhHQtWu0",
  authDomain: "clone-asad.firebaseapp.com",
  projectId: "clone-asad",
  storageBucket: "clone-asad.appspot.com",
  messagingSenderId: "715657687480",
  appId: "1:715657687480:web:bec729fd7993c30d4c1f4d"
}; 

const firebaseApp = firebase.initializeApp(firebaseConfig) 
const db = firebaseApp.firestore(); 
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider(); 

export {db, auth, provider }; 