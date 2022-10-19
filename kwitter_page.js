var firebaseConfig = {
    apiKey: "AIzaSyC-MGIzP_D5BkAw5ZaRyFOAiMXq0VZoLa0",
    authDomain: "let-s-chat-575d3.firebaseapp.com",
    databaseURL: "https://let-s-chat-575d3-default-rtdb.firebaseio.com",
    projectId: "let-s-chat-575d3",
    storageBucket: "let-s-chat-575d3.appspot.com",
    messagingSenderId: "972218711349",
    appId: "1:972218711349:web:15bc819b0771091863607c"
  };
firebase.initializeApp(firebaseConfig);

username = localStorage.getItem("username", username);
room_name = localStorage.getItem("room_name", room_name);

function send()
{
    msg = document.getElementById("msg").ariaValueMax;
    firebase.database().ref(room_name).push({
        name: username,
        message: msg,
        like:0
    });
    document.getElementById("msg").value = "";
}