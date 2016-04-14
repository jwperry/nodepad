import React from 'react';
import store from '../store';
import path from 'path';

const Note = (note) => {
  const fileName = path.basename(note.fileName);
  const date = "4/11/2016";

  return (
    <div className="note-preview" onClick={() => store.select(note.fileName)}>
      <h2>{fileName}</h2>
      <h3>{date}</h3>
      <span className="note-content" style="display: none">{note.body}</>
    </div>
  );
};

module.exports = Note;
