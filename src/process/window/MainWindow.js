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
        preload: path.join(app.getAppPath(), '/src/process/preload.js'),
        sandbox: false, // Doesn't work with Preload API
        webviewTag: true
      }
    })
    mainWindow.loadFile('src/base/index.html')
    if (process.platform == 'linux') {mainWindow.on('maximize', (e) => {mainWindow.webContents.executeJavaScript('MaximizeWindow()')})}
    if (process.platform == 'linux') {mainWindow.on('unmaximize', (e) => {mainWindow.webContents.executeJavaScript('UnmaximizeWindow()')})}
    if (process.platform == 'darwin') {mainWindow.on('enter-full-screen', (e) => {mainWindow.webContents.executeJavaScript(`document.querySelector("body > tab-group").shadowRoot.querySelector("div > nav").style.left = '0px'`)})}
    if (process.platform == 'darwin') {mainWindow.on('leave-full-screen', (e) => {mainWindow.webContents.executeJavaScript(`document.querySelector("body > tab-group").shadowRoot.querySelector("div > nav").style.left = '74px'`)})}
    ipcMain.on('MaximizeWindow', () => {mainWindow.maximize()})
    ipcMain.on('UnmaximizeWindow', () => {mainWindow.unmaximize()})
    AppMenu.MainMenu()
    Platform.CSS()
  }
}