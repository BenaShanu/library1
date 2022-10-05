import firebase from "firebase";
require("@firebase/firestore");


const firebaseConfig = {
  apiKey: "AIzaSyDRtcp6iCsVX5yB_dmgA2ZZAlid37PXKek",
  authDomain: "e-library-de124.firebaseapp.com",
  projectId: "e-library-de124",
  storageBucket: "e-library-de124.appspot.com",
  messagingSenderId: "959265877257",
  appId: "1:959265877257:web:c9cc832468dad7893377d8"
};

firebase.initializeApp(firebaseConfig);

export default firebase.firestore();