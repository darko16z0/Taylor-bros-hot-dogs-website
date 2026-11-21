// script.js - hamburger menu for mobile navigation

// Grab the nav and the button that opens it
const siteNav = document.querySelector('.site-nav');
const navToggle = document.querySelector('.nav-toggle');

// Open or close the menu when the button is clicked
navToggle.addEventListener('click', function () {
  // The .nav-open class tells the CSS to slide the menu open
  const isOpen = siteNav.classList.toggle('nav-open');

  // Swap the icon: X when open, three lines when closed
  navToggle.textContent = isOpen ? '✕' : '☰';

  // Let screen readers know if the menu is open
  navToggle.setAttribute('aria-expanded', isOpen);
});
