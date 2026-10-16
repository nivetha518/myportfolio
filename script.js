
document.querySelectorAll('.nav-links a').forEach(link => {
  link.addEventListener('click', () => {
    console.log('Navigating to:', link.getAttribute('href'));
  });
});

console.log('Nivedha Portfolio loaded successfully!');
