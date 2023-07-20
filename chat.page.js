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
user_name = localStorage.getItem("user_name"); room_name = localStorage.getItem("room_name");
function send()
{
    msg = document.getElementById("msg").value;
    firebase.database().ref(room_name).push({
        name:user_name,
        message:msg,
        like:0
    });

    document,getElementById(msg).value = "";
}