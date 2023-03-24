// LocalStorage - Grab options set by end-user
const Instance = localStorage.getItem('Instance')

// Functions
function NewTab() {
  TabGroup.addTab(
    {
      active: true,
      src: e.url,
      ready: function (tab) {
        const webview = tab.webview
        webview.addEventListener('page-title-updated', () => {
          const newTitle = webview.getTitle()
          tab.setTitle(newTitle)
        })
      }
    }
  )
}

// Tab Group
setTimeout(() => {
  // Select tab-group
  const TabGroup = document.querySelector("tab-group")

  // New Tab - When "+" is clicked
  TabGroup.setDefaultTab({
    src: Instance,
    active: true,
    webviewAttributes: {
      preload: "./frontend/javascript/webview/preload.js",
      allowpopups: true,
    },
    ready: function (tab) {
      const webview = tab.webview
      tab.webview.addEventListener('new-window', (e) => {NewTab()})
      webview.addEventListener('page-title-updated', () => {
        const newTitle = webview.getTitle()
        tab.setTitle(newTitle)
      })
    }
  })

  // Default Tab - On Launch
  const tab = TabGroup.addTab({
    src: Instance,
    active: true,
    webviewAttributes: {
      preload: "./frontend/javascript/webview/preload.js",
      allowpopups: true,
    },
    ready: function (tab) {
      const webview = tab.webview
      tab.webview.addEventListener('new-window', (e) => {NewTab()})
      webview.addEventListener('page-title-updated', () => {
        const newTitle = webview.getTitle()
        tab.setTitle(newTitle)
      })
    }
  })

  // Apply Active WebView Console to App Console
  const webview = document.querySelector("body > tab-group").shadowRoot.querySelector("div > div > webview.visible")
  webview.addEventListener('console-message', (e) => {console.log(e.message)})
}, 1000)