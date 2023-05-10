const {app, Menu} = require('electron')
let Platform = require('./Platform')

module.exports = {
    MainMenu: function () {
        const template = [
            ...(process.platform === 'darwin' ? [{
            label: app.name,
            submenu: [
                { role: 'about' },
                { type: 'separator' },
                { role: 'services' },
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
                {
                    label: "Close Tab",
                    accelerator: "CmdOrCtrl+W",
                    onclick: () => {
                        mainWindow.webContents.executeJavaScript(`document.querySelector("body > tab-group").shadowRoot.querySelector(".active .tab-close").click()`)
                    }
                }
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
                ...(process.platform === 'darwin' ? [
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
                {
                label: 'reload',
                accelerator: 'CmdOrCtrl+R',
                click: async () => {
                    mainWindow.webContents.executeJavaScript(`document.querySelector("body > tab-group").shadowRoot.querySelector(".active webview").reload()`)
                }
                },
                { role: 'forceReload' },
                { role: 'toggleDevTools' },
                {
                label: 'Open WebView Developer Tools',
                accelerator: 'CmdOrCtrl+Shift+D',
                click: async () => {
                    if (process.env.NODE_ENV === "development") {
                        mainWindow.webContents.executeJavaScript(`document.querySelector("body > tab-group").shadowRoot.querySelector(".active webview").openDevTools()`)
                    } 
                    if (process.env.NODE_ENV === "production") {
                        console.log('Opening the WebView Developer Tools is not available in production.')
                    }
                }},
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
                ...(process.platform === 'darwin' ? [
                { type: 'separator' },
                { role: 'front' },
                { type: 'separator' },
                {
                    role: 'close',
                    accelerator: "CmdOrCtrl+Shift+W"
                }
                ] : [
                {
                    role: 'close',
                    accelerator: "CmdOrCtrl+Shift+W"
                }
                ])
            ]
            },
            {
            role: 'help',
            submenu: [
                {
                    label: 'User Guide',
                    click: async () => {
                        const { shell } = require('electron')
                        await shell.openExternal('https://help.penpot.app/user-guide/')
                    }
                },
                {
                    label: 'FAQ',
                    click: async () => {
                        const { shell } = require('electron')
                        await shell.openExternal('https://help.penpot.app/faqs')
                    }
                },
                {
                    label: 'Learn to Self-host',
                    click: async () => {
                        const { shell } = require('electron')
                        await shell.openExternal('https://penpot.app/self-host')
                    }
                },
                {
                    label: 'Penpot Community',
                    click: async () => {
                        const { shell } = require('electron')
                        await shell.openExternal('https://community.penpot.app/')
                    }
                },
                { type: 'separator'},
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