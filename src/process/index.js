const {app} = require('electron')
const {autoUpdater} = require("electron-updater")
const isDev = require('electron-is-dev')
const TitlebarRespect = require('electron-titlebar-respect')

// Import Files
let MainWindow = require('./window/MainWindow')
let NewWindow = require('./new-window')
let OS = require('./extra/os')
// let CrashReporter = require('./crashreporter')

// Functions
NewWindow.NewWindow()
OS.Icon()
// CrashReporter.CrashReporter()

// Launch
app.whenReady().then(() => {
    autoUpdater.checkForUpdatesAndNotify()
    MainWindow.create()
})