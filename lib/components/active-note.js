import React from 'react';
import electron from 'electron';
import $ from 'jquery';
import { remote } from 'electron';
const { saveFile } =  remote.require(`${__dirname}/../main`);
import store from '../store'


var ActiveNote = React.createClass({

  handleSave() {
    saveFile(this.refs.body.value);
  },

  handleUpdate(){

    store.update(newBody)
  },

  render(){
  const note = this.props.note;
    if (note.fileName === "New Note") {
      return (
        <div className = "active-note new-note">
          <button id="save-button" onClick={this.handleSave} className="action-button">Save</button>
          <textarea type="text" id="newBody" defaultValue="" ref="body" placeholder="Enter Text Here!"></textarea>
        </div>
      );
    }
    return (
      <div className = "active-note existing-note">
      <button id="edit-button" onClick={this.handleUpdate} className="action-button">Edit Note</button>
        <h3>{note.fileName}</h3>
        <div className="note-body">{note.body}</div>
      </div>
    );
  }

});

module.exports = ActiveNote;
