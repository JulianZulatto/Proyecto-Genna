import React from "react";
import { createRoot } from "react-dom/client";
import App from "./App";
import 'bootstrap/dist/css/bootstrap.min.css';


// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBwuncBt-5E8xBkLzN2W41Y6fC4PQGMvXc",
  authDomain: "genna-lenceria.firebaseapp.com",
  projectId: "genna-lenceria",
  storageBucket: "genna-lenceria.appspot.com",
  messagingSenderId: "359615292261",
  appId: "1:359615292261:web:6d03cc491c874a95cd378c"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);



createRoot(document.getElementById('root')).render(<App/>)
