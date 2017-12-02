'use strict'

const {app, BrowserWindow} = require('electron')
const path = require('path')
const url = require('url')

let win

function createWindow(){
    // Create Browserwindow
    win = new BrowserWindow({
        width: 800,
        height: 600,
        icon: __dirname + '/assets/img/img-electron-logo.png'
    })

    // Load index page
    win.loadURL(url.format({
        pathname: path.join(__dirname, 'index.html'),
        protocol: 'file',
        slashes: true
    }))

    // Open devtools
    // win.webContents.openDevTools()

    win.on('closed', () => {
        win = null
    })
}

// Run create window function
app.on('ready', createWindow)

// Quit when all windows are closed
app.on('window-all-closed', () => {
    if(process.platform !== 'darwin'){
        app.quit()
    }
})