document.addEventListener('DOMContentLoaded', () => {
  const menuToggle = document.querySelector('.menu-toggle');
  const navMenu = document.querySelector('header nav ul');

  if (menuToggle && navMenu) {
    console.log('Menu toggle and navigation menu found.');
    menuToggle.addEventListener('click', () => {
      console.log('Menu toggle clicked.');
      navMenu.classList.toggle('active');
      menuToggle.classList.toggle('active'); // Optional: toggle button appearance
      console.log('Menu toggle active class:', menuToggle.classList.contains('active'));
    });
  } else {
    console.error('Menu toggle or navigation menu not found.');
  }
});
