import React from 'react';

const ActiveNote = ({ note }) => {
  return (
    <div className = "active-note">
      <h3>{note.fileName}</h3>
      <div className="note-body">{note.body}</div>
    </div>
  );
};

module.exports = ActiveNote;
