import React from 'react';
import store from '../store';
import path from 'path';

const Note = (note) => {
  const fileName = path.basename(note.fileName);
  const date = "4/11/2016";

  return (
    <div className="note-preview">
      <h2>{fileName}</h2>
      <h3>{date}</h3>
    </div>
  );
};

module.exports = Note;
