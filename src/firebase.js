import firebase from 'firebase/compat/app';
import 'firebase/compat/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyAhD6AQIKUgcdIUcUF26Kuaw7gdIuX3SzQ",
  authDomain: "share-trade-b3bd4.firebaseapp.com",
  projectId: "share-trade-b3bd4",
  storageBucket: "share-trade-b3bd4.appspot.com",
  messagingSenderId: "427640937433",
  appId: "1:427640937433:web:d0f432b7a33578217717c8"
};
// Initialize Firebase
const app = firebase.initializeApp(firebaseConfig)

export const db = app.firestore()
export default app
