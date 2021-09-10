import firebase from 'firebase/compat/app';
import 'firebase/compat/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyCn0F1bd0nY2TQpjd6LQ1LQ6bZz0z9jrdQ",
  authDomain: "324902.firebaseapp.com",
  projectId: "amazon-324902",
  storageBucket: "amazon-324902.appspot.com",
  messagingSenderId: "902617857437",
  appId: "1:902617857437:web:8a441fc314d19cc3db0374"
};

  
  const app = !firebase.apps.length ? firebase.initializeApp(firebaseConfig) : firebase.app();

  const db = app.firestore();

  export default db;
  
  
  