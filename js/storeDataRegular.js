// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/9.1.1/firebase-app.js";
import { getFirestore } from "https://www.gstatic.com/firebasejs/9.1.1/firebase-firestore.js"
import { collection, getDocs, addDoc, Timestamp } from "https://www.gstatic.com/firebasejs/9.1.1/firebase-firestore.js"
import { query, orderBy, limit, where, onSnapshot } from "https://www.gstatic.com/firebasejs/9.1.1/firebase-firestore.js"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyACg8lYWox1Ae8MsVj5UE50N9J4TAlOAbA",
    authDomain: "code-park.firebaseapp.com",
    projectId: "code-park",
    storageBucket: "code-park.appspot.com",
    messagingSenderId: "251277230249",
    appId: "1:251277230249:web:c61351e617a21ca46269b8",
    measurementId: "G-QDVF4VT574"
  };

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export async function writeData() {
    try {
        const docRef = await addDoc(collection(db, "users"), {
          first: "Lalit",
          middle: "Kohliee",
          last: "Turing",
          born: 1912
        });
      
        console.log("Document written with ID: ", docRef.id);
      } catch (e) {
        console.error("Error adding document: ", e);
      }
      
}