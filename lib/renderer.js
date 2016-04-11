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
    this.state = { content: 'wowow' };
  }

  changeContent() {
    this.setState({ content: 'lololol' });
  }

  render() {
    return (
      <div>
        <div>
          <ActionPanel />
          <Search />
          <AllNotes />
          <CurrentNote />
        </div>
      </div>
    );
  }
}

ReactDOM.render(<Application />, document.querySelector('.application'));
