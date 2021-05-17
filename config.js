import *as firebase from 'firebase'
require('@firebase/firestore')
var firebaseConfig = {
    apiKey: "AIzaSyA3wLPC5z8cD5bzb0v20Ujd1djiPH34jGA",
    authDomain: "willy-app-1c659.firebaseapp.com",
    projectId: "willy-app-1c659",
    storageBucket: "willy-app-1c659.appspot.com",
    messagingSenderId: "292268841426",
    appId: "1:292268841426:web:42066bd2b2fd11ec9f900b"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  export default firebase.firestore();