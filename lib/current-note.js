var React = require('react');

const CurrentNote = ({ file }) => {
  if (!file) { return <div className="no-file">NO FILE</div> }
    return (
      <section id="current-note-section" className="notes-section">
        <h1>{file.fileName}</h1>
        <div>
          {file.body}
        </div>
      </section>
    );
}

module.exports = CurrentNote;
