const {Menu} = require('electron')

module.exports = {
    MainMenu: function () {
        const isMac = process.platform === 'darwin'
        const template = [
            ...(isMac ? [{
            label: app.name,
            submenu: [
                { role: 'about' },
                { type: 'separator' },
                { role: 'hide' },
                { role: 'hideOthers' },
                { role: 'unhide' },
                { type: 'separator' },
                { role: 'quit' }
            ]
            }] : []),
            {
            label: 'File',
            submenu: [
                isMac ? { role: 'close' } : { role: 'quit' }
            ]
            },
            {
            label: 'Edit',
            submenu: [
                { role: 'undo' },
                { role: 'redo' },
                { type: 'separator' },
                { role: 'cut' },
                { role: 'copy' },
                { role: 'paste' },
                ...(isMac ? [
                { role: 'pasteAndMatchStyle' },
                { role: 'delete' },
                { role: 'selectAll' },
                { type: 'separator' },
                {
                    label: 'Speech',
                    submenu: [
                    { role: 'startSpeaking' },
                    { role: 'stopSpeaking' }
                    ]
                }
                ] : [
                { role: 'delete' },
                { type: 'separator' },
                { role: 'selectAll' }
                ])
            ]
            },
            {
            label: 'View',
            submenu: [
                { role: 'reload' },
                { role: 'forceReload' },
                { role: 'toggleDevTools' },
                {
                label: 'Open WebView Developer Tools',
                accelerator: 'CmdOrCtrl+Shift+W',
                click: async () => {if (isDev) {mainWindow.webContents.executeJavaScript(`document.querySelector('.active webview').openDevTools()`)}else {console.log('Not available in production mode.')}}
                },
                { type: 'separator' },
                { role: 'resetZoom' },
                { role: 'zoomIn' },
                { role: 'zoomOut' },
                { type: 'separator' },
                { role: 'togglefullscreen' }
            ]
            },
            {
            label: 'Window',
            submenu: [
                { role: 'minimize' },
                { role: 'zoom' },
                ...(isMac ? [
                { type: 'separator' },
                { role: 'front' },
                { type: 'separator' },
                { role: 'window' }
                ] : [
                { role: 'close' }
                ])
            ]
            },
            {
            role: 'help',
            submenu: [
                {
                    label: 'Penpot Community',
                    click: async () => {
                        const { shell } = require('electron')
                        await shell.openExternal('https://community.penpot.app/')
                    }
                },
                {
                    label: 'Source Code',
                    click: async () => {
                        const { shell } = require('electron')
                        await shell.openExternal('https://sudovanilla.com/code/Korbs/Penpot-Desktop/-/tree/main')
                    }
                }
            ]
            }
        ]

        const menu = Menu.buildFromTemplate(template)
        Menu.setApplicationMenu(menu)
    }
}