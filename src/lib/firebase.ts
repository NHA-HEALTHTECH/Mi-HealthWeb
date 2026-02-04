// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// Add other Firebase services as needed, e.g.:
// import { getAuth } from "firebase/auth";
// import { getFirestore } from "firebase/firestore";
// import { getStorage } from "firebase/storage";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDDJ5bJ_vyBqmg_fLLqo-KsHF8EXzo_K30",
  authDomain: "mi-health-237.firebaseapp.com",
  projectId: "mi-health-237",
  storageBucket: "mi-health-237.firebasestorage.app",
  messagingSenderId: "4019181329",
  appId: "1:4019181329:web:98d16d51506c8c4cb71eb0",
  measurementId: "G-V2W2L0YVHN"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Analytics (optional, only works in browsers)
let analytics: any = null;
if (typeof window !== 'undefined') {
  analytics = getAnalytics(app);
}

// Export initialized services for use throughout the app
// export const auth = getAuth(app);
// export const db = getFirestore(app);
// export const storage = getStorage(app);

export { app, analytics };
