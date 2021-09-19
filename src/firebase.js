import firebase from "firebase";
const firebaseConfig = {
  apiKey: "AIzaSyCB0-93DxFlTO-p46q6PIGi75dadQTz8lQ",
  authDomain: "snapchat-clone-yt-5bf9a.firebaseapp.com",
  projectId: "snapchat-clone-yt-5bf9a",
  storageBucket: "snapchat-clone-yt-5bf9a.appspot.com",
  messagingSenderId: "188272447650",
  appId: "1:188272447650:web:16c2bfa879e399465747fb",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
const storage = firebase.storage();
const provider = new firebase.auth.GoogleAuthProvider();

export { db, auth, storage, provider };
