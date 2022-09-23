import firebase from 'firebase';

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDgDcRo_AfZLCO9tyrRpd2XW3JwuI6jlZ4",
  authDomain: "fir-auth-web-49929.firebaseapp.com",
  projectId: "fir-auth-web-49929",
  storageBucket: "fir-auth-web-49929.appspot.com",
  messagingSenderId: "637833044086",
  appId: "1:637833044086:web:850a4c25132c3a1ae4ff57"
  };
  // Initialize Firebase
const init = firebase.initializeApp(firebaseConfig);
export const firebaseAuthentication = init.auth();