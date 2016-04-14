import React from 'react';
import Note from './note';
import store from '../store';
import { remote } from 'electron';
const { openFile } =  remote.require(`${__dirname}/../main`);

const ActionPanel = () => {
  function changeTheme(){
    var body = document.getElementsByTagName("body")[0];
    var button = document.getElementById("theme-button");
    var className = body.className;

    if (className=="light") {
      body.className="dark";
      button.innerHTML="Light Theme";
    }
    else {
      body.className="light";
      button.innerHTML="Dark Theme";
    }
  }

  function sanitizeFont(){
    var noteText = document.getElementsByClassName('note-body')
    noteText.style.fontFamily = "Helvetica, sans-serif";
    noteText.style.fontWeight = "100";
  }

  return (
    <section id="action-panel-section">
      <button id="open-button" onClick={() => openFile()} className="action-button">Open File</button>
      <button id="new-button" onClick={() => store.new({fileName: "New Note", body: ""})} className="action-button">New Note</button>
      <button id="font-button" onClick={() => sanitizeFont()} className="action-button">Clean Font</button>
      <button id="theme-button" onClick={() => changeTheme()} className="action-button">Dark Theme</button>
    </section>
  );
};

module.exports = ActionPanel;
