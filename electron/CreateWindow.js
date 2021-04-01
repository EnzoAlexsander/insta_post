function createWindow() {
    const win = new BrowserWindow({
        width: 250,
        height: 310,
        frame: false,
        resizable: false,
        fullscreenable: false,
    });

    win.loadFile('../index.html');
    //pra abrir qualquer outra pagina da internet
    //win.loadURL("https://google.com")

    return win;
}

module.exports = createWindow()