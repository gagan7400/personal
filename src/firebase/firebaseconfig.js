
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
    apiKey: "AIzaSyBUKtgpWlDXDEiyHzy9xzKiD5UE18vzaQ8",
    authDomain: "eveningproject-de84d.firebaseapp.com",
    projectId: "eveningproject-de84d",
    storageBucket: "eveningproject-de84d.appspot.com",
    messagingSenderId: "550364301085",
    appId: "1:550364301085:web:3eb28adece7006583443f4"
};


const app = initializeApp(firebaseConfig);
//for database management
export let db = getFirestore(app);
//for authentication 
export let auth = getAuth(app)
