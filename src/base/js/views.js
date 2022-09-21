function showChangelogs() {
    document.querySelector(".sidebarModals .changelog").style.display = 'inherit'
}
function hideChangelog() {
    document.querySelector(".sidebarModals .changelog").style.display = 'none'
}
function showSettings() {
    document.querySelector("#modalBlur").style.display = 'inherit'; document.querySelector('body > div.modal > div > div.settings').style.display = 'inherit';
}
function showUpdateAvailable() {
    document.querySelector("#modalBlur").style.display = 'inherit'; document.querySelector('.update#available').style.display = 'inherit';
}
function hideUpdateAvailable() {
    document.querySelector("#modalBlur").style.display = 'none'; document.querySelector('.update#available').style.display = 'none';
}
function showWelcome() {
    document.querySelector("#modalBlur").style.display = 'inherit';
    document.querySelector(".modal .welcome").style.display = 'inherit'
}
function hideWelcome() {
    document.querySelector("#modalBlur").style.display = 'none';
    document.querySelector(".modal .welcome").style.display = 'none'
}