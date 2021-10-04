
import firebase from "firebase/compat/app";
import 'firebase/compat/auth';
import 'firebase/compat/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyA1TIxXHB_TBZEejoZgCOxC8xre7WrD3jk",
  authDomain: "ecomerce-2ebe3.firebaseapp.com",
  projectId: "ecomerce-2ebe3",
  storageBucket: "ecomerce-2ebe3.appspot.com",
  messagingSenderId: "449092017370",
  appId: "1:449092017370:web:04f8cff8bc459c8b3f59e3" 
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

export default firebase;