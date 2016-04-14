import React from 'react';
import electron from 'electron';
import $ from 'jquery';
import { remote } from 'electron';
const { saveFile } =  remote.require(`${__dirname}/../main`);


var ActiveNote = React.createClass({

  handleClick() {
    saveFile(this.refs.body.value);
  },

  render(){
  const note = this.props.note;
    if (note.fileName === "New Note") {
      return (
        <div className = "active-note new-note">
          <button id="save-button" onClick={this.handleClick} className="action-button">Save</button>
          <textarea type="text" id="newBody" defaultValue="" ref="body" placeholder="Body"></textarea>
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
  }

});

module.exports = ActiveNote;
