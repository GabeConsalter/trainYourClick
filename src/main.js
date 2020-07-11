const { app, BrowserWindow } = require('electron');

function createWindow () {
	let win = new BrowserWindow({
		webPreferences: { nodeIntegration: true }
	});

	win.loadFile('src/index.html');
	win.maximize();
}
  
app.whenReady().then(createWindow);