import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';






const firebaseConfig = {
    apiKey: "AIzaSyAubEdsK9aWfUP1JNI3kgycp50T6dGPb3k",
    authDomain: "projetoreact-d52f1.firebaseapp.com",
    projectId: "projetoreact-d52f1",
    storageBucket: "projetoreact-d52f1.appspot.com",
    messagingSenderId: "348131024243",
    appId: "1:348131024243:web:df9e5bbc7b15479a87b906"
  };

  if(!firebase.apps.length){

    firebase.initializeApp(firebaseConfig);
  }

  export default firebase;