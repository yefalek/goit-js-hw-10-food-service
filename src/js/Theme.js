export const changeThemeDark = ()=> {
    document.body.classList.remove(Theme.LIGHT);
    document.body.classList.add(Theme.DARK);
};

 export const changeThemeLight= ()=> {
    document.body.classList.remove(Theme.DARK);
    document.body.classList.add(Theme.LIGHT); 
};
 export const Theme = {
  LIGHT: 'light-theme',
  DARK: 'dark-theme',
};