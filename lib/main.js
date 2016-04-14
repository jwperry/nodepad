'use strict';

const electron = require('electron');
const fs = require('fs');

const app = electron.app;
const dialog = electron.dialog;
const BrowserWindow = electron.BrowserWindow;

let mainWindow = null;

app.on('ready', () => {
  mainWindow = new BrowserWindow();
  mainWindow.loadURL("file://" + __dirname + "/index.html");
  mainWindow.webContents.openDevTools();
});

const openFile = () => {
  const selectedFile = dialog.showOpenDialog(mainWindow, {
    properties: ['openFile'],
    filters: [
      { name: 'Text Files', extensions: ['md', 'markdown', 'txt', 'doc', 'html'] }
    ]
  });

  if (!selectedFile) { return; }

  const fileName = selectedFile[0];
  const body = fs.readFileSync(fileName).toString();
  const stats = fs.statSync(fileName);
  app.addRecentDocument(fileName);

  mainWindow.webContents.send('file-opened', { fileName, body, stats});
};

const saveFile = (newBody) => {
  dialog.showSaveDialog(function (newName) {
    fs.writeFile(newName, newBody, 'utf8', (err) => {
      if (err) { throw err };
      dialog.showMessageBox({
        message: "Note saved.",
        buttons: ["Okay!"]
      });
    });
    mainWindow.webContents.send('file-saved', { newName, newBody });
  });
};

exports.openFile = openFile;
exports.saveFile = saveFile;
