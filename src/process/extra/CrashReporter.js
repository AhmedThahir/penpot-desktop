const {crashReporter} = require('electron')

module.exports = {
    CrashReporter: function () {
        crashReporter.start({
            productName: 'Penpot Desktop',
            submitURL: 'https://penpotdesktop.bugsplat.com/post/electron/crash.php'
        })
        
        const javaScriptErrorHandler = async (error) => {
            await bugsplat.post(error)
            app.quit()
        }
    }
}