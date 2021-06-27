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
    // if ( inputValue === true) {
    //    changeThemeDark();
    //    }

    // if (inputValue === false) {
    //    changeThemeLight();
    //     }
    inputValue === true ? changeThemeDark() : changeThemeLight();//заменил старый вариант на тернарник
};
function showLocalStorageValue() {
    const savedValue = localStorage.getItem('position');

    // if (savedValue ==='true') {
    //     changeThemeDark();
    //     input.checked=true;
    // }
    // if (savedValue === 'false') {
    //     changeThemeLight();
    //     input.checked=false;
    // }
    savedValue === 'true' ? (changeThemeDark(), input.checked = true) : (changeThemeLight(), input.checked = false);  //заменил старый вариант на тернарник(предложеный вариант вами(ниже) -не работает)
  
         
    // ********************************************************************************
    // input.checked = Boolean(savedValue)
    // // if (Boolean(savedValue))
    // //     updateTheme(Theme.DARK, Theme.LIGHT)
    // // else updateTheme(Theme.LIGHT,Theme.DARK)

    // Boolean(savedValue) ? updateTheme(Theme.DARK, Theme.LIGHT) :updateTheme(Theme.LIGHT,Theme.DARK); //предложеный вариант в тернарнике

     
};

const foodCardsMurkup=createFoodCards(cards)
menu.insertAdjacentHTML('beforeend',foodCardsMurkup);

function createFoodCards(cards) {
    return cards.map(foodCardTpl).join('');
}