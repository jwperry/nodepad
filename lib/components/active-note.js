import React from 'react';
import electron from 'electron';
import $ from 'jquery';
import { remote } from 'electron';
import store from '../store'
const { saveFile } =  remote.require(`${__dirname}/../main`);

var ActiveNote = React.createClass({
  
  handleSave() {
    saveFile(this.refs.body.value);
  },

  handleChange(event) {
    store.update(this.props.note.fileName, event.target.value);
  },

  render(){
    return (
      <div className = "active-note new-note">
        <button id="save-button" onClick={this.handleSave} className="action-button">Save</button>
        <h3>{this.props.note.fileName}</h3>
        <textarea type="text" className="note-body" id="newBody" value={this.props.note.body} onChange={this.handleChange} ref="body"></textarea>
      </div>
    )
  }
});

module.exports = ActiveNote;
