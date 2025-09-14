const themeToggle = document.querySelector('#themeToggle');
const body = document.querySelector('body');
const choice = document.querySelector('.choice')

themeToggle.addEventListener('change', () => {
  body.classList.toggle('dark');
  choice.classList.toggle("dark")
  localStorage.setItem(
    'theme',
    body.classList.contains('dark')  ? "dark" : "light")
});

if (localStorage.getItem('theme') === 'dark') {
  body.classList.add('dark');
  choice.classList.add("dark")
  themeToggle.checked = true;
}
