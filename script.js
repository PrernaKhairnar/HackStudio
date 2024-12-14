// JavaScript code for your HackStudio website

// Function to toggle the mobile navigation menu
function toggleMenu() {
  const navList = document.querySelector('.nav-list');
  navList.classList.toggle('active');
}

// Add a click event listener to the burger menu icon
const burgerMenu = document.querySelector('.burger');
burgerMenu.addEventListener('click', toggleMenu);

// Smooth scrolling for navigation links
const navLinks = document.querySelectorAll('.nav-list a');
navLinks.forEach(function(navLink) {
  navLink.addEventListener('click', function(event) {
    event.preventDefault();
    const targetId = this.getAttribute('href').substring(1);
    const targetElement = document.getElementById(targetId);
    window.scrollTo({
      top: targetElement.offsetTop,
      behavior: 'smooth'
    });
    // Close the mobile menu after clicking a link (if it's open)
    const navList = document.querySelector('.nav-list');
    if (navList.classList.contains('active')) {
      toggleMenu();
    }
  });
});

// You can add more JavaScript functionality as needed.
