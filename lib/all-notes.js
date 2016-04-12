var React = require('react');

var AllNotes = React.createClass({

  render(){
    return (
      <section id="all-notes-section" class="notes-section">
        <div class="note-preview">
          <h2>1. The Title of the Note</h2>
          <h3>4/11/2016</h3>
        </div>
        <div class="note-preview">
          <h2>2. The Title of the Note</h2>
          <h3>4/11/2016</h3>
        </div>
        <div class="note-preview">
          <h2>3. The Title of the Note</h2>
          <h3>4/11/2016</h3>
        </div>
        <div class="note-preview">
          <h2>4. The Title of the Note</h2>
          <h3>4/11/2016</h3>
        </div>
      </section>
    );
  }
});

module.exports = AllNotes;
