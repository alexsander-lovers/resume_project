const burger = document.querySelector('.burger');
const menu = document.querySelector('.navigation');

burger.addEventListener('click', () => {
  menu.classList.toggle('navigation--is-open');
  burger.classList.toggle('burger--is-active');
});
