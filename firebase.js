import firebase from 'firebase/compat/app';
import 'firebase/compat/firestore';

const firebaseConfig = {
};

  
  const app = !firebase.apps.length ? firebase.initializeApp(firebaseConfig) : firebase.app();

  const db = app.firestore();

  export default db;
  
  
  
