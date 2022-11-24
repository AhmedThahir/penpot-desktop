/** Theme Setting **/
let theme = localStorage.getItem('theme');

if (theme == null) {
  setTheme('Dark'); // Use Dark as default theme if not set
} else {
  setTheme(theme);
}

function setTheme(theme) {
  localStorage.setItem('theme', theme);
  document.querySelector("#reload-required").removeAttribute('hidden')
}

/** Detect Changes on the Selector **/
function changeTheme(event) {
    if (event.target.value === "Dark") {
        localStorage.setItem('theme', 'Dark');
        document.querySelector("body > div.modal > div:nth-child(1) > div.settings > div.modal-footer").style.display = 'flex';
    }
    else if (event.target.value === "Light") {
        localStorage.setItem('theme', 'Light');
        document.querySelector("body > div.modal > div:nth-child(1) > div.settings > div.modal-footer").style.display = 'flex';
    }
}