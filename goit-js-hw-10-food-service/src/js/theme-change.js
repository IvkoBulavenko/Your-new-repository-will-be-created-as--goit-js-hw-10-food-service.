import foodMenu from '../data/menu.json';
import itemsMenu from '../templates/menu.hbs';
import Theme from '../js/theme';
import { refs } from '../js/refs.js';

if (localStorage.getItem('theme') === 'dark-theme') {
  refs.themeSwitch.checked = true;
} else refs.themeSwitch.checked = false;
if (localStorage.getItem('theme') != undefined) {
  addClass(localStorage.getItem('theme'));
}

refs.themeSwitch.addEventListener('change', themeswitchChange);
const markup = itemsMenu(foodMenu);
refs.foodMenu.insertAdjacentHTML('beforeend', markup);

function themeswitchChange(e) {
  const positionSwith = e.target;
  if (positionSwith.checked === true) {
    localStorage.setItem('theme', Theme.DARK);
  } else {
    localStorage.setItem('theme', Theme.LIGHT);
  }
  addClass(localStorage.getItem('theme'));
}

function addClass(nameTheme) {
  document.body.className = nameTheme;
}