'use strict';

const electron = require('electron');
const app = electron.app;
const BrowserWindow = electron.BrowserWindow;
const fs = require('fs');
const dialog = electron.dialog;

let mainWindow = null;

app.on('ready', () => {
  mainWindow = new BrowserWindow();
  mainWindow.loadURL("file://" + __dirname + "/index.html");
  mainWindow.webContents.openDevTools();
});

const openFile = function(){
  const files = dialog.showOpenDialog(mainWindow, {
    properties: ['openFile'],
    filters: [
      { name: 'Text Files', extensions: ['md', 'markdown', 'txt', 'doc', 'html'] }
    ]
  });

  if (!files) { return; }

  const fileName = files[0];
  const body = fs.readFileSync(fileName).toString();

  app.addRecentDocument(fileName);

  mainWindow.webContents.send('file-opened', { fileName, body });
};

const saveFile = (content) => {
  const fileName = dialog.showSaveDialog(mainWindow, {
    title: 'Save Note',
    properties: ['saveFile'],
    defaultPath: app.getPath('documents'),
    filters: [
      {name: 'Note Files', extension:['md', 'markdown', 'txt', 'doc', 'html'] }
    ]
  });
  fs.writeFileSync(fileName, content);
};

exports.openFile = openFile;
exports.saveFile = saveFile;
