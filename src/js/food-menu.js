import menuTemplate from '../templates/menu.hbs';
import menuData from '../menu.json'

const foodMenu = menuTemplate(menuData);

const menuRef = document.querySelector('.js-menu');

menuRef.insertAdjacentHTML('beforeend', foodMenu)

