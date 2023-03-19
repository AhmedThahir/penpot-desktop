const {app} = require('electron')
const {TitlebarRespect} = require('electron-titlebar-respect')
const isDev = require('electron-is-dev')

// Import Files
let MainWindow = require('./window/MainWindow')
let NewWindow = require('./new-window')
let OS = require('./extra/os')
// let CrashReporter = require('./crashreporter')

// Functions
OS.Icon()
NewWindow.NewWindow()
// CrashReporter.CrashReporter()

// Launch
app.whenReady().then(() => {MainWindow.create()})