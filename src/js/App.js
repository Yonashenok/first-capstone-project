const mobileMenu = document.querySelector('.mobile-menu');
const showMenu = document.querySelector('.nav-menu ');
const crossMenu = document.querySelector('.cross');
const humbergerMenu = document.querySelector('.hemberger');
const scrollSection = document.querySelectorAll('.scroll');
const mobileMenuHandler = () => {
  showMenu.classList.toggle('hidden');
  showMenu.classList.toggle('hidden-m');
  crossMenu.classList.toggle('hidden');
  crossMenu.classList.toggle('hidden-m');
  humbergerMenu.classList.toggle('hidden');
  humbergerMenu.classList.toggle('hidden-m');
};
scrollSection.forEach((link) => {
  link.addEventListener('click', (e) => {
    e.preventDefault();
    if (e.target.classList.contains('hover-effect')) {
      const id = e.target.getAttribute('href');
      document
        .querySelector(id)
        .scrollIntoView({ behavior: 'smooth', inline: 'nearest' });
    }
    mobileMenuHandler();
  });
});
mobileMenu.addEventListener('click', mobileMenuHandler);
