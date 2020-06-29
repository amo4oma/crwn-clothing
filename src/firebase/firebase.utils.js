import firebase, { firestore } from "firebase/app";
import "firebase/firestore";
import "firebase/auth";

const config = {
  apiKey: "AIzaSyD5139aaRxML4CKhWUDNXH5TLDj5WtnKeg",
  authDomain: "e-clothing-a1178.firebaseapp.com",
  databaseURL: "https://e-clothing-a1178.firebaseio.com",
  projectId: "e-clothing-a1178",
  storageBucket: "e-clothing-a1178.appspot.com",
  messagingSenderId: "505636287079",
  appId: "1:505636287079:web:38426527fa854b8b9b9ac2",
  measurementId: "G-29JPCKEKS2",
};

export const createUserProfileDocument = async (userAuth, additionalData) => {
  if (!userAuth) return;

  const userRef = firestore().doc(`users/${userAuth.uid}`);

  const snapShot = await userRef.get();

  if (!snapShot.exists) {
    const { displayName, email } = userAuth;
    const createdAt = new Date();
    try {
      await userRef.set({
        displayName,
        email,
        createdAt,
        ...additionalData,
      });
    } catch (error) {
      console.log("error", error.message);
    }
  }

  return userRef;
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firbase = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: "select_account" });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
