const {app, BrowserWindow, ipcMain, ipcRenderer} = require('electron')
const path = require('path')
let AppMenu = require('../menu')

module.exports = {
    create: function () {
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
            preload: path.join(__dirname, '../preload.js'),
            sandbox: false,
            webviewTag: true
          }
        })
        mainWindow.loadFile('src/base/index.html')
        ipcMain.on('MaximizeWindow', () => {mainWindow.maximize()})
        ipcMain.on('UnmaximizeWindow', () => {mainWindow.unmaximize()})
        AppMenu.MainMenu()
        if (process.platform === 'darwin') {setTimeout(() => {
          mainWindow.webContents.executeJavaScript(`document.querySelector("body > tab-group").shadowRoot.querySelector("div > nav").style.left = '74px'`)
          mainWindow.webContents.executeJavaScript(`document.documentElement.style.setProperty('--navBarWF', '140px')`)
          mainWindow.webContents.executeJavaScript(`document.documentElement.style.setProperty('--navBarWS', '350px')`)
        }, 1500)}
        else if (process.platform === 'win32') {setTimeout(() => {
          mainWindow.webContents.executeJavaScript(`document.querySelector(".actions").style.right = '144px'`)
          mainWindow.webContents.executeJavaScript(`document.querySelector(".actions #instance").style.right = '113px'`)
          mainWindow.webContents.executeJavaScript(`document.documentElement.style.setProperty('--navBarWF', '214px')`)
          mainWindow.webContents.executeJavaScript(`document.documentElement.style.setProperty('--navBarWS', '400px')`)
        }, 1500)}
        else if (process.platform === 'linux') {setTimeout(() => {
          mainWindow.webContents.executeJavaScript(`document.querySelector(".linux-titlebar-buttons").style.display = 'inherit'`)
          mainWindow.webContents.executeJavaScript(`document.querySelector(".actions").style.right = '32px'`)
        }, 1500)}
    }
}