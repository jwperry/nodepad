var React = require('react');

var Search = React.createClass({

  var searchSection = document.getElementById("search-section")
  // var searchField = document.getElementById("search-notes")
  var input = searchSection.elements["search-notes"].value;
  var cleanInput = input.toLowerCase();
  var targetID = "";

  var notes = document.getElementsByClassName("note-preview")
  for (i=0; i < notes.length; i++) {
    var content = notes[i]
    var index = content
  }
  $('#search-notes').on('keyup', function() {
    var currentInput = this.value.toLowerCase();

    $notes.each(function (index, note) {
      var $note = $(note)
      var $noteContent = $note.find('.note-content').text().toLowerCase();

      if ($noteContent.indexOf(currentInput) >= 0) {
        $note.show();
      } else {
        $note.hide();
      }
    });
  });

//   function search() {
//
//    var name = document.getElementById("searchForm").elements["searchItem"].value;
//    var pattern = name.toLowerCase();
//    var targetId = "";
//
//    var divs = document.getElementsByClassName("col-md-2");
//    for (var i = 0; i < divs.length; i++) {
//       var para = divs[i].getElementsByTagName("p");
//       var index = para[0].innerText.toLowerCase().indexOf(pattern);
//       if (index != -1) {
//          targetId = divs[i].parentNode.id;
//          document.getElementById(targetId).scrollIntoView();
//          break;
//       }
//    }
// }

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
