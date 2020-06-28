import firebase from 'firebase/app'

import 'firebase/auth' //authentication
import 'firebase/database' //real-time database
import 'firebase/storage' //storing images

const firebaseConfig = {
    apiKey: "AIzaSyCdbsXDUsPfMZAUkERs5ucaSqhZTlUpe2I",
    authDomain: "prime-aa277.firebaseapp.com",
    databaseURL: "https://prime-aa277.firebaseio.com",
    projectId: "prime-aa277",
    storageBucket: "prime-aa277.appspot.com",
    messagingSenderId: "548992392638",
    appId: "1:548992392638:web:0144339e38d80e6dba6def",
};

firebase.initializeApp(firebaseConfig); //firebase init
export default firebase;