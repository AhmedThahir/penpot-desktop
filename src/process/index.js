const {app} = require('electron')
const {autoUpdater} = require("electron-updater")
const isDev = require('electron-is-dev')
const TitlebarRespect = require('electron-titlebar-respect')
const {MessageChannel, ProcessManager} = require('electron-re')
// ProcessManager.openWindow()

// Import Files
let CrashReporter = require('./extra/CrashReporter')
let MainWindow = require('./window/MainWindow')
let NewWindow = require('./extra/NewWindow')
let Platform = require('./extra/Platform')

// Functions
CrashReporter.CrashReporter()
NewWindow.NewWindow()
Platform.Icon()

// Launch
app.whenReady().then(() => {
    autoUpdater.checkForUpdatesAndNotify()
    MainWindow.create()
})