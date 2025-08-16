import { initializeApp } from "https://www.gstatic.com/firebasejs/9.6.1/firebase-app.js";
import { getAuth, onAuthStateChanged } from "https://www.gstatic.com/firebasejs/9.6.1/firebase-auth.js";

const firebaseConfig = {
    apiKey: "AIzaSyAmIuwUeed6cA1ZL4hWN-GY1IbNDxZtBcw",
    authDomain: "cyberflora-cb897.firebaseapp.com",
    projectId: "cyberflora-cb897",
    storageBucket: "cyberflora-cb897.appspot.com",
    messagingSenderId: "683286424975",
    appId: "1:683286424975:web:6be1168a15792ea2b42ffa",
    measurementId: "G-VLR4G32E25"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

document.addEventListener('DOMContentLoaded', () => {
    const authLinksContainer = document.getElementById('auth-links');

    onAuthStateChanged(auth, (user) => {
        if (user) {
            // User is logged in, show Profile button
            authLinksContainer.innerHTML = `
        <a href="profile.html" class="bg-[#5A8B72] text-white py-2 px-4 rounded-full hover:bg-[#4a755f] transition-colors text-sm font-semibold">Profile</a>
      `;
        } else {
            // User is not logged in, show Login button
            authLinksContainer.innerHTML = `
        <a href="login.html" class="bg-[#5A8B72] text-white py-2 px-4 rounded-full hover:bg-[#4a755f] transition-colors text-sm font-semibold">Login</a>
      `;
        }
    });
});