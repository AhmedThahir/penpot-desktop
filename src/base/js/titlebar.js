var OS="Unknown";
if (navigator.userAgent.indexOf("Win")!=-1) OS="Windows";
if (navigator.userAgent.indexOf("Mac")!=-1) OS="MacOS";
if (navigator.userAgent.indexOf("X11")!=-1) OS="UNIX";
if (navigator.userAgent.indexOf("Linux")!=-1) OS="Linux";

if (navigator.userAgent.indexOf == 'MacOS') {
    document.querySelector('webview#penpot').style.top = 'inherit'
    document.querySelector('webview#penpot').style.bottom = '0px'
    document.querySelector('webview#penpot').style.height = 'calc(100% - 30px)'
    document.querySelector('.titlebar').style.display = 'inherit'
}
else if (navigator.userAgent.indexOf == 'Windows'){
    document.querySelector('webview#penpot').style.top = 'inherit'
    document.querySelector('webview#penpot').style.bottom = '0px'
    document.querySelector('webview#penpot').style.height = 'calc(100% - 30px)'
    document.querySelector('.titlebar').style.display = 'inherit'
}
else {}