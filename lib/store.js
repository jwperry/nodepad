import EventEmitter from 'events';
import CurrentNote from './current-note'
const electron = require('electron');
const ipcRenderer = electron.ipcRenderer;

let notes = [];

const store = new EventEmitter();

<<<<<<< Updated upstream
store.display = ({ fileName, body }) => {
  notes = notes.concat({ fileName, body, active: true});
=======
// store.save = ({ fileName, content }) => {
//   notes = note.concat({ fileName, body, active: false}); // replace list of files with new list
//   store.emit('change', notes); // announce change and pass on new list of files
// };

store.add = ({ fileName, body }) => {
  notes = notes.concat({ fileName, body });
  store.emit('change', notes);
  store.select(fileName);
};

store.new = ({ fileName, body }) => {
  notes = notes.concat({ fileName, body });
  store.emit('change', notes);
  console.log(notes);
  store.select(fileName);
};

store.save = ({ fileName, body }) => {
  
};

store.select = (fileName) => {
  notes = notes.map(note => {
    if (note.fileName === fileName) {
      return Object.assign({}, note, {active: true });
    }
    return Object.assign({}, note, {active: false });
  });
>>>>>>> Stashed changes
  store.emit('change', notes);
}

ipcRenderer.on('file-opened', function(event, file)  {
  store.display(file);
});

module.exports = store;
