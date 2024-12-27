// JavaScript for E-LearnX Portal
document.addEventListener("DOMContentLoaded", () => {
    // 1. Registration Button
    const registerButton = document.querySelector("button");
    registerButton.addEventListener("click", () => {
        alert("Thank you for showing interest! Registration opens soon.");
    });

    // 2. Highlight Active Menu Item
    const navLinks = document.querySelectorAll("nav ul li a");
    navLinks.forEach(link => {
        link.addEventListener("click", () => {
            navLinks.forEach(nav => nav.classList.remove("active"));
            link.classList.add("active");
        });
    });

    // 3. Image Carousel for `coll` Section
    let currentIndex = 0;
    const images = document.querySelectorAll(".coll img");
    setInterval(() => {
        images[currentIndex].style.display = "none";
        currentIndex = (currentIndex + 1) % images.length;
        images[currentIndex].style.display = "block";
    }, 3000); // Changes image every 3 seconds
});
