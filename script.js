// Get the navigation links
const navLinks = document.querySelectorAll("nav ul li a");

// Add an event listener to each link
navLinks.forEach(link => {
    link.addEventListener("click", event => {
        // Prevent the default link behavior
        event.preventDefault();

        // Get the target element id
        const targetId = link.getAttribute("href").slice(1);

        // Scroll to the target element
        const targetElement = document.getElementById(targetId);
    });
});

// Get the current page URL
const url = window.location.href;

// Get the navigation links
const navLinks = document.querySelectorAll("nav ul li a");


// Loop through the links and set the "active" class on the current page link
navLinks.forEach(link => {
    if (link.href === url) {
        link.classList.add("active");
    } else {
        link.classList.remove("active");
    }
});