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
  removeClass('.header--nav-bar', 'close');
  addClass('.header--nav-bar', 'open');
});

closeNav.addEventListener('click', () => {
  removeClass('.header--nav-bar', 'open');
  addClass('.header--nav-bar', 'close');
});

// При нажатии на связь что бы выходила окно форм для ввода номера и имени
choiceBtn.addEventListener('click', (e) => {
  setTimeout(() => {
    addClass('.choice--challenge', 'block');
    addClass('body', 'block');
  }, 10);
});

// Для закрытия окна форм
function closeBtn(btn) {
  if (btn.className === 'choice--btn-close') {
    btn.addEventListener('click', () => {
      removeClass('.choice--challenge', 'block');
      removeClass('body', 'block');
      userName.value = '';
      phone.value = '';
    });
  } else {
    btn.addEventListener('click', () => {
      removeClass('body', 'block');
      document.querySelector('.successful-messge').innerHTML = '';
    });
  }
}
closeBtn(choiceBtnClose);
// События на от правку формы и проверку телефона

function validationNumber(phone) {
  const reg = /^((8|\+7)[\- ]?)?(\(?\d{3}\)?[\- ]?)?[\d\- ]{7,10}$/;
  const successful = ` <div class="successful-messge">
<h3 class="successful-text">Спасибо, мы с вами скоро свяжемся</h3>
<img class="successful--btn-close" src="img/Х.png" alt="Закрыть" />
</div>`;
  if (reg.test(phone) && phone.length === 11) {
    body.insertAdjacentHTML('afterbegin', successful);
    removeClass('.choice--challenge', 'block');
    setTimeout(() => {
      addClass('.successful-messge', 'show');
    }, 10);
    closeBtn(document.querySelector('.successful--btn-close'));
    let contacts;
    return (contacts = {
      name: userName.value,
      phone: phone,
    });
  } else {
    console.log('error');
    return null;
  }
}

choiceForm.addEventListener('submit', (e) => {
  e.preventDefault();
  const objContacts = validationNumber(phone.value);

  if (objContacts) {
    fetch('http://localhost:3000/contacts', {
      method: 'POST',
      body: JSON.stringify(objContacts),
      headers: {
        'Content-type': 'application/json',
      },
    })
      .then((respons) => {
        userName.value = '';
        phone.value = '';
        setTimeout(() => {
          removeClass('body', 'block');
          document.querySelector('.successful-messge')?.remove();
        }, 3000);
        return respons.json();
      })
      .catch((data) => {
        alert('По пробуйте ещё');
      });
  } else {
    alert('Проверьте данные');
  }
});
