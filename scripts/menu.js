// menu.js
function initMenu() {
  const burger = document.querySelector('.burger');
  const sideMenu = document.querySelector('.side-menu');
  const overlay = document.querySelector('.overlay');
  const links = sideMenu ? sideMenu.querySelectorAll('a') : [];

  if (!burger || !sideMenu || !overlay) return; // safety check

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
    if (sideMenu.classList.contains('open')) {
      closeMenu();
    } else {
      openMenu();
    }
  });

  // Close menu on overlay click
  overlay.addEventListener('click', closeMenu);

  // Close menu when clicking a link
  links.forEach(link => link.addEventListener('click', closeMenu));
}


// menu.js
// function initMenu() {
//   const burger = document.querySelector('.burger');
//   const sideMenu = document.querySelector('.side-menu');
//   const overlay = document.querySelector('.overlay');
//   const links = sideMenu.querySelectorAll('a');

//   function openMenu() {
//     sideMenu.classList.add('open');
//     overlay.style.display = 'block';
//     burger.classList.add('open');
//   }

//   function closeMenu() {
//     sideMenu.classList.remove('open');
//     overlay.style.display = 'none';
//     burger.classList.remove('open');
//   }

//   burger.addEventListener('click', () => {
//     if (sideMenu.classList.contains('open')) {
//       closeMenu();
//     } else {
//       openMenu();
//     }
//   });

//   overlay.addEventListener('click', closeMenu);
//   links.forEach(link => link.addEventListener('click', closeMenu));
// }
//
//
//
//





// Handles burger menu + overlay interactions
// const burger = document.querySelector('.burger');
// const sideMenu = document.querySelector('.side-menu');
// const overlay = document.querySelector('.overlay');
// const links = sideMenu.querySelectorAll('a');

// function openMenu() {
//   sideMenu.classList.add('open');
//   overlay.style.display = 'block';
//   burger.classList.add('open');
// }

// function closeMenu() {
//   sideMenu.classList.remove('open');
//   overlay.style.display = 'none';
//   burger.classList.remove('open');
// }

// Toggle menu when burger is clicked
// burger.addEventListener('click', () => {
//   sideMenu.classList.contains('open') ? closeMenu() : openMenu();
// });

// Close menu when clicking overlay
//overlay.addEventListener('click', closeMenu);

// Close menu when clicking a nav link
//links.forEach(link => link.addEventListener('click', closeMenu));
