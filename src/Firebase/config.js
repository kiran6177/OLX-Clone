import {initializeApp} from 'firebase/app'
import * as firebase from 'firebase/auth'
import * as firestore from 'firebase/firestore'
import { getStorage } from "firebase/storage";
const firebaseConfig = {
    apiKey: "AIzaSyBDvE4vFmSxDoHVC140I_TBt-LWK8Lkbj4",
    authDomain: "olx-clone-f76f4.firebaseapp.com",
    projectId: "olx-clone-f76f4",
    storageBucket: "olx-clone-f76f4.appspot.com",
    messagingSenderId: "569074419146",
    appId: "1:569074419146:web:5400100375e36aa86e3b33",
    measurementId: "G-3Z64W2JYB0"
  };

const app = initializeApp(firebaseConfig)
const db = firestore.getFirestore(app);
const storage = getStorage();

export {firebase,firestore,db,storage}