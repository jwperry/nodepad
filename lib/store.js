import EventEmitter from 'events';
const electron = require('electron');
const ipcRenderer = electron.ipcRenderer;

let notes = [];

const store = new EventEmitter();

store.display = ({ fileName, body }) => {
  notes = notes.concat({ fileName, body, active: true, new: false});
  store.emit('change', notes);
}

ipcRenderer.on('file-opened', function(event, file)  {
  store.display(file);
});

module.exports = store;
