import EventEmitter from 'events';
import { ipcRenderer } from 'electron';

let notes = [];

const store = new EventEmitter();
store.all = () => notes.concat([]);

store.add = ({ fileName, body }) => {
  notes = notes.concat({ fileName, body });
  store.emit('change', notes);
  store.select(fileName);
};

store.new = ({ fileName, body }) => {
  notes = notes.concat({ fileName, body });
  store.emit('change', notes);
  store.select(fileName);
};

store.save = (file) => {
  notes = notes.map(note => {
    if(note.active) {
      note.body = file.newBody;
      note.fileName = file.newName;
    }
    debugger;
    return note;
  });


  store.emit('change', notes);
  debugger;
};

store.select = (fileName) => {
  notes = notes.map(note => {
    if (note.fileName === fileName) {
      return Object.assign({}, note, {active: true });
    }
    return Object.assign({}, note, {active: false });
  });
  store.emit('change', notes);
};

ipcRenderer.on('file-opened', function(event, file)  {
  store.add(file);
});

ipcRenderer.on('file-saved', function(event, file)  {
  store.save(file);
});

module.exports = store;
