import firebase from 'firebase';

const firebaseApp = firebase.initializeApp({
  apiKey: 'AIzaSyAeqWMT1SILAN0klPevBxjj25JnGTm0l7Y',
  authDomain: 'ekhenei.firebaseapp.com',
  databaseURL: 'https://ekhenei.firebaseio.com',
  projectId: 'ekhenei',
  storageBucket: 'ekhenei.appspot.com',
  messagingSenderId: '983600411645',
  appId: '1:983600411645:web:1b8c9e565f8dd9f79bdf94',
  measurementId: 'G-LLEGRM6VJF',
});

const auth = firebase.auth();

export { auth };
