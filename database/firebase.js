import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
const firebaseConfig = {
  apiKey: "AIzaSyAhQA9fovNmFEXR-CzfeeGTao-w_KgO5Cc",
  authDomain: "psy-app-f27db.firebaseapp.com",
  projectId: "psy-app-f27db",
  storageBucket: "psy-app-f27db.appspot.com",
  messagingSenderId: "112905627629",
  appId: "1:112905627629:web:f314407b1c8bf0214029e4",
  measurementId: "G-WW6LLHDXKM",
};
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
export default { app, db };
