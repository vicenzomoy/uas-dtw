// Scroll Spy Script
const sections = document.querySelectorAll('section');
const navLinks = document.querySelectorAll('.nav-link');

window.addEventListener('scroll', () => {
    let current = '';
    sections.forEach(sec => {
    const top = window.scrollY;
    const offset = sec.offsetTop - 150;
    const height = sec.offsetHeight;
    if (top >= offset && top < offset + height) {
    current = sec.getAttribute('id');
    }
    });

    navLinks.forEach(link => {
        link.classList.remove('active-link');
        if (link.getAttribute('href').includes(current)) {
        link.classList.add('active-link');
        }
        });
});

// Popup Message Script
document.addEventListener("DOMContentLoaded", () => {
    const form = document.querySelector("#contact form");
    const popup = document.getElementById("popup-message");
    const closePopup = document.getElementById("close-popup");

    form.addEventListener("submit", function (e) {
        e.preventDefault();
        popup.style.display = "flex";
    });

    closePopup.addEventListener("click", () => {
        popup.style.display = "none";
    });
});

const form = document.querySelector("#contact form");
const popup = document.getElementById("popup-message");
const closePopup = document.getElementById("close-popup");

form.addEventListener("submit", function (e) {
    e.preventDefault(); // Prevent form refresh
    popup.style.display = "flex"; // Show popup
});

closePopup.addEventListener("click", () => {
    popup.style.display = "none"; // Close popup
});