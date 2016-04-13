import React from 'react';
import Note from './note';
import store from '../store';
import { remote } from 'electron';
const { openFile } =  remote.require(`${__dirname}/../main`);

const ActionPanel = () => {
    return (
      <section id="action-panel-section">
        <button id="open-button" onClick={() => openFile()} className="action-button">Open</button>
        <button id="new-button" onClick={() => store.new({fileName: "New Note", body: ""})} className="action-button">New</button>
        <button id="share-button" className="action-button">Share</button>
        <button id="font-button" className="action-button">Font</button>
        <button id="theme-button" className="action-button">Theme</button>
      </section>
    );
  };

module.exports = ActionPanel;
