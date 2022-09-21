var htmlElement = document.documentElement;
if (navigator.platform.match(/(Mac)/i)) {
  htmlElement.className = 'Mac'
}
if (navigator.platform.match(/(Linux)/i)) {
  htmlElement.className = 'Linux'
} else {
  htmlElement.className = 'Windows'
}
document.addEventListener('click', function(event) {
  var target = event.target;
  if (target.getAttribute && target.getAttribute('data-action') === 'switch-os') {
    event.preventDefault();
    htmlElement.className = target.getAttribute('data-os')
  }
})