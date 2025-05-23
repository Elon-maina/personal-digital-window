
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCEway_dFsn_kXXlSfLT1C2s6tmfEorglw",
  authDomain: "my-portfolio-71b6d.firebaseapp.com",
  projectId: "my-portfolio-71b6d",
  storageBucket: "my-portfolio-71b6d.firebasestorage.app",
  messagingSenderId: "390115814089",
  appId: "1:390115814089:web:c0914ccb3cf834b4d33b18",
  measurementId: "G-VEPY3LGEE5"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const db = getFirestore(app);

export { app, analytics, db };
