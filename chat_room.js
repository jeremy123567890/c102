var firebaseConfig = {
  apiKey: "AIzaSyD83TIbHOpCcU-NObli9I2M8xO0yzqbPZw",
  authDomain: "kwitter-ecff7.firebaseapp.com",
  databaseURL: "https://kwitter-ecff7-default-rtdb.firebaseio.com",
  projectId: "kwitter-ecff7",
  storageBucket: "kwitter-ecff7.appspot.com",
  messagingSenderId: "43045304706",
  appId: "1:43045304706:web:04cef1102523a57146379b",
  measurementId: "G-81WG1R1GZC"
};
firebase.initializeApp(firebaseConfig);
user_name = localStorage.getItem("user_name");
document.getElementById("user_name").innerHTML = "welcome" + user_name + "!";

function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
     Room_names = childKey;
    //Start code
    console.log("Room Name - " + Room_names); row = "<div class='room_name' id="+Room_names+" onclick='redirectToRoomName(this.id)' >#"+ Room_names +"</div><hr>"; document.getElementById("output").innerHTML += row;
    //End code
    });});}
   
getData();
function redirectToRoomName(name)
{
    console.log(name);
    localStorage.setItem("room_name", name);
    window.location = "chat_page.html";
}

function logout() {
    localStorage.removeItem("user_name");
    localStorage.removeItem("room_name");
    window.location = "index.html";
}
function addRoom()
{
      room_name = 
      document.getElementById("room_name").value;

      firebase.database().ref("/").child(room_name).update({
            purpose : "adding room name"
      });

      localStorage.setItem("room_name", room_name);

      window.location = "chat_page.html";
}