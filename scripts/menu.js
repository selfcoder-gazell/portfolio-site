// Handles burger menu + overlay interactions
const burger = document.querySelector('.burger');
const sideMenu = document.querySelector('.side-menu');
const overlay = document.querySelector('.overlay');
const links = sideMenu.querySelectorAll('a');

function openMenu() {
  sideMenu.classList.add('open');
  overlay.style.display = 'block';
  burger.classList.add('open');
}

function closeMenu() {
  sideMenu.classList.remove('open');
  overlay.style.display = 'none';
  burger.classList.remove('open');
}

// Toggle menu when burger is clicked
burger.addEventListener('click', () => {
  sideMenu.classList.contains('open') ? closeMenu() : openMenu();
});

// Close menu when clicking overlay
overlay.addEventListener('click', closeMenu);

// Close menu when clicking a nav link
links.forEach(link => link.addEventListener('click', closeMenu));
