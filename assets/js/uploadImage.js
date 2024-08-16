
const firebaseConfig = {
    apiKey: "AIzaSyCqlwsKElxJPK7VEiKP9714zxzb02V9VU0",
    authDomain: "findway-f73e7.firebaseapp.com",
    projectId: "findway-f73e7",
    storageBucket: "findway-f73e7.appspot.com",
    messagingSenderId: "345912590084",
    appId: "1:345912590084:web:b8a1a03eb281a7be9a9a51"
  };

firebase.initializeApp(firebaseConfig);



const upload_email = document.getElementById("email");
const uploadphone = document.getElementById("phone");
const uploadmessage = document.getElementById("message");
const file = document.getElementById("file");
const uploadPercentage = document.getElementById("uploadPercentage");


var fileitem;
var fileName;

function getFile(e){
  fileitem = e.target.files[0];
  fileName = fileitem.name;
  file.innerHTML = fileName;
}


function uploadImage() {
let storageRef = firebase.storage().ref("image/"+ fileName);
let uploadTask = storageRef.put(fileitem)

uploadTask.on("state_changed", 
    (snapshot) => {
  console.log(snapshot);
//   percentVal = Math.floor((snapshot.bytesTransferred/snapshot.totalBytes)*100);
//   console.log(percentVal);
//   uploadPercentage.innerHTML = percentVal+"%";
},(error) => {
  console.log("error is ", error);
}, () => {
  uploadTask.snapshot.ref.getDownloadURL().then((url) =>{
    console.log("URL", url);
    alert("File Uploaded Successfully")
  })
})
}



