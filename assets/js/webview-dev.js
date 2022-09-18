webview = document.querySelector('webview')
var penpotEmbed = document.getElementById('penpot');
var changelog = document.getElementById('changelog');


// CSS Injection
penpotEmbed.addEventListener('dom-ready', function () {
    penpotEmbed.insertCSS(`
    html.windows [data-for-os=mac], html.windows [data-for-os=linux] {display: none;}
    html.mac [data-for-os=windows], html.mac [data-for-os=linux] {display: none;}
    html.linux [data-for-os=mac], html.linux [data-for-os=windows] {display: none;}
    `
)})

// JavaScript Detection
function inc() {
    setTimeout(() => {
        penpotEmbed.executeJavaScript(`
        var OS="Unknown";
        if (navigator.userAgent.indexOf("Win")!=-1) OS="Windows";
        if (navigator.userAgent.indexOf("Mac")!=-1) OS="MacOS";
        if (navigator.userAgent.indexOf("X11")!=-1) OS="UNIX";
        if (navigator.userAgent.indexOf("Linux")!=-1) OS="Linux";
    
        if (navigator.userAgent.indexOf == 'MacOS') { // Move away from traffic light buttons
            document.querySelector("#app > section > div.dashboard-sidebar > div > div.sidebar-content > div.sidebar-team-switch").style.marginTop = '54px';
            document.querySelector("#workspace > header > div.left-area").style.marginLeft = '100px'
        }
        else if (navigator.userAgent.indexOf == 'Windows'){ // Move away from titlebar buttons
            document.querySelector("#app > section > div.dashboard-content > header > a").style.marginRight = '150px';
        }
        else {}
        `
    )}, 2500);
    setTimeout(() => {
        inc()
    }, 5000);
}

inc()

// Loading Indicator
onload = () => {
    const loadingWV = document.querySelector('.IndicatorWV')
    const loadingCL = document.querySelector('.IndicatorCL')
  
    const loadstartWV = () => {document.getElementById('IndicatorWV').style.display='flex'}
    const loadstopWV = () => {setTimeout(function(){document.getElementById('IndicatorWV').style.display='none'}, 500);}
  
    const loadstartCL = () => {document.getElementById('IndicatorCL').style.display='flex'}
    const loadstopCL = () => {setTimeout(function(){document.getElementById('IndicatorCL').style.display='none'}, 500);}
  
    penpotEmbed.addEventListener('did-start-loading', loadstartWV)
    penpotEmbed.addEventListener('did-stop-loading', loadstopWV)
    changelog.addEventListener('did-start-loading', loadstartCL)
    changelog.addEventListener('did-stop-loading', loadstopCL)
  }