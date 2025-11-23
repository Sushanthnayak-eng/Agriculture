// Profile Dropdown Toggle
const profileBtn = document.getElementById("profileBtn");
const dropdown = document.getElementById("profileDropdown");

profileBtn.addEventListener("click", () => {
    dropdown.classList.toggle("open");
});

// Close dropdown when clicking outside
document.addEventListener("click", (e) => {
    if (!profileBtn.contains(e.target) && !dropdown.contains(e.target)) {
        dropdown.classList.remove("open");
    }
});

// Navbar Hide on Scroll
let lastScroll = 0;
const navbar = document.getElementById("navbar");

window.addEventListener("scroll", () => {
    const currentScroll = window.pageYOffset;

    // Add scrolled class for styling when scrolled past 50px
    if (currentScroll > 50) {
        navbar.classList.add("scrolled");
    } else {
        navbar.classList.remove("scrolled");
    }

    // Hide navbar when scrolling down, show when scrolling up
    if (currentScroll > lastScroll && currentScroll > 100) {
        // Scrolling down & past 100px
        navbar.classList.add("hidden");
    } else {
        // Scrolling up
        navbar.classList.remove("hidden");
    }

    lastScroll = currentScroll;
});