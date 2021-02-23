import Firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';
//import {seedDatabase} from '../seed';

const config = {
    apiKey: "AIzaSyA0zM-L8SWCo7OnEcrNcv7GTCcYpZw0AIA",
    authDomain: "netflix-sc-clone.firebaseapp.com",
    projectId: "netflix-sc-clone",
    storageBucket: "netflix-sc-clone.appspot.com",
    messagingSenderId: "833896847525",
    appId: "1:833896847525:web:32468a8504b8dc8865954c"
};

const firebase = Firebase.initializeApp(config);

//seedDatabase(firebase)

export {firebase};