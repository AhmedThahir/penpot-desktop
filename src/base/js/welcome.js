function welcome() {
    var z, i, elmnt, file, xhttp;
    z = document.getElementsByTagName("*");
    for (i = 0; i < z.length; i++) {
        elmnt = z[i];
        file = elmnt.getAttribute("say-hello");
        if (file) {
        xhttp = new XMLHttpRequest();
        xhttp.onreadystatechange = function() {
            if (this.readyState == 4) {
            if (this.status == 200) {elmnt.innerHTML = this.responseText;}
            if (this.status == 404) {elmnt.innerHTML = "This component failed to load, try reloading Penpot Desktop.";}
            elmnt.removeAttribute("say-hello");
            welcome();
            }
        }
        xhttp.open("GET", file, true);
        xhttp.send();
        return;
        }
    }
    showWelcome()
}