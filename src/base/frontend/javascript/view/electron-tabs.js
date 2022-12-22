// Credit to Brrd, the creator of Electron Tabs: https://github.com/brrd/electron-tabs
//////////////////////////////////////////////////////////////////////////////////////
// Import functions from other scripts
import { darkmode } from '../webview/theme-dark.js'

console.log(darkmode)

// LocalStorage - Grab options set by end-user
const hostname = localStorage.getItem('customHostname')
const theme = localStorage.getItem('theme')

// setTimeout is used so we can delay the tab execution by 1 second.
// If we delay by 0.9s or sooner, the following error will occur
// "Uncaught SyntaxError: Decimals with leading zeros are not allowed in strict mode."

setTimeout(() => {
    // Select tab-group
    const tabGroup = document.querySelector("tab-group")

    // Open Home Tab Launch
    const tab = tabGroup.addTab({
      src: "../tabs/home/index.html",
      active: true,
      webviewAttributes: {
        preload: "./frontend/javascript/webview/title.js"
      },
      ready: function (tab) {
        const webview = tab.webview;
        webview.addEventListener('page-title-updated', () => {
          const newTitle = webview.getTitle()
          tab.setTitle(newTitle);
        })
      }
    })

    // New Tab - When "+" is clicked
    tabGroup.setDefaultTab({
      title: "New Page",
      src: "https://design.korbsstudio.com",
      active: true
    })
}, 1000)