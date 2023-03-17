const {app, BrowserWindow} = require('electron')
let OS = require('../extra/os')
OS.Icon()

module.exports = {
    create: function () {
        const VoiceChat = new BrowserWindow({
          // Size
          width: 500,
          height: 700,
          minWidth: 375,
          minHeight: 450,
          maxWidth: 650,
          // Theme
          backgroundColor: '#FFF',
          darkTheme: false,
          // Titlebar
          titleBarStyle: global.titleBarStyle,
          trafficLightPosition: { x: 10, y: 12 }, // for macOS
          titleBarOverlay: { // For Windows
            color: '#1f1f1f',
            symbolColor: 'white',
            height: 30,
          },
          // Other Options
          title: "Penpot Desktop Voice Chat - Loading...",
          autoHideMenuBar: true,
          frame: global.frame,
          icon: global.AppIcon,
          x: 64,
          y: 64,
          webPreferences: {
            sandbox: true,
            webviewTag: true
          }
        })
      VoiceChat.loadFile('src/base/voice.html')
    }
}