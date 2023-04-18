// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAo8mUg1xcoD5FXw5pSIlhpqgfk9fePAeQ",
  authDomain: "the-news-dragon-ccda0.firebaseapp.com",
  projectId: "the-news-dragon-ccda0",
  storageBucket: "the-news-dragon-ccda0.appspot.com",
  messagingSenderId: "181550661694",
  appId: "1:181550661694:web:22979c6c270b283deb916f"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export default app;