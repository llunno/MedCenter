import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";
import "firebase/storage";

// Your web app's Firebase configuration
var firebaseConfig = {
    apiKey: "AIzaSyCN1WIQOQCiKK4dc8yu_3SdlAreLf36lbQ",
    authDomain: "infnet-at-front.firebaseapp.com",
    projectId: "infnet-at-front",
    storageBucket: "infnet-at-front.appspot.com",
    messagingSenderId: "342341795836",
    appId: "1:342341795836:web:e9acc183d3f3fcde4a7c79",
    measurementId: "G-LBZBTVYDCC"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig)

export const db = firebase.firestore();
export const auth = firebase.auth();
export const storage = firebase.storage();