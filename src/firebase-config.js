import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';

const firebaseConfig = {
    apiKey: "AIzaSyA1YBFE7LzdpEZfMQkb4k31v5A-52XqV1w",
    authDomain: "bomodule.firebaseapp.com",
    projectId: "bomodule",
    storageBucket: "bomodule.appspot.com",
    messagingSenderId: "163261960779",
    appId: "1:163261960779:web:7b82a1db4acf77676573ce"
  };

initializeApp(firebaseConfig);
const auth = getAuth();
const db = getFirestore();

export {firebaseConfig, auth, db};