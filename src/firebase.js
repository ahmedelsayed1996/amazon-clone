
//  import { initializeApp } from "firebase/app";
//  import { getFirestore } from "firebase/firestore";

//  const firebaseConfig = {
//   apiKey: "AIzaSyA7_FFvPf6LA_GWttZHZSViQDBZhbI1Dtc",
//   authDomain: "project-b6e89.firebaseapp.com",
//   projectId: "project-b6e89",
//   storageBucket: "project-b6e89.appspot.com",
//   messagingSenderId: "51823725831",
//   appId: "1:51823725831:web:d082372dc76b15032409a2",
//   measurementId: "G-PP43T9CH3R"
// };
//  const app = initializeApp(firebaseConfig);
//  export const db = getFirestore(app);

// Import the functions you need from the SDKs you need
import { initializeApp,firebase } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";
import 'firebase/firestore';
import { firestore } from 'firebase/firestore';

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBQWcKWshFSTKy9W66weaXM2t14CBw01AA",
  authDomain: "e-clone-31d2b.firebaseapp.com",
  projectId: "e-clone-31d2b",
  storageBucket: "e-clone-31d2b.appspot.com",
  messagingSenderId: "227035562620",
  appId: "1:227035562620:web:ccafffd9f782790b2bbff9",
  measurementId: "G-38E3J2P5HC"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);
const auth = getAuth(app);
export {auth};
export const db = getFirestore(app);


