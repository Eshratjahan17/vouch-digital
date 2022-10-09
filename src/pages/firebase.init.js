// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAEIsc65mnn2muAunqegQ8RmbaipPJAbR4",
  authDomain: "vouch-2be42.firebaseapp.com",
  projectId: "vouch-2be42",
  storageBucket: "vouch-2be42.appspot.com",
  messagingSenderId: "11408225849",
  appId: "1:11408225849:web:c6fb988052be5b850abfe8",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth=getAuth(app);
export default auth;