// Settings Dropdown
function ToggleSettings() {
    var SettingsUI = document.querySelector(".titlebar-dropdown-menu#settings")
    if (SettingsUI.style.display === "block") {
        SettingsUI.style.display = "none"
    } else {
        SettingsUI.style.display = "block"
    }
}

// Titlebar Buttons (KDE Plasma)
// function MaximizeWindow() {
//     document.querySelector("#plasma-window-is-max").style.display = 'initial'
//     document.querySelector('#plasma-window-is-unmax').style.display = 'none'

//     document.querySelector("#plasma-window-is-max").style.height = '18px'
//     document.querySelector('#plasma-window-is-unmax').style.height = '0px'
// }
// function UnmaximizeWindow() {
//     document.querySelector("#plasma-window-is-max").style.display = 'none'
//     document.querySelector('#plasma-window-is-unmax').style.display = 'initial'

//     document.querySelector("#plasma-window-is-max").style.height = '0px'
//     document.querySelector('#plasma-window-is-unmax').style.height = '18px'
// }

// function ProcessMaximizeWindow() {window.api.send('MaximizeWindow')}
// function ProcessUnmaximizeWindow() {window.api.send('UnmaximizeWindow')}

// Detect if there are no tabs
setTimeout(() => {
    document.querySelector("body > tab-group").shadowRoot.querySelector("div > nav > div.tabs > .active > span.tab-close > button").addEventListener('click', function(){ATWC()})
    document.querySelector("body > tab-group").shadowRoot.querySelector("div > nav > div.buttons > button").addEventListener('click', function(){ATWC()})
}, 2000)
function ATWC() {
    var element =  document.querySelector("body > tab-group").shadowRoot.querySelector("div > nav > div.tabs > *")
    if (typeof(element) != 'undefined' && element != null)
    {
        document.querySelector('.no-tabs-exist').style.display = 'none'
        document.querySelector("body > tab-group").shadowRoot.querySelector("div > nav > div.tabs > .active > span.tab-close > button").addEventListener('click', function(){ATWC()})
    }
    else {
        document.querySelector('.no-tabs-exist').style.display = 'inherit'
        document.querySelector("body > tab-group").shadowRoot.querySelector("div > nav > div.tabs > .active > span.tab-close > button").addEventListener('click', function(){ATWC()})
    }
}

// Splash
function DestroySplash() {
    document.querySelector('splash').style.opacity = '0'
    document.querySelector('tab-group').style.opacity = '1'
    setTimeout(() => {document.querySelector('splash').remove()}, 2000)
}