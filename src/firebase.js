import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getStorage,  } from "firebase/storage";
import { getFirestore,  } from "firebase/firestore";




const firebaseConfig = {
  //apiKey: process.env.REACT_APP_FIREBASE_KEY,
  apiKey: "AIzaSyDoJBCXVdtnfHBy6zM2INii5DobXaByQMk",
  authDomain: "chatapp-27a13.firebaseapp.com",
  projectId: "chatapp-27a13",
  storageBucket: "chatapp-27a13.appspot.com",
  messagingSenderId: "412012501709",
  appId: "1:412012501709:web:669496cbd19bf39dbb2784",
  measurementId: "G-E2EKY054MY"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth = getAuth();
export const storage = getStorage();
export const db = getFirestore()




//  const analytics = getAnalytics(app);s