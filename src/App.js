import './App.css';
import LoginPage from './LoginPage';
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import React from 'react';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

const firebaseConfig = {
  apiKey: "AIzaSyDbhEfYZYSAFvhNgc4xr3dTrBdRpVryLZE",
  authDomain: "gcp-cep-g27-330206.firebaseapp.com",
  databaseURL: "https://gcp-cep-g27-330206-default-rtdb.asia-southeast1.firebasedatabase.app",
  projectId: "gcp-cep-g27-330206",
  storageBucket: "gcp-cep-g27-330206.appspot.com",
  messagingSenderId: "291778710206",
  appId: "1:291778710206:web:cb5e3cde4544a6a011acef",
  measurementId: "G-D3KZYPJ3ZE"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

function App() { 
    return (
      <div className="App">
        <LoginPage />
      </div>
    );
}

export default App;
