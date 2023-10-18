
import { initializeApp } from "firebase/app";
import {getFirestore} from "firebase/firestore"

const firebaseConfig = {
  apiKey: "AIzaSyBJHVy2SO8OW8RM7HIqksNZtvzmC6R1Plk",
  authDomain: "australis-tejidos-react.firebaseapp.com",
  projectId: "australis-tejidos-react",
  storageBucket: "australis-tejidos-react.appspot.com",
  messagingSenderId: "935149036684",
  appId: "1:935149036684:web:32ed64b026e6c36f25c7a9"
};

// Initialize Firebase
initializeApp(firebaseConfig);

export const db = getFirestore ()