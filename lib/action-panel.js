var React = require('react');

var ActionPanel = React.createClass({

  render(){
    return (
      <section id="action-panel-section">
        <button id="new-button" class="action-button">New</button>
        <button id="save-button" class="action-button">Save</button>
        <button id="share-button" class="action-button">Share</button>
        <button id="font-button" class="action-button">Font</button>
        <button id="theme-button" class="action-button">Theme</button>
      </section>
    );
  }
});

module.exports = ActionPanel;
