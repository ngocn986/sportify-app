/* eslint-disable react/react-in-jsx-scope */

import './App.css';
import AppRoutes from './routes/AppRoutes';

// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
import { getAnalytics } from 'firebase/analytics';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: 'AIzaSyCO_Ak1g11iccd1mbD6C7JKjr_N5MFx7eo',
  authDomain: 'spotifyapp-8b811.firebaseapp.com',
  projectId: 'spotifyapp-8b811',
  storageBucket: 'spotifyapp-8b811.appspot.com',
  messagingSenderId: '361159205875',
  appId: '1:361159205875:web:b174beed07646e179aa886',
  measurementId: 'G-NRE1NNFJF5',
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

function App() {
  return (
    <div>
      <AppRoutes></AppRoutes>
    </div>
  );
}

export default App;
