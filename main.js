var app = require('app');
var BrowserWindow = require('browser-window');

var mainWindow = null;

app.on('window-all-closed', function() {
  if (process.platform != 'darwin') {
    app.quit();
  }
});

app.on('ready', function() {
  mainWindow = new BrowserWindow({
    width: 1000,
    height: 640,
    'min-width': 800,
    'min-height': 600
  });

  if (process.env.NODE_ENV === 'dev') {
    mainWindow.loadURL('file://' + __dirname + '/build/dev.html');
  } else {
    mainWindow.loadURL('file://' + __dirname + '/build/index.html');
  }

  mainWindow.on('closed', function() {
    mainWindow = null;
  });
});
