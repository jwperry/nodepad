import EventEmitter from 'events';
import CurrentNote from './current-note'
const electron = require('electron');
const ipcRenderer = electron.ipcRenderer;

let notes = [];

const store = new EventEmitter();

store.display = ({ fileName, body }) => {
  notes = notes.concat({ fileName, body, active: true});
  store.emit('change', notes);
}

ipcRenderer.on('file-opened', function(event, file)  {
  store.display(file);
});

module.exports = store;
