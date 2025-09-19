// load-header.js
document.addEventListener('DOMContentLoaded', () => {
  fetch('components/header.html')
    .then(response => response.text())
    .then(html => {
      // Inject header HTML
      document.getElementById('header-container').innerHTML = html;

      // Initialize menu and theme toggle
      if (typeof initMenu === 'function') initMenu();
      if (typeof initTheme === 'function') initTheme();
    })
    .catch(err => console.error('Error loading header:', err));
});

//
//
//
// Load header component dynamically
// document.addEventListener('DOMContentLoaded', () => {
//   fetch('components/header.html')
//     .then(response => response.text())
//     .then(html => {
//       document.getElementById('header-container').innerHTML = html;
      
//       // Optional: re-attach menu JS if needed
//       // e.g., burger menu and theme toggle
//       if (typeof initMenu === 'function') initMenu();
//       if (typeof initTheme === 'function') initTheme();
//     })
//     .catch(err => console.error('Error loading header:', err));
// });


// fetch('components/header.html')
//   .then(response => response.text())
//   .then(data => {
//     document.getElementById('header-placeholder').innerHTML = data;
//     // Load the header JS after insertion
//     const script = document.createElement('script');
//     script.src = 'scripts/header.js';
//     document.body.appendChild(script);
//   });
