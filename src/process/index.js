const {app, BrowserWindow} = require('electron')
const logger = require('electron-timber');

function createWindow () {
  const mainWindow = new BrowserWindow({
    width: 600,
    height: 400,
    autoHideMenuBar: true
  })
  mainWindow.loadFile('src/index.html')
}

app.whenReady().then(() => {createWindow()})