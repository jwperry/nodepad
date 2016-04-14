var React = require('react');
import $ from 'jquery';

var Search = React.createClass({

  // var $notes = $('.note-preview');
  //
  // $('#search-notes').on('keyup', function() {
  //   var currentInput = this.value.toLowerCase();
  //
  //   $notes.each(function (index, note) {
  //     var $note = $(note);
  //     var $noteContent = $note.find('.note-content').text().toLowerCase();
  //
  //     if ($noteContent.indexOf(currentInput) >= 0) {
  //       $note.show();
  //     } else {
  //       $note.hide();
  //     }
  //   });
  // });

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
