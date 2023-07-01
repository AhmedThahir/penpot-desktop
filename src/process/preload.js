const { contextBridge, ipcRenderer} = require("electron")
const path = require('path')

contextBridge.exposeInMainWorld( "api", { send: (channel, data) => {let validChannels = [
  "updateApp",
  "restartApp",
  "MaximizeWindow",
  "UnmaximizeWindow",
  "MinimizeWindow"
]
if (validChannels.includes(channel)) {ipcRenderer.send(channel, data)}}})

delete process.env.ELECTRON_ENABLE_SECURITY_WARNINGS
process.env.ELECTRON_DISABLE_SECURITY_WARNINGS = true