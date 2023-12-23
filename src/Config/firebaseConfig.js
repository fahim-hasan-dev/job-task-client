// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries




// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDR38Lre0Xg6NiVzCWnufYoIlq-8R2-3IY",
  authDomain: "scic-job-task-81984.firebaseapp.com",
  projectId: "scic-job-task-81984",
  storageBucket: "scic-job-task-81984.appspot.com",
  messagingSenderId: "715868936082",
  appId: "1:715868936082:web:87f5114dff8338688d134b"
};


// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);