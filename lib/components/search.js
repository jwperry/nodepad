var React = require('react');

var Search = React.createClass({

  render(){
    return (
      <section id="search-section">
        <input  id="search-notes"
                type="text"
                ref="name"
                placeholder="Search Notes" />
      </section>
    );
  }
});

module.exports = Search;
