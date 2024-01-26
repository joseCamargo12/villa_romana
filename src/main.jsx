import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyBlbwwOFV-FVU6ZNPE3cVJVn01n7XhkUIM",
  authDomain: "villa-romana-abf0b.firebaseapp.com",
  projectId: "villa-romana-abf0b",
  storageBucket: "villa-romana-abf0b.appspot.com",
  messagingSenderId: "917765708648",
  appId: "1:917765708648:web:043c1dbc7c9bdea750d4dd"
};

initializeApp(firebaseConfig);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)
