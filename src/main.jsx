import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBCc5qzvrkeO4Zj4hwbtyMYS541g7ZUBl0",
  authDomain: "react-49905.firebaseapp.com",
  projectId: "react-49905",
  storageBucket: "react-49905.appspot.com",
  messagingSenderId: "109477585289",
  appId: "1:109477585289:web:578b75498aa40d1e8f0158"
};

// Initialize Firebase
initializeApp(firebaseConfig);


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)
