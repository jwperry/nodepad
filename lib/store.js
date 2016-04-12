import EventEmitter from 'events';
import { ipcRenderer } from 'electron';
import CurrentNote from './current-note'

let notes = [];

const store = new EventEmitter();

store.display = ({ fileName, body }) => {
  notes = notes.concat({ fileName, body, active: true});
  store.emit('change', notes);
}

ipcRenderer.on('file-opened', (event, file) => {
  store.display(file);
});

export default store;
