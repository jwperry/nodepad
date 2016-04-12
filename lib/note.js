var React = import ('react');

var Note = React.createClass({
  getInitialState(){
    return { editable: false }
  },

  render {
    var body = this.state.editable ? <textarea type="text" ref="body" defaultValue={this.props.note.body}></textarea> : <p>{this.props.note.body}</p>

    return(
      {body}
    )
  }
});

module.exports = Note;
