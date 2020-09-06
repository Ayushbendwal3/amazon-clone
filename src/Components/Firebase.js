import firebase from 'firebase'

const firebaseApp = firebase.initializeApp({
  apiKey: 'AIzaSyCzN-XdVaZ4ncCLtPu2Jai14H1iES15xj8',
  authDomain: 'clone-c3f1d.firebaseapp.com',
  databaseURL: 'https://clone-c3f1d.firebaseio.com',
  projectId: 'clone-c3f1d',
  storageBucket: 'clone-c3f1d.appspot.com',
  messagingSenderId: '803072831070',
  appId: '1:803072831070:web:ea81fb1c545daaa8edcecf',
  measurementId: 'G-KDBDWDFW64'
})

const auth = firebase.auth()

export { auth }
