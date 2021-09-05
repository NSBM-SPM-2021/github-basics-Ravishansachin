import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';


// Import the functions you need from the SDKs you need
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAwmRYMiDKJtUvJOHbkx3P5ylIRfBcnTqc",
  authDomain: "student-management-syste-7ecb8.firebaseapp.com",
  projectId: "student-management-syste-7ecb8",
  storageBucket: "student-management-syste-7ecb8.appspot.com",
  messagingSenderId: "166844994722",
  appId: "1:166844994722:web:6daef393ae4d1ee834b3fb"
};

// Initialize Firebase
//const app = initializeApp(firebaseConfig);
const firebaseRef = firebase.initializeApp(firebaseConfig);

export default firebaseRef;
