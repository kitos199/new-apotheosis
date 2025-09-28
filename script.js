const themeToggle = document.querySelector('#themeToggle');
const body = document.querySelector('body');
const choice = document.querySelector('.choice');
const closeNav = document.querySelector('.header--nav-bar-close');
const openNav = document.querySelector('.header--nav-open');
const headerNavBarLink = document.querySelector('.header--nav-bar__link');
const choiceBtn = document.querySelector('.choice--link-btn');
const choiceBtnClose = document.querySelector('.choice--btn-close');
const choiceImgReliability = document.querySelector('.choice--img-reliability');
const choiceForm = document.querySelector('.choice--form');
const userName = document.querySelector('#username');
const phone = document.querySelector('#phone');

// Включает выключает тему
themeToggle.addEventListener('change', () => {
  body.classList.toggle('dark');
  choice.classList.toggle('dark');
  openNav.classList.toggle('white');
  closeNav.classList.toggle('white');
  choiceImgReliability.classList.toggle('white');
  localStorage.setItem(
    'theme',
    body.classList.contains('dark') ? 'dark' : 'light'
  );
});

if (localStorage.getItem('theme') === 'dark') {
  body.classList.add('dark');
  choice.classList.add('dark');
  openNav.classList.add('white');
  closeNav.classList.add('white');
  choiceImgReliability.classList.toggle('white');
  themeToggle.checked = true;
}

const addClass = (docName, className) => {
  document.querySelector(docName).classList.add(className);
};

const removeClass = (docName, className) => {
  document.querySelector(docName).classList.remove(className);
};

// Скрывает и открывает меню
openNav.addEventListener('click', () => {
  // document.querySelector('.header--nav-bar').classList.remove('close');
  // document.querySelector('.header--nav-bar').classList.add('open');
  removeClass('.header--nav-bar', 'close');
  addClass('.header--nav-bar', 'open');
});

closeNav.addEventListener('click', () => {
  // document.querySelector('.header--nav-bar').classList.remove('open');
  // document.querySelector('.header--nav-bar').classList.add('close');
  removeClass('.header--nav-bar', 'open');
  addClass('.header--nav-bar', 'close');
});

// При нажатии на связь что бы выходила окно форм для ввода номера и имени
choiceBtn.addEventListener('click', (e) => {
  // document.querySelector('.choice--challenge').classList.add('block');
  // body.classList.add('block');
  addClass('.choice--challenge', 'block');
  addClass('body', 'block');
});

choiceBtnClose.addEventListener('click', () => {
  // document.querySelector('.choice--challenge').classList.remove('block');
  // body.classList.remove('block');
  removeClass('.choice--challenge', 'block');
  removeClass('body', 'block');
});

// phone.value = '8';
choiceForm.addEventListener('submit', (e) => {
  e.preventDefault();
}); 