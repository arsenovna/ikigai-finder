import firebase from "firebase/app"
import "firebase/firestore"

var firebaseConfig = {
  apiKey: "AIzaSyCiy12R07xLFdAl_7aCTir8wAYguYrS1zc",
  authDomain: "ikigai-finder-app.firebaseapp.com",
  databaseURL: "https://ikigai-finder-app.firebaseio.com",
  projectId: "ikigai-finder-app",
  storageBucket: "ikigai-finder-app.appspot.com",
  messagingSenderId: "938087567239",
  appId: "1:938087567239:web:ddda868dcf968b0530cd22"
};

firebase.initializeApp(firebaseConfig);

export default firebase;