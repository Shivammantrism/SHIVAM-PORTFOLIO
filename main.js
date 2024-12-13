// If you want to add interactivity like a hamburger menu or animations, you can include JavaScript here.
document.addEventListener("DOMContentLoaded", function () {
    // Example: Smooth Scroll
    const links = document.querySelectorAll("a[href^='#']");
    links.forEach((link) => {
        link.addEventListener("click", function (e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute("href"));
            window.scrollTo({
                top: target.offsetTop - 50,
                behavior: "smooth",
            });
        });
    });
});
