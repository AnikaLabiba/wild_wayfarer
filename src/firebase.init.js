// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from 'firebase/auth'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyAHSCRS73btokWElfBKtP565DLrlOtDrCM",
    authDomain: "wild-wayfarer.firebaseapp.com",
    projectId: "wild-wayfarer",
    storageBucket: "wild-wayfarer.appspot.com",
    messagingSenderId: "14967941113",
    appId: "1:14967941113:web:2416ac0e847d2159fc7f28"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export default auth;