import firebase from 'firebase/app';
import 'firebase/database';
import 'firebase/auth'

const firebaseConfig = {
  apiKey: "AIzaSyC1lr9TZa6aw3n_y-ZeBekRbLFReGwC488",
  authDomain: "simple-chat-f53cf.firebaseapp.com",
  databaseURL: "https://simple-chat-f53cf.firebaseio.com",
  projectId: "simple-chat-f53cf",
  storageBucket: "simple-chat-f53cf.appspot.com",
  messagingSenderId: "66932599705",
  appId: "1:66932599705:web:9f653da0642dce2e258108"
};

firebase.initializeApp(firebaseConfig);
export const auth = firebase.auth();
export const db = firebase.database();