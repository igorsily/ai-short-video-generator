import { initializeApp } from "firebase/app";
import { getStorage } from "@firebase/storage";

const firebaseConfig = {
  apiKey: process.env.FIREBASE_API_KEY,
  authDomain: "ai-short-video-b841c.firebaseapp.com",
  projectId: "ai-short-video-b841c",
  storageBucket: "ai-short-video-b841c.appspot.com",
  messagingSenderId: "800384878512",
  appId: "1:800384878512:web:90ebc604073164861ff875",
};

const app = initializeApp(firebaseConfig);

export const storage = getStorage(app);
