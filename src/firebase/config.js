import firebase from "firebase/app"
import "firebase/firestore"
import "firebase/auth"

const firebaseConfig = {
  apiKey: "AIzaSyAspBK9CnsN3moseNq1SsN7O0VMWYkr-j0",
  authDomain: "live-chat-8ac38.firebaseapp.com",
  projectId: "live-chat-8ac38",
  storageBucket: "live-chat-8ac38.firebasestorage.app",
  messagingSenderId: "576077009405",
  appId: "1:576077009405:web:c71728ad1993c2c6a9c994",
  measurementId: "G-NCMRF68H7D"
};

firebase.initializeApp(firebaseConfig);

const auth = firebase.auth();
const db = firebase.firestore();
const timestamp = firebase.firestore.FieldValue.serverTimestamp;

export { firebase, auth, db, timestamp };