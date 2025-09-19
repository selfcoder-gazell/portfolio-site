
// theme.js
function initTheme() {
  const toggleDesktop = document.getElementById('theme-toggle');
  const toggleMobile = document.getElementById('theme-toggle-mobile');

  if (!toggleDesktop || !toggleMobile) return; // safety check

  function toggleTheme() {
    document.body.classList.toggle('dark-mode');
    const isDark = document.body.classList.contains('dark-mode');

    const icon = isDark
      ? `<svg class="icon-moon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
          <path d="M21 12.79A9 9 0 1111.21 3a7 7 0 009.79 9.79z" stroke="currentColor" stroke-width="2" fill="none"/>
        </svg>`
      : `<svg class="icon-sun" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
          <circle cx="12" cy="12" r="5" stroke="currentColor" stroke-width="2" fill="none"/>
          <line x1="12" y1="1" x2="12" y2="3" stroke="currentColor" stroke-width="2"/>
          <line x1="12" y1="21" x2="12" y2="23" stroke="currentColor" stroke-width="2"/>
          <line x1="4.22" y1="4.22" x2="5.64" y2="5.64" stroke="currentColor" stroke-width="2"/>
          <line x1="18.36" y1="18.36" x2="19.78" y2="19.78" stroke="currentColor" stroke-width="2"/>
          <line x1="1" y1="12" x2="3" y2="12" stroke="currentColor" stroke-width="2"/>
          <line x1="21" y1="12" x2="23" y2="12" stroke="currentColor" stroke-width="2"/>
          <line x1="4.22" y1="19.78" x2="5.64" y2="18.36" stroke="currentColor" stroke-width="2"/>
          <line x1="18.36" y1="5.64" x2="19.78" y2="4.22" stroke="currentColor" stroke-width="2"/>
        </svg>`;

    // Update all theme toggle buttons
    document.querySelectorAll('.theme-toggle').forEach(btn => {
      btn.innerHTML = icon;
    });
  }

  toggleDesktop.addEventListener('click', toggleTheme);
  toggleMobile.addEventListener('click', toggleTheme);
}


//
//
//
// function initTheme() {
//   const toggleDesktop = document.getElementById('theme-toggle');
//   const toggleMobile = document.getElementById('theme-toggle-mobile');

//   function toggleTheme() {
//     document.body.classList.toggle('dark-mode');
//     const isDark = document.body.classList.contains('dark-mode');
//     const icon = isDark ? `
//       <svg class="icon-moon" ...>...</svg>` : `
//       <svg class="icon-sun" ...>...</svg>`;
//     document.querySelectorAll('.theme-toggle').forEach(btn => {
//       btn.innerHTML = icon;
//     });
//   }

//   toggleDesktop.addEventListener('click', toggleTheme);
//   toggleMobile.addEventListener('click', toggleTheme);
// }



// Handles dark/light mode toggle with sun/moon SVG
//const toggleDesktop = document.getElementById('theme-toggle');
//const toggleMobile = document.getElementById('theme-toggle-mobile');

// function toggleTheme() {
//   document.body.classList.toggle('dark-mode');
//   const isDark = document.body.classList.contains('dark-mode');
//   const icon = isDark ? `
//     <svg class="icon-moon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
//       <path d="M21 12.79A9 9 0 1111.21 3a7 7 0 009.79 9.79z" 
//             stroke="currentColor" stroke-width="2" fill="none"/>
//     </svg>` : `
//     <svg class="icon-sun" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
//       <circle cx="12" cy="12" r="5" stroke="currentColor" stroke-width="2" fill="none"/>
//       <line x1="12" y1="1" x2="12" y2="3" stroke="currentColor" stroke-width="2"/>
//       <line x1="12" y1="21" x2="12" y2="23" stroke="currentColor" stroke-width="2"/>
//       <line x1="4.22" y1="4.22" x2="5.64" y2="5.64" stroke="currentColor" stroke-width="2"/>
//       <line x1="18.36" y1="18.36" x2="19.78" y2="19.78" stroke="currentColor" stroke-width="2"/>
//       <line x1="1" y1="12" x2="3" y2="12" stroke="currentColor" stroke-width="2"/>
//       <line x1="21" y1="12" x2="23" y2="12" stroke="currentColor" stroke-width="2"/>
//       <line x1="4.22" y1="19.78" x2="5.64" y2="18.36" stroke="currentColor" stroke-width="2"/>
//       <line x1="18.36" y1="5.64" x2="19.78" y2="4.22" stroke="currentColor" stroke-width="2"/>
//     </svg>`;
//   document.querySelectorAll('.theme-toggle').forEach(btn => {
//     btn.innerHTML = icon;
//   });
// }

// toggleDesktop.addEventListener('click', toggleTheme);
// toggleMobile.addEventListener('click', toggleTheme);
