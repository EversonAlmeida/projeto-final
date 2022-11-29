// Cole a constante do Firebase abaixo
const firebaseConfig = {
    apiKey: "AIzaSyBnPUnabHIn7T-6c0oRjJEShIHUPZ3fEZI",
    authDomain: "aula-18-leticia.firebaseapp.com",
    projectId: "aula-18-leticia",
    storageBucket: "aula-18-leticia.appspot.com",
    messagingSenderId: "266960475389",
    appId: "1:266960475389:web:58fac8dfa8c0fb19071a94",
    measurementId: "G-VTT9MCF45F"
  };
// Iniciando o Firebase
firebase.initializeApp(firebaseConfig)
var database = firebase.database()