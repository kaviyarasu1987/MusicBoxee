import firebase from 'firebase';

const firebaseConfig = {
  apiKey: "AIzaSyCEm7vA-msgcnmh0zmGMQRpwygZs5QI_-c",
  authDomain: "musicbox-b9c5e.firebaseapp.com",
  databaseURL: "https://musicbox-b9c5e.firebaseio.com",
  projectId: "musicbox-b9c5e",
  storageBucket: "musicbox-b9c5e.appspot.com",
  messagingSenderId: "165520597198",
  appId: "1:165520597198:web:e0022ea222fa058752709f"
};

firebase.initializeApp(firebaseConfig)

export default firebase;
