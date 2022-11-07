// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth} from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyB0Hmig35n5a_HCniVdpv1DEvd8cZPPUjM",
    authDomain: "disney-auth-d91ff.firebaseapp.com",
    projectId: "disney-auth-d91ff",
    storageBucket: "disney-auth-d91ff.appspot.com",
    messagingSenderId: "714102067805",
    appId: "1:714102067805:web:0cc6a32d277f94e96433b4",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);


