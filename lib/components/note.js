import React from 'react';
import store from '../store';
import path from 'path';

const Note = (note) => {
  const fileName = path.basename(note.fileName);
  console.log("lastMod: " + note.lastMod);
  const displayDate = note.lastMod.toString();

  return (
    <div className="note-preview" onClick={() => store.select(note.fileName)}>
      <h2>{fileName}</h2>
      <h3>{displayDate}</h3>
      <span id="hidden-body" className="note-content">{note.body}</span>
    </div>
  );
};

module.exports = Note;
