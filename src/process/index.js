
const {app, BrowserWindow, dialog, ipcMain, ipcRenderer, Menu, MenuItem} = require('electron')
const {autoUpdater} = require("electron-updater");
const log = require('electron-log');
const path = require('path');
autoUpdater.logger = log;

if (process.platform == 'darwin') {
  global.titleBarStyle = 'hiddenInset';
}
else if(process.platform == 'win32'){
  global.titleBarStyle = 'hidden';
}
else{
  global.titleBarStyle = 'default';
}

const launch = () => {
  const mainWindow = new BrowserWindow({
    width: 1300,
    height: 900,
    minWidth: 1240,
    minHeight: 400,
    show: false,
    autoHideMenuBar: true,
    darkTheme: true,
    frame: false,
    titleBarStyle: global.titleBarStyle,
    trafficLightPosition: { x: 10, y: 10 },
    titleBarOverlay: {
      color: '#1f1f1f',
      symbolColor: 'white',
      height: 40,
    },
    webPreferences: {
      webviewTag: true,
      enableBlinkFeatures: false,
      experimentalFeatures: false,
      sandbox: true,
      contextIsolation: true,
      nodeIntegration: false
    }
  })
  mainWindow.maximize();
  mainWindow.show();
  mainWindow.loadFile('src/index.html')
  
  autoUpdater.on('update-downloaded', (event, releaseNotes, releaseName) => {mainWindow.webContents.executeJavaScript(`document.querySelector("#available").style.opacity = '1'; setTimeOut(() => {document.querySelector("#available").style.opacity = '0'}, 5000)`)})
  
  if (process.platform === 'darwin') {setTimeout(() => {mainWindow.webContents.executeJavaScript(`document.querySelector("body > div:nth-child(2) > tab-group").shadowRoot.querySelector("div > nav").style.paddingLeft = '80px'`)}, 1500)}
  if (process.platform === 'win32') {setTimeout(() => {mainWindow.webContents.executeJavaScript(`document.querySelector("#available").style.right = '137px'`)}, 1500)}
  if (process.platform === 'linux') {setTimeout(() => {mainWindow.webContents.executeJavaScript(`document.querySelector(".linux-titlebar-buttons").style.display = 'inherit'`)}, 1500)}
  
  const menu = new Menu()
  menu.append(new MenuItem({
    label: 'Penpot',
      submenu: [
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
      newWindowEvent.preventDefault(); // When allowing popups for WebViews, anchor links with target blank will open new windows. However, tabs have been setup for this. So we're gonna prevent duplicates from appearing, by preventing popup windows
    });
  }
});