// Settings Dropdown
function ToggleSettings() {
    var x = document.querySelector("body > titlebar > div.settings-dropdown")
    if (x.style.display === "block") {
        x.style.display = "none"
    } else {
        x.style.display = "block"
    }
}