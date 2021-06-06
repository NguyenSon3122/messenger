import firebase from "firebase/app";
import 'firebase/auth'

export const auth = firebase.initializeApp({
    apiKey: "AIzaSyBsztj36mWwZvUhz6WhxRPNMbC6dQVUeMA",
    authDomain: "messenger-87890.firebaseapp.com",
    projectId: "messenger-87890",
    storageBucket: "messenger-87890.appspot.com",
    messagingSenderId: "345478203534",
    appId: "1:345478203534:web:d8c0f210ccb3a34b19e1df"
}).auth();
