var React = require('react');
import { remote } from 'electron';
const Note = require('./note');
const { openFile } = remote.require(__dirname + '/main');

var ActionPanel = React.createClass({

  render(){
    return (
      <section id="action-panel-section">
        <button id="open-button" onClick={() => openFile() } className="action-button">Open</button>
        <button id="new-button" onClick={() => Note.createNewNote()} className="action-button">New</button>
        <button id="share-button" className="action-button">Share</button>
        <button id="font-button" className="action-button">Font</button>
        <button id="theme-button" className="action-button">Theme</button>
      </section>
    );
  }
});

module.exports = ActionPanel;
