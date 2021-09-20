import firebase from 'firebase/compat/app';
// import { initializeApp } from 'firebase/app';

import 'firebase/compat/firestore';
import { getAuth, signInWithPopup, GoogleAuthProvider } from "firebase/auth";
// import { getFirestore, collection, query, where, getDocs } from "firebase/firestore";


const config = {
    apiKey: "AIzaSyC0BRLK1k42w5MChrtfS66Mp_PGDlUZJAo",
    authDomain: "e-commerce-react-6ae5c.firebaseapp.com",
    projectId: "e-commerce-react-6ae5c",
    storageBucket: "e-commerce-react-6ae5c.appspot.com",
    messagingSenderId: "1023109607787",
    appId: "1:1023109607787:web:ab43f9ac7e21d9471ddc2e",
    measurementId: "G-XPMRR52X2C"
  };

  firebase.initializeApp(config);

export const createUserProfileDocument = async (userAuth, additionalData) => {
  if (!userAuth) return;

 
  const userRef = firebase.firestore().doc(`users/${userAuth.uid}`)
  const snapShot = await userRef.get();

  if(!snapShot.exists){
    const {displayName, email} = userAuth;
    const createdAt = new Date();

    try{
      await userRef.set({
        displayName,
        email,
        createdAt,
        ...additionalData
      })
    } catch(err){
        console.log('error creating user', err);
    }
  }
  

  return userRef;
}



export const auth = getAuth();



const provider = new GoogleAuthProvider();

provider.setCustomParameters({'prompt': 'select_account'});

export const signInWithGoogle = () => signInWithPopup(auth, provider);

// export default firebase;