import React from 'react';
import electron from 'electron';
import $ from 'jquery';

import { remote } from 'electron';
const { saveFile } =  remote.require(`${__dirname}/../main`);

const bodyContent = $('#newBody').val();

const ActiveNote = ({ note }) => {
  if (note.fileName === "New Note") {
    return (
      <div className = "active-note new-note">
        <textarea type = "text" id="newBody" defaultValue = "" placeholder="Body"></textarea>;
        <button id="save-button" className="action-button" onClick={() => saveFile(bodyContent)}>Save</button>
      </div>
    );
  }
  return (
    <div className = "active-note existing-note">
      <button id="edit-button" className="action-button">Edit</button>
      <h3>{note.fileName}</h3>
      <div className="note-body">{note.body}</div>
    </div>
  );
};

module.exports = ActiveNote;
