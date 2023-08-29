// Import the functions you need from the SDKs you need
import { initializeApp, getApps } from "firebase/app";
import { getFirestore } from 'firebase/firestore'

const firebaseConfig = {
    apiKey: "AIzaSyCt21Eg7fbl1YnjWKWsqQ8sRG6QV8ci470",
    authDomain: "personal-notes-8e457.firebaseapp.com",
    projectId: "personal-notes-8e457",
    storageBucket: "personal-notes-8e457.appspot.com",
    messagingSenderId: "648287147900",
    appId: "1:648287147900:web:722169e2099a8ec53ff6f9",
    measurementId: "G-517PYDG3GC"
};

// Initialize Firebase
export const  firebase_app = getApps().length === 0 ? initializeApp(firebaseConfig) : getApps()[0];
export const database = getFirestore(firebase_app);