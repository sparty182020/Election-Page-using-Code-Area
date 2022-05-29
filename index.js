// Modules to control application life and create native browser window
const { app, BrowserWindow } = require('electron')
const path = require('path')

const createWindow = () => {
    // Create the browser window.
    const mainWindow = new BrowserWindow(
        {
            height: 600,
            width: 800,
            webPreferences: {
                // preload: path.join(__dirname, 'preload.js'),
            },
            frame: false,
            fullscreen: true
        }
    )

    // and load the index.html of the app.
    mainWindow.loadFile('website/html/index.html')

    // mainWindow.webContents.openDevTools()
}


app.whenReady().then(() => {
    createWindow()
    app.on('activate', () => {
        if (BrowserWindow.getAllWindows().length === 0) createWindow()
    })
})

app.on('window-all-closed', () => {
    if (process.platform !== 'darwin') app.quit()
})