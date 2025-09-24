const themeToggle = document.querySelector('#themeToggle');
const body = document.querySelector('body');
const choice = document.querySelector('.choice');
const closeNav = document.querySelector('.header--nav-bar-close');
const openNav = document.querySelector('.header--nav-open');
const headerNavBarLink = document.querySelector('.header--nav-bar__link');
const choiceBtn = document.querySelector('.choice--link-btn')

// Включает выключает тему
themeToggle.addEventListener('change', () => {
  body.classList.toggle('dark');
  choice.classList.toggle('dark');
  openNav.classList.toggle('white')
  closeNav.classList.toggle('white')
  localStorage.setItem(
    'theme',
    body.classList.contains('dark') ? 'dark' : 'light'
  );
});

if (localStorage.getItem('theme') === 'dark') {
  body.classList.add('dark');
  choice.classList.add('dark');
  openNav.classList.add("white")
  closeNav.classList.add("white")
  themeToggle.checked = true;
}


// Скрывает и открывает меню
openNav.addEventListener('click', () => {
  document.querySelector(".header--nav-bar").classList.remove("close")
  document.querySelector('.header--nav-bar').classList.add('open');
  
});

closeNav.addEventListener("click", ()=>{
  document.querySelector(".header--nav-bar").classList.remove("open")
  document.querySelector(".header--nav-bar").classList.add('close')
  
})

// При нажатии на связь что бы выходила окно форм для ввода номера и имени
choiceBtn.addEventListener("click", (e)=>{
  
})