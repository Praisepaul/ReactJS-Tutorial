import firebase from "firebase";
import 'firebase/auth';
import 'firebase/firestore'
import 'firebase/storage'
const firebaseConfig = {
    apiKey: "AIzaSyAld4ZOCXjRG21zAgF9Id2IrfGon4b8TZs",
    authDomain: "olx-clone-510c0.firebaseapp.com",
    projectId: "olx-clone-510c0",
    storageBucket: "olx-clone-510c0.firebasestorage.app",
    messagingSenderId: "560751313467",
    appId: "1:560751313467:web:7d3ba442ab2bd1b2a2121e",
    measurementId: "G-ZB2H08X4KX"
  };

  export default firebase.initializeApp(firebaseConfig);