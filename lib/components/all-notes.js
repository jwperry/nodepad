import React from 'react';
import Note from './note';

const AllNotes = ({ notes }) => {

  return (
    <section id="all-notes-section" class="notes-section">
        { notes.map(note => <Note key={note.fileName} {...note} />) }
    </section>
  );
}

module.exports = AllNotes;
