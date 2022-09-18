const {app, BrowserWindow, dialog, Menu, MenuItem, shell} = require('electron')
const {autoUpdater} = require("electron-updater");
const log = require('electron-log');
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

autoUpdater.on('update-downloaded', (event, releaseNotes, releaseName) => {
  const dialogOpts = {
    type: 'info',
    buttons: ['Restart', 'Later'],
    title: 'Update Ready',
    message: process.platform === 'win32' ? releaseNotes : releaseName,
    detail: 'A new update is ready!'
  }
  dialog.showMessageBox(dialogOpts).then((returnValue) => {if (returnValue.response === 0) autoUpdater.quitAndInstall()})
})

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
      symbolColor: 'white'
    },
    webPreferences: {
      webviewTag: true,
      enableBlinkFeatures: false,
      experimentalFeatures: false,
      sandbox: true,
    }
  })

  mainWindow.loadFile('index.html')

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
              document.querySelector("#modalBlur").style.display = 'inherit'; document.querySelector('body > div.modal > div.settings').style.display = 'inherit';
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