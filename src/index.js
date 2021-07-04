import foodCardTpl from './templates/menu.hbs';
import cards from './menu.json';
import {changeThemeDark, changeThemeLight,Theme} from './js/Theme';
import './sass/main.scss';


const input = document.querySelector('.theme-switch__toggle');
const menu = document.querySelector('.js-menu');
document.body.classList.add(Theme.LIGHT);
input.addEventListener('change', inputOnChange);

showLocalStorageValue();

function inputOnChange(e) {

    const inputValue = e.target.checked;
    localStorage.setItem('position', inputValue);
   
    inputValue === true ? changeThemeDark() : changeThemeLight();//заменил старый вариант на тернарник
};
function showLocalStorageValue() {
    const savedValue = localStorage.getItem('position');

   
    savedValue === 'true' ? (changeThemeDark(), input.checked = true) : (changeThemeLight(), input.checked = false); 
};

const foodCardsMurkup=createFoodCards(cards)
menu.insertAdjacentHTML('beforeend',foodCardsMurkup);

function createFoodCards(cards) {
    return cards.map(foodCardTpl).join('');
}