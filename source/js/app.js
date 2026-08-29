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

const swiper = new Swiper('.swiper', {
  spaceBetween: 20,
  speed: 1000,
  loop: true,
  autoplay: {
    delay: 5000,
  },
});

// const stack = document.querySelector('.card-stack');
// const cards = Array.from(stack.children);
// const nextBtn = document.querySelector('.next-btn');

// const progressFill = document.querySelector('.progress-fill');
// const progressText = document.querySelector('.progress-text');

// // Общее количество карт
// const totalCards = cards.length;
// // Счётчик, какую карту по счёту мы сейчас смотрим (начиная с 1)
// let currentStep = 1;

// function updateStack() {
//   cards.forEach((card, index) => {
//     card.style.setProperty('--i', index);
//     card.style.pointerEvents = index === 0 ? 'auto' : 'none';
//   });
// // Расчет и обновление прогресса
//   const percentage = Math.round((currentStep / totalCards) * 100);
//   progressFill.style.width = `${percentage}%`;
//   progressText.textContent = `Загрузка: ${percentage}%`;
// }

// nextBtn.addEventListener('click', () => {
//   const topCard = cards[0];

//   // Анимация ухода верхней карты
//   topCard.style.transform = 'translateY(-150px) scale(0.8)';
//   topCard.style.opacity = '0';

//   // Увеличиваем шаг. Если дошли до конца — сбрасываем на 1
//   currentStep = currentStep < totalCards ? currentStep + 1 : 1;

//   setTimeout(() => {
//     // Перемещаем карту в конец массива и в конец DOM
//     cards.push(cards.shift());
//     stack.appendChild(topCard);
//     // Обновляем визуальное состояние и прогресс
//     updateStack();
//   }, 300);
// });

// // Первоначальный расчет при старте (покажет 25% для 4 карт)
// updateStack();
