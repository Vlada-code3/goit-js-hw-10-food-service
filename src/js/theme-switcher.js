
import '../styles.css';

const Theme = {
  LIGHT: 'light-theme',
  DARK: 'dark-theme',
};



const toggleSwitch = document.querySelector('#theme-switch-toggle');
const currentTheme = localStorage.getItem('theme');

if (currentTheme) {
    document.documentElement.setAttribute('data-theme', currentTheme);
  
    if (currentTheme === Theme.DARK) {
        toggleSwitch.checked = true;
         document.body.classList.toggle(Theme.DARK);
    }
}

function switchTheme(e) {
    if (e.target.checked) {
        document.documentElement.setAttribute('data-theme', Theme.DARK);
        localStorage.setItem('theme', Theme.DARK);
         document.body.classList.toggle(Theme.DARK);
    }
    else {        document.documentElement.setAttribute('data-theme', Theme.LIGHT);
          localStorage.setItem('theme', Theme.LIGHT);
           document.body.classList.toggle(Theme.DARK);
    }    
}

toggleSwitch.addEventListener('change', switchTheme, false);