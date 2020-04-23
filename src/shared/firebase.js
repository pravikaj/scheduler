import firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/database';

const firebaseConfig = {
    apiKey: "AIzaSyB3kN3-sgw2Ck60_zsepcIVG4t08Yo6nwA",
    authDomain: "scheduler-pravikaj.firebaseapp.com",
    databaseURL: "https://scheduler-pravikaj.firebaseio.com",
    projectId: "scheduler-pravikaj",
    storageBucket: "scheduler-pravikaj.appspot.com",
    messagingSenderId: "431197933972",
    appId: "1:431197933972:web:cb5ce9d3b2bc6681d57f81",
  };

firebase.initializeApp(firebaseConfig);

export default firebase;