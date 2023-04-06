import firebase from 'firebase/compat/app';
import 'firebase/compat/firestore';

const firebaseConfig = {
  apiKey: "",
  authDomain: "clone-325614.firebaseapp.com",
  projectId: "amazon-clone-325614",
  storageBucket: "amazon-clone-325614.appspot.com",
  messagingSenderId: "117274096279",
  appId: "1:117274096279:web:3717451fa058a1bd96afd2"
};

  
  const app = !firebase.apps.length ? firebase.initializeApp(firebaseConfig) : firebase.app();

  const db = app.firestore();

  export default db;
  
  
  
