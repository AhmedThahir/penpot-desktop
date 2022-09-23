webview = document.querySelector('webview')
var penpotEmbed = document.getElementById('penpot');
var changelog = document.getElementById('changelog');

// JavaScript Injection
function inc() {
    setTimeout(() => {
        penpotEmbed.executeJavaScript(`
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
        `
    )}, 2500);
}
inc()

// CSS Injection
penpotEmbed.addEventListener('dom-ready', function () {
    penpotEmbed.insertCSS(`
    /** Move stuff around away from titlebar button overlays (Needed for macOS and Windows) **/
    html.Windows .right-area {margin-right: 174px;}
    html.Windows .dashboard-header {width: calc(100% - 178px);}

    html.Mac .sidebar-team-switch {margin-top: 54px !important;}
    html.Mac .left-area {margin-left: 113px !important;}
    `
)})

// Loading Indicator
onload = () => {
    const loadingWV = document.querySelector('.IndicatorWV')
    const loadstartWV = () => {document.getElementById('IndicatorWV').style.display='flex'}
    const loadstopWV = () => {setTimeout(function(){document.getElementById('IndicatorWV').style.display='none'}, 500);}
    penpotEmbed.addEventListener('did-start-loading', loadstartWV)
    penpotEmbed.addEventListener('did-stop-loading', loadstopWV)
}