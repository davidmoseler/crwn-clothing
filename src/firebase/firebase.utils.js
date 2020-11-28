import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
    apiKey: "AIzaSyDWZ-8ZvWdLyMcRY8yFGRhKb_rBGTkUe0M",
    authDomain: "crwn-ac70a.firebaseapp.com",
    databaseURL: "https://crwn-ac70a.firebaseio.com",
    projectId: "crwn-ac70a",
    storageBucket: "crwn-ac70a.appspot.com",
    messagingSenderId: "235891953053",
    appId: "1:235891953053:web:3d3214d82ecafeba5ab374"
  };

firebase.initializeApp(config)

export const auth = firebase.auth()
export const firestore = firebase.firestore()

const provider = new firebase.auth.GoogleAuthProvider()
provider.setCustomParameters({ 'prompt': 'select_account'})
export const signInWithGoogle = () => auth.signInWithPopup(provider)

export default firebase