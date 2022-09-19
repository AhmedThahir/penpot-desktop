const {app, BrowserWindow, dialog, ipcMain, ipcRenderer, Menu, MenuItem} = require('electron')
const {autoUpdater} = require("electron-updater");
const log = require('electron-log');
const path = require('path');
autoUpdater.logger = log;

if (process.platform == 'darwin') {
  app.whenReady().then(() => {
    global.frame = false;
    global.titleBarStyle = 'hiddenInset';
})}
else if(process.platform == 'win32'){
  app.whenReady().then(() => {
    global.frame = false;
    global.titleBarStyle = 'hidden';
})}
else{
  app.whenReady().then(() => {
    global.frame = true;
})}

const launch = () => {
  const mainWindow = new BrowserWindow({
    width: 1200,
    height: 800,
    autoHideMenuBar: true,
    darkTheme: true,
    transparent: true,
    frame: global.frame,
    titleBarStyle: global.titleBarStyle,
    trafficLightPosition: { x: 10, y: 10 },
    titleBarOverlay: {
      color: '#303136',
      symbolColor: 'white',
      height: 30,
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

  mainWindow.loadFile('src/index.html')

  autoUpdater.on('update-downloaded', (event, releaseNotes, releaseName) => {mainWindow.webContents.executeJavaScript(`showUpdateAvailable()`)})
  ipcMain.on('updateApp',  () => {autoUpdater.quitAndInstall()})

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