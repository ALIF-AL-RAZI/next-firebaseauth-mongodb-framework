// Firebase configuration
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
    apiKey: "AIzaSyC8EDkDShKmEGDSKpDdwyxcG-CRRV9_v04",
    authDomain: "all-testing-d0749.firebaseapp.com",
    projectId: "all-testing-d0749",
    storageBucket: "all-testing-d0749.firebasestorage.app",
    messagingSenderId: "964420462603",
    appId: "1:964420462603:web:229a33ec5dfdbaa7517f0e",
    measurementId: "G-YLV5W36KXB"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export { auth };
