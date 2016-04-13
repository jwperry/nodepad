var React = require('react');
var $ = require('jquery');

module.exports = const Note = ({ notes }) => {

  console.log("notes: " + notes)
  debugger;

  function clearBody(){
    $('no-file').css("display", "none")
  }

  function createNewNote(notes){
    clearBody()
    notes.push({fileName: "", body: "", active: true})
    console.log("current notes: " + notes)
  }

  return (
    <div>
      <input name="title" placeholder='Enter Title Of Note' />
      <input name="body" placeholder='Body Of Note' />
      {/*<button onClick={this.handleClick}>Submit</button>*/}
    </div>
  );

}

module.exports = Note;
