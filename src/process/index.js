const {app, BrowserWindow, ipcMain, ipcRenderer, Menu, MenuItem, powerMonitor} = require('electron')

// Use native titlebar from the OS on Windows and macOS, hide the titlebar completely on Linux
if        /* If macOS */    (process.platform == 'darwin')  {global.TitleBarStyle = 'hiddenInset' }
else if   /* If Windows */  (process.platform == 'win32')   {global.TitleBarStyle = 'hidden'      }
else      /* If Linux */                                    {global.TitleBarStyle = 'default'     }

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
    titleBarStyle: global.TitleBarStyle,
    trafficLightPosition: { x: 10, y: 10 }, // for macOS
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
  if (process.platform === 'linux') {setTimeout(() => {
    mainWindow.webContents.executeJavaScript(`document.querySelector(".linux-titlebar-buttons").style.display = 'inherit'`)
    mainWindow.webContents.executeJavaScript(`document.querySelector(".actions").style.right = '32px'`)
    mainWindow.webContents.executeJavaScript(`document.querySelector(".actions #instance").style.right = '32px'`)
  }, 1500)}
}

app.whenReady().then(() => {
  createWindow()
  // For new power saving option (Future use)
  // powerMonitor.on('on-ac', () => { // This is only supported for Windows and macOS
  //     console.log('The system is on AC Power (charging)');
  // })
  // powerMonitor.on('on-battery', () => { // This is only supported for Windows and macOS
  //     console.log('The system is on battery');
  // })
})

app.on('web-contents-created', function (webContentsCreatedEvent, contents) {
  if (contents.getType() === 'webview') {
    contents.on('new-window', function (newWindowEvent, url) {
      console.log('block');
      newWindowEvent.preventDefault(); // When allowing popups for WebViews, anchor links with target blank will open new windows. However, tabs have been setup for this. So we're gonna prevent duplicates from appearing, by preventing popup windows
    })
  }
})