import { initializeApp, getApps, getApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyAcG9ix2qJmPxbtd-t5fXlxpxdJynu9fKI",
  authDomain: "aura-browser-4931b.firebaseapp.com",
  projectId: "aura-browser-4931b",
  storageBucket: "aura-browser-4931b.firebasestorage.app",
  messagingSenderId: "1042925556258",
  appId: "1:1042925556258:web:8f0ddc5def2c716a48707b",
};

const app = getApps().length ? getApp() : initializeApp(firebaseConfig);
export const db = getFirestore(app);
