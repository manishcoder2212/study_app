import * as firebase  from '@firebase/app'; 
import '@firebase/firestore'




const firebaseConfig = {
  apiKey: "AIzaSyAtTo8ijukRjm3s4eFvAt6SsY5NxJz3Lm8",
  authDomain: "fir-37c42.firebaseapp.com",
  databaseURL: "https://fir-37c42-default-rtdb.firebaseio.com",
  projectId: "fir-37c42",
  storageBucket: "fir-37c42.appspot.com",
  messagingSenderId: "205914034794",
  appId: "1:205914034794:web:dc24d21f0fb987b0aeb013"
};
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

  export default firebase.firestore();