const {app, BrowserWindow, dialog, ipcMain, ipcRenderer, Menu, MenuItem} = require('electron')
const glasstron = require('glasstron')
const {autoUpdater} = require("electron-updater");
const log = require('electron-log');
const path = require('path');
autoUpdater.logger = log;

if (process.platform == 'darwin') {
  app.whenReady().then(() => {
    mainWindow.webContents.executeJavaScript('isMac()')
    global.frame = false;
    global.titleBarStyle = 'hiddenInset';
    global.blurType = 'vibrancy';
})}
else if(process.platform == 'win32'){
  app.whenReady().then(() => {
    global.frame = false;
    global.titleBarStyle = 'hidden';
    global.blurType = 'acrylic'; // Acrylic won't be use here as there is a pully issue: https://github.com/KorbsStudio/glasstron-quick-start#there-is-mouse-latency-on-windows
})}
else{
  app.whenReady().then(() => {
    global.frame = true;
    global.blurType = 'blurbehind';
})}

const launch = () => {
  const mainWindow = new glasstron.BrowserWindow({
    width: 1300,
    height: 900,
    minWidth: 1240,
    minHeight: 400,
    autoHideMenuBar: true,
    darkTheme: true,
    frame: global.frame,
    blur: true,
    blurType: global.blurType,
    titleBarStyle: global.titleBarStyle,
    trafficLightPosition: { x: 10, y: 10 },
    titleBarOverlay: {
      color: '#1f1f1f',
      symbolColor: 'white',
      height: 40,
    },
    webPreferences: {
      preload: path.join(__dirname, "./preload.js"),
      webviewTag: true,
      enableBlinkFeatures: false,
      experimentalFeatures: false,
      sandbox: false, // Breaks "path" module in Preload
      contextIsolation: true,
      nodeIntegration: false
    }
  })

  if (process.platform == 'darwin') {app.whenReady().then(() => {mainWindow.webContents.executeJavaScript('isMac()')})} // Don't maximize window: #13 https://github.com/KorbsStudio/Penpot-Desktop/issues/13#issuecomment-1253246535
  else if(process.platform == 'win32'){app.whenReady().then(() => {mainWindow.webContents.executeJavaScript('isWindows()'); setTimeout(() => {mainWindow.maximize()}, 2850);})}
  else {setTimeout(() => {
    mainWindow.maximize();
  }, 2850)}

  mainWindow.loadFile('src/index.html')
  
  // While the blur looks nice on the splash, it's mostly hidden by the WebView until I can add transparency at some point (was possible in Electron v18 and broke in v19 and up).
  // So to reduce CPU usage, let's disable the blur using Glasstron after about 5 seconds.
  setTimeout(() => {mainWindow.setBlur(false)}, 5000);

  autoUpdater.on('update-downloaded', (event, releaseNotes, releaseName) => {mainWindow.webContents.executeJavaScript(`showUpdateAvailable()`)})
  ipcMain.on('updateApp',  () => {autoUpdater.quitAndInstall()})
  ipcMain.on('restartApp',  () => {app.relaunch(); app.quit();})

  const menu = new Menu()
  menu.append(new MenuItem({
    label: 'Penpot',
      submenu: [
        {
          label: "What's New",
          click: () => {
            mainWindow.webContents.executeJavaScript(`showChangelogs()`)
          }
        },
        {
          label: 'Open Settings',
          accelerator: process.platform === 'darwin' ? 'Cmd+.' : 'Ctrl+.',
          click: () => {
            mainWindow.webContents.executeJavaScript(`
              showSettings()
            `)
          }
        },
        { type: 'separator'},
        { role: 'reload' },
        { role: 'toggleDevTools' },
        { role: 'resetZoom' },
        { role: 'zoomIn' },
        { role: 'zoomOut' },
        { type: 'separator'},
        {
          label: 'Quit',
          accelerator: process.platform === 'darwin' ? 'Cmd+Q' : 'Ctrl+Q',
          hide: true,
          click: () => { app.quit() }
        }
    ],
  }))

  Menu.setApplicationMenu(menu)
}

app.whenReady().then(() => {launch();autoUpdater.checkForUpdatesAndNotify();})

app.on('web-contents-created', function (webContentsCreatedEvent, contents) {
  if (contents.getType() === 'webview') {
    contents.on('new-window', function (newWindowEvent, url) {
      console.log('block');
      newWindowEvent.preventDefault();
    });
  }
});