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

username = localStorage.getItem("username");
document.getElementById("name_of_chatter").innerHTML = "Welcome " + username + "!";

function addRoom()
{
    room_name = document.getElementById("room").value;

    localStorage.setItem("room_name", room_name);
    firebase.database().ref("/").child(room_name).update({
        purpose: "adding room name"
    });
    window.location("kwitter_page.html")
}

function getData() 
{
    firebase.database().ref("/").on('value',
function(snapshot) {document.getElementById("output").innerHTML =
"";snapshot.forEach(function(childSnapshot) {childKey = childSnapshot.key;
Room_names = childKey;
//Start code
row = "<div class = 'room_name' id=" + Room_names+"onclick='redirectToRoomName(this.id)'>#"+Room_names+"</div><hr>";
//End code
});});}
getData();

function redirectToRoomName(name)
{
    console.log(name);
    localStorage.setItem("room_name", name);
    window.location = "kwitter_page.html";
}

function Logout()
{
    localStorage.removeItem("username", username);
    localStorage.removeItem("room_name", room_name);

    window.location = "kwitter_page.html";
}