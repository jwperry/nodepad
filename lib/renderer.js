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
          <h1>Hello World</h1>
          <p>{this.state.content}</p>
          <p><button onClick={this.changeContent.bind(this)}>Change Content</button></p>
        </div>
        <div>
          <NewNote />
          <SaveNote />
          <ShareNote />
          <AllNotes />
          <CurrentNote />
          <ChangeFont />
          <ChangeTheme />
        </div>
      </div>
    );
  }
}

ReactDOM.render(<Application />, document.querySelector('.application'));
