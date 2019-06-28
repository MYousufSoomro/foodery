import * as firebase from "firebase";
import Swal from "sweetalert2";
import withReactContent from "sweetalert2-react-content";

const MySwal = withReactContent(Swal);

const firebaseConfig = {
  apiKey: "AIzaSyDPobRiHPmCo_X0a4mDheYPtuSR8TTkRMI",
  authDomain: "foodery-service.firebaseapp.com",
  databaseURL: "https://foodery-service.firebaseio.com",
  projectId: "foodery-service",
  storageBucket: "foodery-service.appspot.com",
  messagingSenderId: "750649818803",
  appId: "1:750649818803:web:863c9bc7a1ba77e0"
};

firebase.initializeApp(firebaseConfig);

var auth = firebase.auth();
var db = firebase.firestore();
var storage = firebase.storage();
var storageRef = storage.ref();

function isUserLoggedIn() {
  firebase.auth().onAuthStateChanged(user => {
    if (user) {
      console.log(user.uid);
    } else {
      window.location.href = "/login";
    }
  });
}

function login(email, password) {
  new Promise((resolve, reject) => {
    auth
      .signInWithEmailAndPassword(email, password)
      .then(e => {
        console.log("CONSOLE FROM FIREBASE.JS", e.user);
        resolve(e.user);
        window.location.href = "/dashboard";
      })
      .catch(function(error) {
        // Handle Errors here.
        // var errorCode = error.code;
        var errorMessage = error.message;
        // ...
        reject(
          MySwal.fire({
            title: "<strong>Error</strong>",
            type: "error",
            html: "<strong>" + errorMessage + "</strong>",
            showCloseButton: true,
            confirmButtonText: "<strong>Try Again</strong>"
          }).then(() => {
            window.location.href = "/login";
          })
        );
      });
  });
}

function signup(email, password, userObj) {
  new Promise((resolve, reject) => {
    auth
      .createUserWithEmailAndPassword(email, password)
      .then(e => {
        resolve(
          (userObj.uid = auth.currentUser.uid),
          db
            .collection("users")
            .doc(auth.currentUser.uid)
            .set(userObj)
            .then(function() {
              MySwal.fire({
                title: "<strong>Congrats :)</strong>",
                type: "success",
                html: "<strong>Account successfully created.</strong>",
                showCloseButton: true,
                confirmButtonText: "<strong>Sign In</strong>"
              }).then(() => {
                window.location.href = "/login";
              });
            })
            .catch(function(error) {
              MySwal.fire({
                title: "<strong>Error</strong>",
                type: "error",
                html: "<strong>" + error.message + "</strong>",
                showCloseButton: true,
                confirmButtonText: "<strong>Try Again</strong>"
              }).then(() => {
                window.location.href = "/registration";
              });
            })
        );
      })
      .catch(function(error) {
        // Handle Errors here.
        //   var errorCode = error.code;
        var errorMessage = error.message;
        // ...
        reject(
          MySwal.fire({
            title: "<strong>Error</strong>",
            type: "error",
            html: "<strong>" + errorMessage + "</strong>",
            showCloseButton: true,
            confirmButtonText: "<strong>Try Again</strong>"
          }).then(() => {
            window.location.href = "/registration";
          })
        );
      });
  });
}

function randomKey(length) {
  var result = "";
  var characters =
    "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
  var charactersLength = characters.length;
  for (var i = 0; i < length; i++) {
    result += characters.charAt(Math.floor(Math.random() * charactersLength));
  }
  return result;
}

function signup_rest(email, password, restObj) {
  new Promise((resolve, reject) => {
    auth
      .createUserWithEmailAndPassword(email, password)
      .then(e => {
        resolve(
          (restObj.uid = auth.currentUser.uid),
          db
            .collection("restaurants")
            .doc(auth.currentUser.uid)
            .set({
              data: restObj
            })
            .then(function() {
              MySwal.fire({
                title: "<strong>Congrats :)</strong>",
                type: "success",
                html:
                  "<strong>Restaurant Account successfully created.</strong>",
                showCloseButton: true,
                confirmButtonText: "<strong>Sign In</strong>"
              }).then(() => {
                window.location.href = "/login";
              });
            })
            .catch(function(error) {
              MySwal.fire({
                title: "<strong>Error</strong>",
                type: "error",
                html: "<strong>" + error.message + "</strong>",
                showCloseButton: true,
                confirmButtonText: "<strong>Try Again</strong>"
              }).then(() => {
                window.location.href = "/registration";
              });
            })
        );
      })
      .catch(function(error) {
        // Handle Errors here.
        //   var errorCode = error.code;
        var errorMessage = error.message;
        // ...
        reject(
          MySwal.fire({
            title: "<strong>Error</strong>",
            type: "error",
            html: "<strong>" + errorMessage + "</strong>",
            showCloseButton: true,
            confirmButtonText: "<strong>Try Again</strong>"
          }).then(() => {
            window.location.href = "/registration";
          })
        );
      });
  });
}

function additemtoDatabse(image, itemObj) {
  var file = image;

  var metadata = {
    contentType: "image"
  };

  var uploadTask = storageRef
    .child("_item_Images/" + randomKey(10) + file.name)
    .put(file, metadata);

  uploadTask.on(
    firebase.storage.TaskEvent.STATE_CHANGED, // or 'state_changed'
    function(snapshot) {
      // Get task progress, including the number of bytes uploaded and the total number of bytes to be uploaded
      var progress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
      console.log("Upload is " + progress + "% done");
      switch (snapshot.state) {
        case firebase.storage.TaskState.PAUSED: // or 'paused'
          console.log("Upload is paused");
          break;
        case firebase.storage.TaskState.RUNNING: // or 'running'
          console.log("Upload is running");
          break;
      }
    },
    function(error) {
      // A full list of error codes is available at
      // https://firebase.google.com/docs/storage/web/handle-errors
      switch (error.code) {
        case "storage/unauthorized":
          // User doesn't have permission to access the object
          break;

        case "storage/canceled":
          // User canceled the upload
          break;

        case "storage/unknown":
          // Unknown error occurred, inspect error.serverResponse
          break;
      }
    },
    function() {
      // Upload completed successfully, now we can get the download URL
      uploadTask.snapshot.ref.getDownloadURL().then(function(downloadURL) {
        console.log("File available at", downloadURL);
        itemObj.downloadURL = downloadURL;
        itemObj.uid = auth.currentUser.uid;
        db.collection("items")
          .add(itemObj)
          .then(function() {
            MySwal.fire({
              title: "<strong>Congrats :)</strong>",
              type: "success",
              html: "<strong>Item successfully saved in data base</strong>",
              showCloseButton: true,
              confirmButtonText: "<strong>OK</strong>"
            }).then(() => {
              window.location.href = "/dashboard";
            });
          })
          .catch(function(error) {
            MySwal.fire({
              title: "<strong>Error</strong>",
              type: "error",
              html: "<strong>" + error.message + "</strong>",
              showCloseButton: true,
              confirmButtonText: "<strong>Try Again</strong>"
            }).then(() => {
              window.location.href = "/dashboard/add_items";
            });
          });
      });
    }
  );
}

function getItemsFromFirestore() {
  var data = [];
  new Promise((resolve, reject) => {
    db.collection("items")
      .get()
      .then(function(querySnapshot) {
        resolve(
          querySnapshot.forEach(function(doc) {
            data.push({ item_id: doc.id, data: doc.data() });
            // doc.data() is never undefined for query doc snapshots
            console.log(doc.id, " => ", doc.data());
            console.log("data => ", data);
          })
        );
      })
      .then(() => {
        return data;
      });
  });
}

export {
  login,
  signup,
  signup_rest,
  additemtoDatabse,
  getItemsFromFirestore,
  isUserLoggedIn
};
