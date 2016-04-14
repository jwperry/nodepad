import React from 'react';
import Note from './note';

const AllNotes = ({ notes }) => {
  notes = notes.sort(function(a, b) {
    return b.lastMod - a.lastMod;
  });
  return (
    <section id="all-notes-section" class="notes-section">
        { notes.map(note => <Note key={note.fileName} {...note} />) }
    </section>
  );
}

module.exports = AllNotes;
