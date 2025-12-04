document.addEventListener('DOMContentLoaded', () => {
  const menuToggle = document.querySelector('.menu-toggle');
  const navMenu = document.querySelector('header nav ul');

  if (menuToggle && navMenu) {
    // ensure aria state
    menuToggle.setAttribute('aria-expanded', 'false');

    menuToggle.addEventListener('click', () => {
      const open = navMenu.classList.toggle('active');
      menuToggle.classList.toggle('active');
      menuToggle.setAttribute('aria-expanded', open ? 'true' : 'false');
    });

    // close menu when a nav link is clicked (mobile)
    navMenu.addEventListener('click', (e) => {
      if (e.target.tagName === 'A') {
        navMenu.classList.remove('active');
        menuToggle.classList.remove('active');
        menuToggle.setAttribute('aria-expanded', 'false');
      }
    });

    // optional: close when clicking outside
    document.addEventListener('click', (e) => {
      if (!e.target.closest('header')) {
        navMenu.classList.remove('active');
        menuToggle.classList.remove('active');
        menuToggle.setAttribute('aria-expanded', 'false');
      }
    });
  } else {
    console.error('Menu toggle or navigation menu not found.');
  }
});
