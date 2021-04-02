const { app } = require('electron');

function App() {
    const win = require('./createWindow.js')
}

app.whenReady().then(App);

app.on('window-all-closed', () => {
    if (process.platform !== 'darwin') {
        app.quit();
    }
});