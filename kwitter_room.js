// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyBqTgZA1yZj-v3l070D9IgY4UhprtkAlGw",
    authDomain: "projecttest-200e9.firebaseapp.com",
    projectId: "projecttest-200e9",
    storageBucket: "projecttest-200e9.appspot.com",
    messagingSenderId: "923355677572",
    appId: "1:923355677572:web:deb3b473cc69ffbd9f53d1"
  };

  // Initialize Firebase
  const app = initializeApp(firebaseConfig);

  user_name = localStorage.getItem("user_name");

  function addRoom()
{
room_name = document.getElementById("room_name").value;
firebase.database().ref("/").child(room_name).update({
purpose: "adding room name"
});
localStorage.setItem("room_name", room_name); 
window.location = "kwitter_page.html";
}
  
  function getData() 
  {
    firebase.database().ref("/").on('value',
  function(snapshot) {document.getElementById("output").innerHTML ="";
  snapshot.forEach(function(childSnapshot) {childKey = childSnapshot.key;
  Room_names = childKey;
  //Start code
  row = "<div class = 'room_name' id ="+Room_names+" onclick = 'redirectToRoomName(this.id)'>#"+Room_names+"</div><hr>";
  //End code
  });});}
  getData();

  

function redirectToRoomName(name)
{
console.log(name);
localStorage.setItem("room_name", name);
 window.location = "kwitter_page.html";
}
