// Import the functions you need from the SDKs you need

import { initializeApp } from "firebase/app";

import { getAnalytics } from "firebase/analytics";

import { getStorage, getDownloadURL, getBlob } from "firebase/storage";



// TODO: Add SDKs for Firebase products that you want to use

// https://firebase.google.com/docs/web/setup#available-libraries


// Your web app's Firebase configuration

// For Firebase JS SDK v7.20.0 and later, measurementId is optional

const firebaseConfig = {

  apiKey: "AIzaSyAseG9hmxCUbJFvlSJgXAhc5l0JWTLbfB8",

  authDomain: "geekland-916e1.firebaseapp.com",

  projectId: "geekland-916e1",

  storageBucket: "geekland-916e1.appspot.com",

  messagingSenderId: "643136161564",

  appId: "1:643136161564:web:3d112abecab31cc6345cd9",

  measurementId: "G-QWZYEMVQZ2"

};


// Initialize Firebase

const app = initializeApp(firebaseConfig);

const analytics = getAnalytics(app);


const storage = getStorage(app)

export { storage, getDownloadURL, getBlob }