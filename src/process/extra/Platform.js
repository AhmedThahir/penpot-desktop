const {app} = require('electron')
module.exports = {
  Icon: function () {
    // Set the appropriate icon for the operating system
    if        /* If macOS */    (process.platform == 'darwin')  {global.AppIcon = './src/base/frontend/media/images/penpot-logo/macOS/icon.icns'  }
    else if   /* If Windows */  (process.platform == 'win32')   {global.AppIcon = './src/base/frontend/media/images/penpot-logo/Windows/icon.ico' }
    else      /* If Linux */                                    {global.AppIcon = './src/base/frontend/media/images/penpot-logo/Linux/icon.png'   }
  },
  CSS: function () {
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