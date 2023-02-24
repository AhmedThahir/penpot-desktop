const {app, BrowserWindow, ipcMain, ipcRenderer, Menu, MenuItem} = require('electron')
const isDev = require('electron-is-dev');
const {TitlebarRespect} = require('electron-titlebar-respect')

// Set the appropriate icon for the operating system
if        /* If macOS */    (process.platform == 'darwin')  {global.AppIcon = './src/base/frontend/media/images/penpot-logo/macOS/icon.icns'  }
else if   /* If Windows */  (process.platform == 'win32')   {global.AppIcon = './src/base/frontend/media/images/penpot-logo/Windows/icon.ico' }
else      /* If Linux */                                    {global.AppIcon = './src/base/frontend/media/images/penpot-logo/Linux/icon.png'   }

function createWindow () {
  const mainWindow = new BrowserWindow({
    // Size
    width: 1400,
    height: 900,
    minWidth: 1300,
    minHeight: 600,
    // Theme
    backgroundColor: '#121212',
    darkTheme: true,
    // Titlebar
    titleBarStyle: global.titleBarStyle,
    trafficLightPosition: { x: 10, y: 12 }, // for macOS
    titleBarOverlay: { // For Windows
      color: '#1f1f1f',
      symbolColor: 'white',
      height: 40,
    },
    // Other Options
    autoHideMenuBar: true,
    frame: false,
    icon: global.AppIcon,
    webPreferences: {
      sandbox: true,
      webviewTag: true
    }
  })
  mainWindow.loadFile('src/base/index.html')
  if (isDev) {
    // Use default menu
  } else {
    Menu.setApplicationMenu(null)
  }
  if (process.platform === 'darwin') {setTimeout(() => {
    mainWindow.webContents.executeJavaScript(`document.querySelector("body > tab-group").shadowRoot.querySelector("div > nav").style.left = '74px'`)
    mainWindow.webContents.executeJavaScript(`document.documentElement.style.setProperty('--navBarWF', '110px')`)
    mainWindow.webContents.executeJavaScript(`document.documentElement.style.setProperty('--navBarWS', '350px')`)
  }, 1500)}
  else if (process.platform === 'win32') {setTimeout(() => {
    mainWindow.webContents.executeJavaScript(`document.querySelector(".actions").style.right = '124px'`)
    mainWindow.webContents.executeJavaScript(`document.querySelector(".actions #instance").style.right = '113px'`)
    mainWindow.webContents.executeJavaScript(`document.documentElement.style.setProperty('--navBarWF', '160px')`)
    mainWindow.webContents.executeJavaScript(`document.documentElement.style.setProperty('--navBarWS', '400px')`)
  }, 1500)}
  else if (process.platform === 'linux') {setTimeout(() => {
    mainWindow.webContents.executeJavaScript(`document.querySelector(".linux-titlebar-buttons").style.display = 'inherit'`)
    mainWindow.webContents.executeJavaScript(`document.querySelector(".actions").style.right = '32px'`)
    mainWindow.webContents.executeJavaScript(`document.querySelector(".actions #instance").style.right = '32px'`)
  }, 1500)}
}

app.whenReady().then(() => {
  createWindow()
})

app.on('web-contents-created', function (webContentsCreatedEvent, contents) {
  if (contents.getType() === 'webview') {
    contents.on('new-window', function (newWindowEvent, url) {
      console.log('block');
      newWindowEvent.preventDefault(); // When allowing popups for WebViews, anchor links with target blank will open new windows. However, tabs have been setup for this. So we're gonna prevent duplicates from appearing, by preventing popup windows
    })
  }
})