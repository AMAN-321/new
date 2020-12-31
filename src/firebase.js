import firebase from "firebase";


const firebaseConfig = {
    apiKey: "AIzaSyCC609MsNu9yggtlqkJsGeSgBaJkqEGOvQ",
    authDomain: "ecomcodecell.firebaseapp.com",
    projectId: "ecomcodecell",
    storageBucket: "ecomcodecell.appspot.com",
    messagingSenderId: "573357150739",
    appId: "1:573357150739:web:6a6c989de7c527333ce5e6"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

  // exports
export const auth = firebase.auth();
export const googleAuthProvider = new firebase.auth.GoogleAuthProvider();