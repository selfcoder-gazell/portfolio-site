fetch('components/header.html')
  .then(response => response.text())
  .then(data => {
    document.getElementById('header-placeholder').innerHTML = data;
    // Load the header JS after insertion
    const script = document.createElement('script');
    script.src = 'scripts/header.js';
    document.body.appendChild(script);
  });
