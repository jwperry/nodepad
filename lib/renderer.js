var ActionPanel = require ('./action-panel');
var Search = require ('./search');
var AllNotes = require ('./all-notes');
var CurrentNote = require ('./current-note');
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
          <ActionPanel />
          <section id="note-panels">
            <section id="left-panel">
              <Search />
              <AllNotes />
            </section>
            <section id="right-panel">
              <CurrentNote file={this.state.currentNote}/>
            </section>
          </section>
        </div>
      </div>
    );
  }
}

ReactDOM.render(<Application />, document.querySelector('.application'));
