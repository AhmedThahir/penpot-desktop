// Credit to Brrd, the creator of Electron Tabs: https://github.com/brrd/electron-tabs
//////////////////////////////////////////////////////////////////////////////////////
// Import functions from other scripts
// import { darkmode } from '../webview/theme-dark.js'

// LocalStorage - Grab options set by end-user
const hostname = localStorage.getItem('customHostname')
const theme = localStorage.getItem('theme')

// setTimeout is used so we can delay the tab execution by 1 second.
// If we delay by 0.9s or sooner, the following error will occur
// "Uncaught SyntaxError: Decimals with leading zeros are not allowed in strict mode."
setTimeout(() => {
  // Select tab-group
  const tabGroup = document.querySelector("tab-group")

  // New Tab - When "+" is clicked
  tabGroup.setDefaultTab({
    src: hostname,
    active: true,
    webviewAttributes: {
      preload: "./frontend/javascript/webview/preload.js",
      allowpopups: true,
    },
    ready: function (tab) {
      const webview = tab.webview;
      tab.webview.addEventListener('new-window', (e) => {
        tabGroup.addTab(
          {
            active: true,
            src: e.url,
            ready: function (tab) {
              const webview = tab.webview;
              webview.addEventListener('page-title-updated', () => {
                const newTitle = webview.getTitle();
                tab.setTitle(newTitle)
              })
            }
          }
        )
      })
      webview.addEventListener('page-title-updated', () => {
        const newTitle = webview.getTitle()
        tab.setTitle(newTitle)
      })
    }
  })

  // Default Tab - On Launch
  const tab = tabGroup.addTab({
    src: hostname,
    active: true,
    webviewAttributes: {
      preload: "./frontend/javascript/webview/preload.js",
      allowpopups: true,
    },
    ready: function (tab) {
      const webview = tab.webview;
      tab.webview.addEventListener('new-window', (e) => {
        tabGroup.addTab(
          {
            active: true,
            src: e.url,
            ready: function (tab) {
              const webview = tab.webview;
              webview.addEventListener('page-title-updated', () => {
                const newTitle = webview.getTitle();
                tab.setTitle(newTitle)
              })
            }
          }
        )
      })
      webview.addEventListener('page-title-updated', () => {
        const newTitle = webview.getTitle()
        tab.setTitle(newTitle)
      })
    }
  })  
}, 1000)