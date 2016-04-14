import EventEmitter from 'events';
import { ipcRenderer } from 'electron';
import electron from 'electron';
import { remote } from 'electron';
const { getLastMod } =  remote.require(`${__dirname}/main`);

let notes = [];

const store = new EventEmitter();
store.all = () => notes.concat([]);

store.add = ({ fileName, body, lastMod }) => {
  notes = notes.concat({ fileName: fileName, body: body, lastMod: lastMod });
  store.emit('change', notes);
  store.select(fileName);
};

store.new = ({ fileName, body }) => {
  removeEmptyNotes();
  notes = notes.concat({ fileName, body, lastMod: 1 });
  store.emit('change', notes);
  store.select(fileName);
};

store.save = (file) => {
  notes = notes.map(note => {
    if(note.active) {
      note.body = file.newBody;
      note.fileName = file.newName;
      note.lastMod = getLastMod(file.newName);
    }
    return note;
  });
  store.emit('change', notes);
};

store.update = ( note ) => {
  console.log( note );
  debugger;
  return note;
};

store.select = (fileName) => {
  if(fileName !== "New Note"){ removeEmptyNotes(); }
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

function removeEmptyNotes(){
  for(var i = (notes.length-1); i > -1; i--){
    if(notes[i].fileName === "New Note" && notes[i].body === ""){
      notes.splice(i, 1);
    }
  }
}

module.exports = store;
