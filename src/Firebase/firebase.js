// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyDPk9kb41F0Tsrxw-33kMx2HjKRzCB6e5o",
    authDomain: "myfirstproject-aca.firebaseapp.com",
    projectId: "myfirstproject-aca",
    storageBucket: "myfirstproject-aca.appspot.com",
    messagingSenderId: "93106682420",
    appId: "1:93106682420:web:eab765967f30698abe6861"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// Initialize Cloud Firestore and get a reference to the service
export const db = getFirestore(app);
