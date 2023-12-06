// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAu8VUOutOTPMw2YOtbwVTFBvNtBkGYugU",
  authDomain: "news-app-f22b8.firebaseapp.com",
  projectId: "news-app-f22b8",
  storageBucket: "news-app-f22b8.appspot.com",
  messagingSenderId: "920462663348",
  appId: "1:920462663348:web:5e2ae18c130139d14e81e1",
  measurementId: "G-8W391TER2Y",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);
const auth = getAuth();
const db = getFirestore(app);

export { app, auth, db };
