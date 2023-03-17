const {app} = require('electron')
module.exports = {
    Icon: function () {
        // Set the appropriate icon for the operating system
        if        /* If macOS */    (process.platform == 'darwin')  {global.AppIcon = './src/base/frontend/media/images/penpot-logo/macOS/icon.icns'  }
        else if   /* If Windows */  (process.platform == 'win32')   {global.AppIcon = './src/base/frontend/media/images/penpot-logo/Windows/icon.ico' }
        else      /* If Linux */                                    {global.AppIcon = './src/base/frontend/media/images/penpot-logo/Linux/icon.png'   }
    }
}