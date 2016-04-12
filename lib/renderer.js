var ActionPanel = require ('./action-panel')
var Search = require ('./search')
var AllNotes = require ('./all-notes')
var CurrentNote = require ('./current-note')

import React, {
  Component,
} from 'react';

import ReactDOM from 'react-dom';

class Application extends Component {
  constructor() {
    super();
    this.state = { notes: [] };
  }

  changeContent() {
    this.setState({ content: 'lololol' });
  }

  render() {
    let currentNote = this.state.notes[0]
    return (
      <div>
        <div>
          <ActionPanel />
          <section id="note-panels">
            <section id="left-panel">
              <Search />
              <AllNotes />
            </section>
            <section id="right-panel">
              <CurrentNote file={currentNote}/>
            </section>
          </section>
        </div>
      </div>
    );
  }
}

ReactDOM.render(<Application />, document.querySelector('.application'));
