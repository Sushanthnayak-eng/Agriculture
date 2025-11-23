import { initializeApp } from "https://www.gstatic.com/firebasejs/12.6.0/firebase-app.js";
import { getAuth, signInWithEmailAndPassword, sendPasswordResetEmail } from "https://www.gstatic.com/firebasejs/12.6.0/firebase-auth.js";
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
  const email = form.querySelector('input[type="email"]').value;
  const password = form.querySelector('input[type="password"]').value;

  try {
    await signInWithEmailAndPassword(auth, email, password);
    window.location.href = "home.html"; // Redirect to home page after login
  } catch (error) {
    alert(error.message);
  }
});

// Add this for forgot password functionality
// This should match your field!
const forgotLink = document.getElementById('forgotPasswordLink');
forgotLink.addEventListener('click', async (e) => {
  e.preventDefault();
  const emailInput = document.querySelector('input[type="email"]');
  const email = emailInput.value.trim();

  if (!email) {
    alert("Please enter your email address above before clicking Forgot Password.");
    emailInput.focus();
    return;
  }

  try {
    await sendPasswordResetEmail(auth, email);
    alert("A password reset link has been sent to " + email + ". If you do not see it, check your spam folder.");
  } catch (err) {
    alert("Error: " + err.message);
  }
});
