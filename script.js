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

// Smooth scroll for anchor links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});