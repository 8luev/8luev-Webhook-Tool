//-- An application made in electron dedicated to delete discord webhooks made by 8luev

const { BrowserWindow, app } = require('electron');
const path = require('path');

function AppWindow() {
    const win = new BrowserWindow({
        icon: path.join(__dirname, './src/style/images/shitta.png'),
        width: 300,
        height: 200,
        resizable: false,
        fullscreenable: false,
        autoHideMenuBar: true,
    });
    win.loadFile('./src/index.html');
};

app.on('ready', () => {
    AppWindow();
});
