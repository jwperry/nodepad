var React = require('react');
import $ from 'jquery';


var Search = React.createClass({
  componentDidMount(){
    searchThings();
  },

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

function searchThings(){
  var $notes = $('#all-notes-section');
  $('#search-notes').on('keyup', function() {
    var currentInput = this.value.toLowerCase();
    $notes.children().each(function (index, note) {
      console.log("note: " + note)
      var $note = $(note);
      var $noteContent = $note.find('.note-content').text().toLowerCase();
      console.log("notecontent :" + $noteContent)

      if ($noteContent.indexOf(currentInput) !== -1) {
        $note.show();
      } else {
        $note.hide();
      }
    });
  });
}

module.exports = Search;
