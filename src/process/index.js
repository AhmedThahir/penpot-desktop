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
    width: 1200,
    height: 800,
    minWidth: 600,
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
}

app.whenReady().then(() => {
  createWindow()
  // For new power saving option (Future use)
  powerMonitor.on('on-ac', () => { // This is only supported for Windows and macOS
      console.log('The system is on AC Power (charging)');
  })
  powerMonitor.on('on-battery', () => { // This is only supported for Windows and macOS
      console.log('The system is on battery');
  })
})