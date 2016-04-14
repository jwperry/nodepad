import React from 'react';
import store from '../store';
import path from 'path';

const Note = (note) => {
  const fileName = path.basename(note.fileName);
  const date = note.lastMod;

  return (
    <div className="note-preview" onClick={() => store.select(note.fileName)}>
      <h2>{fileName}</h2>
      <h3>{date}</h3>
    </div>
  );
};

module.exports = Note;
