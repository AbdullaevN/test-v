const hamburgerBtn = document.getElementById('hamburger-btn');
const dropdownMenu = document.querySelector('.dropdown-menu');

hamburgerBtn.addEventListener('click', () => {
  hamburgerBtn.parentNode.classList.toggle('active');
  dropdownMenu.classList.toggle('active');
});