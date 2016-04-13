import React from 'react';
import Note from './note';
import { remote } from 'electron';
const { openFile } =  remote.require(`${__dirname}/../main`);

const ActionPanel = () => {
    return (
      <section id="action-panel-section">
        <button id="open-button" onClick={() => openFile() } className="action-button">Open</button>
        <button id="new-button" className="action-button">New</button>
        <button id="share-button" className="action-button">Share</button>
        <button id="font-button" className="action-button">Font</button>
        <button id="theme-button" className="action-button">Theme</button>
      </section>
    );
  };

module.exports = ActionPanel;



  // newNote() {
  //     return (
  //       <div>
  //         <input name="title" placeholder='Enter Title Of Note' />
  //         <input name="body" placeholder='Body Of Note' />
  //       </div>
  //     );
  // },
