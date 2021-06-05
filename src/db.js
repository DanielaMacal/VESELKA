import firebase from 'firebase/app';
import 'firebase/firestore';

const firebaseConfig = {
  apiKey: 'AIzaSyC-2w3hJduanBHLM0pYOL0ZCzMe7b10Ci8',
  authDomain: 'veselka-e98d6.firebaseapp.com',
  projectId: 'veselka-e98d6',
  storageBucket: 'veselka-e98d6.appspot.com',
  messagingSenderId: '692601055313',
  appId: '1:692601055313:web:ad1f0efb44a9ed17463070',
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);
export const db = firebase.firestore();
