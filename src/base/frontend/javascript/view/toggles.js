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
function MaximizeWindow() {
    document.querySelector("#plasma-window-is-max").style.display = 'initial'
    document.querySelector('#plasma-window-is-unmax').style.display = 'none'

    document.querySelector("#plasma-window-is-max").style.height = '18px'
    document.querySelector('#plasma-window-is-unmax').style.height = '0px'
}
function UnmaximizeWindow() {
    document.querySelector("#plasma-window-is-max").style.display = 'none'
    document.querySelector('#plasma-window-is-unmax').style.display = 'initial'

    document.querySelector("#plasma-window-is-max").style.height = '0px'
    document.querySelector('#plasma-window-is-unmax').style.height = '18px'
}

function ProcessMaximizeWindow() {window.api.send('MaximizeWindow')}
function ProcessUnmaximizeWindow() {window.api.send('UnmaximizeWindow')}