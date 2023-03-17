const {app} = require('electron')
module.exports = {
    NewWindow: function () {
        app.on('web-contents-created', function (webContentsCreatedEvent, contents) {
            if (contents.getType() === 'webview') {
              contents.setWindowOpenHandler(() => ({
                action: "allow",
                overrideBrowserWindowOptions: {
                  width: 1300,
                  height: 900,
                  minWidth: 1240,
                  minHeight: 400,
                  autoHideMenuBar: true,
                  darkTheme: true,
                  frame: global.frame,
                  blur: true,
                  blurType: global.blurType,
                  titleBarStyle: global.titleBarStyle,
                  trafficLightPosition: { x: 10, y: 10 },
                  titleBarOverlay: {
                    color: '#1f1f1f',
                    symbolColor: 'white',
                    height: 40,
                  }
                }
              }))
            }
          }
        )
    }
}
