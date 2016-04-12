var React = require('react');

import { remote } from 'electron';

const { openFile } = remote.require(__dirname + '/main');

var ActionPanel = React.createClass({

  render(){
    return (
      <section id="action-panel-section">
        <button id="open-button" onClick={function () { return openFile(); }.bind(this)} className="action-button">Open</button>
        <button id="new-button" onClick={() => newNote()} className="action-button">New</button>
        <button id="save-button" className="action-button">Save</button>
        <button id="font-button" className="action-button">Font</button>
        <button id="theme-button" className="action-button">Theme</button>
      </section>
    );
  }


});

function newNote() {
  console.log("HI")
  this.props.currentNote = 
}

module.exports = ActionPanel;
