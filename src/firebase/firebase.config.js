// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";


// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCae9wRy37Ljq-iQgmrUayrksUgR5YZNCY",
  authDomain: "b9a9-sweethome.firebaseapp.com",
  projectId: "b9a9-sweethome",
  storageBucket: "b9a9-sweethome.appspot.com",
  messagingSenderId: "1007549625203",
  appId: "1:1007549625203:web:d6e10b77f64e5d783dcb06"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app);

export default auth;