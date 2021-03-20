import firebase from 'firebase';

const firebaseConfig = {
    apiKey: "AIzaSyA1Aq6tP1VlOtzS2TdiNZG07hw-KOW_3ZY",
    authDomain: "imessage-clone-84915.firebaseapp.com",
    projectId: "imessage-clone-84915",
    storageBucket: "imessage-clone-84915.appspot.com",
    messagingSenderId: "107628816940",
    appId: "1:107628816940:web:22066c306a8ba722803f89"
  };

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();

export{ auth, provider};
export default db;