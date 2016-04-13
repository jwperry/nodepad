import EventEmitter from 'events';
import { ipcRenderer } from 'electron';

let notes = [];

const store = new EventEmitter();
store.all = () => notes.concat([]);

// store.save = ({ fileName, content }) => {
//   notes = note.concat({ fileName, body, active: false}); // replace list of files with new list
//   store.emit('change', notes); // announce change and pass on new list of files
// };

store.add = ({ fileName, body }) => {
  notes = notes.concat({ fileName, body });
  store.emit('change', notes);
  store.select(fileName);
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

module.exports = store;
