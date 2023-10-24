// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyC-h2nmW6-LtaH-cKIBKoSODPyY8YZu7SU",
  authDomain: "drink-store-ac7b0.firebaseapp.com",
  projectId: "drink-store-ac7b0",
  storageBucket: "drink-store-ac7b0.appspot.com",
  messagingSenderId: "149524535558",
  appId: "1:149524535558:web:6b2a0aaf534be60380a687"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const initFirestoreApp =()=>{
  return app
}
