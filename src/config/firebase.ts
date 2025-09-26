// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth"

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyDlZr2t7IDt2bQBaLsVRG3jy8UPmmzgB5U",
    authDomain: "shoppinglist-4db5f.firebaseapp.com",
    projectId: "shoppinglist-4db5f",
    storageBucket: "shoppinglist-4db5f.firebasestorage.app",
    messagingSenderId: "468062057209",
    appId: "1:468062057209:web:3a28f2ff59619f8e092828"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const  auth = getAuth(app);

export { auth };