var ActionPanel = require ('./action-panel');
var Search = require ('./search');
var AllNotes = require ('./all-notes');
import store from './store';

import React, {
  Component,
} from 'react';

import ReactDOM from 'react-dom';

class Application extends Component {
  constructor() {
    super();
    this.state = { notes: [], currentNote: {} };
  }

  componentDidMount() {
    store.on('change', notes => {
      this.setState({ notes });
    });
  }

  render() {
    this.state.currentNote = this.state.notes[0]

    return (
      <div>
        <div>
          <ActionPanel state={this.state}/>
          <section id="note-panels">
            <section id="left-panel">
              <Search />
              <AllNotes />
            </section>
            <section id="right-panel">
              {displayCurrentNote.call(this)}
            </section>
          </section>
        </div>
      </div>
    );
  }
}

function displayCurrentNote() {
  console.log(this.state.currentNote);
  if (!this.state.currentNote) { return <div>NO FILE</div> }
  if (this.state.currentNote.new === true) { return displayNewNote(); }
  return displayExistingNote(this.state.currentNote);
}

function displayExistingNote(note){
  return (
    <section id="current-note-section" className="notes-section">
      <h1>{note.fileName}</h1>
      <div>
        {note.body}
      </div>
    </section>
  );
}

function displayNewNote(){
  console.log("NOTICE MEEEEEEEEEE");
  return (
    <textarea type="text" ref="body" defaultValue="ASDFASDF"></textarea>
  )
}

ReactDOM.render(<Application />, document.querySelector('.application'));
