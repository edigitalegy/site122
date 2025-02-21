import { db, auth } from "./firebase.js";
/******************************************sign in*************************************************************/
let namearticle;
let emailarticle;
// Check if the user is logged in
auth.onAuthStateChanged(user => {
  if (user) {
    document.getElementById("user-name").innerHTML = `${user.displayName || user.email}`;
    namearticle = user.displayName; 
    emailarticle = user.email;

    // Check if the email is admin@gmail.com
    if (user.email === "admin@gmail.com") {
      document.getElementById("admin-button").classList.toggle('show');
    }
  } else {
      if (user.email === "admin@gmail.com") {
          document.getElementById("admin-button").classList.toggle('show');
        }
    window.location.href = "../index.html"; // Redirect to login if no user is found
  }
});
/***********************************sign out**************************************************************/
function logout() {
  auth.signOut()
    .then(() => {
      window.location.href = "../index.html"; // Redirect back to login page
    })
    .catch(error => {
      alert("خطأ: " + error.message);
    });
}

