const burger = document.querySelector('.burger');
const menu = document.querySelector('.navigation');

burger.addEventListener('click', () => {
  menu.classList.toggle('navigation--is-open');
  burger.classList.toggle('burger--is-active');
});


const buttons = document.querySelectorAll('.button-js');
const closeBtn = document.querySelector('.button-close');
const modal = document.querySelector('.modal');

buttons.forEach(button => {
  button.addEventListener('click', () => {
    modal.style.display = 'flex';
  });
});

closeBtn.addEventListener('click', () => {
  modal.style.display = 'none';
});

window.addEventListener('click', (event) => {
  if (event.target === modal) {
    modal.style.display = 'none';
  }
});

const summary = document.querySelector('.menu-language__title')

summary.addEventListener('click', function(e) {
  const details = this.closest('details');

  if (!details.hasAttribute('open')) {
    details.setAttribute('open', '');
  }

  this.hidden = true;

  e.preventDefault();
});
