function isWindows() {
  setTimeout(() => {
    document.querySelector('.titlebar').style.display = 'inherit';
    document.querySelector('.titlebar button#drag-me').style.right = '137px';
  }, 1000);
  setTimeout(() => {document.querySelector('.titlebar').style.opacity = '1'}, 2580);
}
function isMac() {
  setTimeout(() => {
    document.querySelector('.titlebar').style.display = 'inherit';
    document.querySelector('.titlebar button#drag-me').style.right = '76px';
  }, 1000);
  setTimeout(() => {document.querySelector('.titlebar').style.opacity = '1'}, 2580);
}