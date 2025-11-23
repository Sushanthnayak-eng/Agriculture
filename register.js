// register.js
import { initializeApp } from "https://www.gstatic.com/firebasejs/12.6.0/firebase-app.js";
import { getAuth, createUserWithEmailAndPassword, updateProfile } from "https://www.gstatic.com/firebasejs/12.6.0/firebase-auth.js";
import { getAnalytics } from "https://www.gstatic.com/firebasejs/12.6.0/firebase-analytics.js";

const firebaseConfig = {
  apiKey: "AIzaSyCAv4QSlu4N8yYhJ81hWh_DQcDRUZFEDBk",
  authDomain: "login-form-739ab.firebaseapp.com",
  projectId: "login-form-739ab",
  storageBucket: "login-form-739ab.firebasestorage.app",
  messagingSenderId: "812982247744",
  appId: "1:812982247744:web:0404a33ede46a4b6511aa5",
  measurementId: "G-7R5ZNNVJDP"
};

const app = initializeApp(firebaseConfig);
getAnalytics(app);
const auth = getAuth(app);

const form = document.querySelector("form");

form.addEventListener("submit", async (e) => {
  e.preventDefault();

  const fullName = form.querySelector('input[type="text"]').value;
  const email = form.querySelector('input[type="email"]').value;
  const password = form.querySelectorAll('input[type="password"]')[0].value;
  const confirmPassword = form.querySelectorAll('input[type="password"]')[1].value;

  if (password !== confirmPassword) {
    alert("Passwords do not match");
    return;
  }

  try {
    const userCredential = await createUserWithEmailAndPassword(auth, email, password);
    await updateProfile(userCredential.user, { displayName: fullName });
    alert("Registration successful!");
    window.location.href = "index.html"; // Redirect to home page after successful registration
  } catch (error) {
    alert(error.message);
  }
});
