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

  app.addRecentDocument(fileName);

  mainWindow.webContents.send('file-opened', { fileName, body});
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
