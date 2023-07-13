const {app, BrowserWindow, ipcMain, ipcRenderer} = require('electron')
const path = require('path')
let AppMenu = require('../extra/Menu')
let Platform = require('../extra/Platform')

module.exports = {
  create: function () {
    mainWindow = new BrowserWindow({
      // Size
      width: 1400,
      height: 900,
      minWidth: 1300,
      minHeight: 600,
      // Theme
      darkTheme: true,
      transparent: global.transparent, // Only enable for macOS to get Vibrancy effect
      vibrancy: "sidebar",
      // Titlebar
      titleBarStyle: 'hidden',
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
        preload: path.join(app.getAppPath(), '/src/process/preload.js'),
        sandbox: false, // Doesn't work with Preload API
        webviewTag: true
      }
    })
    mainWindow.loadFile('src/base/index.html')
    // Traffic Light buttons aren't show in entering fullscreen, scoot tabs over to the left
    if (process.platform == 'darwin') {mainWindow.on('enter-full-screen', (e) => {mainWindow.webContents.executeJavaScript(`document.querySelector("body > tab-group").shadowRoot.querySelector("div > nav").style.left = '0px'`)})}
    if (process.platform == 'darwin') {mainWindow.on('leave-full-screen', (e) => {mainWindow.webContents.executeJavaScript(`document.querySelector("body > tab-group").shadowRoot.querySelector("div > nav").style.left = '74px'`)})}
    // Window Controls for Linux
    ipcMain.on('MaximizeWindow', () => {
      mainWindow.maximize()
      mainWindow.webContents.executeJavaScript(`document.querySelector(".lctb-max-button").style.display = 'none'`)
      mainWindow.webContents.executeJavaScript(`document.querySelector(".lctb-unmax-button").style.display = 'initial'`)
    })
    ipcMain.on('UnmaximizeWindow', () => {
      mainWindow.unmaximize()
      mainWindow.webContents.executeJavaScript(`document.querySelector(".lctb-unmax-button").style.display = 'none'`)
      mainWindow.webContents.executeJavaScript(`document.querySelector(".lctb-max-button").style.display = 'initial'`)
    })
    ipcMain.on('MinimizeWindow', () => {mainWindow.minimize()})
    // Other Functions
    ipcMain.on('ReloadApp', () => {mainWindow.reload(); Platform.CSS(); Platform.Extra()})
    AppMenu.MainMenu()
    Platform.CSS()
    Platform.Extra()
  }
}