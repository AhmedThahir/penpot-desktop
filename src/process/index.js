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
    global.titleBarStyle = 'default';
})}

const launch = () => {
  const mainWindow = new BrowserWindow({
    width: 1300,
    height: 900,
    minWidth: 1240,
    minHeight: 400,
    show: false,
    autoHideMenuBar: true,
    darkTheme: true,
    frame: global.frame,
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
  mainWindow.maximize();
  mainWindow.show();
  mainWindow.loadFile('src/index.html')

  autoUpdater.on('update-downloaded', (event, releaseNotes, releaseName) => {mainWindow.webContents.executeJavaScript(`showUpdateAvailable()`)})
  ipcMain.on('updateApp',  () => {autoUpdater.quitAndInstall()})
  ipcMain.on('restartApp',  () => {app.relaunch(); app.quit()})
  
  if (process.platform === 'darwin') { // Move tabs over so that the traffic light buttons don't overlay the first tab
    setTimeout(() => {
      mainWindow.webContents.executeJavaScript(`document.querySelector("body > div:nth-child(2) > tab-group").shadowRoot.querySelector("div > nav").style.transform = 'translate(80px, 0px)'`) // Use Transform, Left doesn't work
    }, 3025);
  }
  
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
      newWindowEvent.preventDefault(); // When allowing popups for WebViews, anchor links with target blank will open new windows. However, tabs have been setup for this. So we're gonna prevent duplicates from appearing, by preventing popup windows
    });
  }
});