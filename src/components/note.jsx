import "./note.css";

function Note(props) {
  return (
    <div className="note">
      <div className="container">
        <div className="note-header">{props.noteHeader}</div>
        <div className="note-body">{props.noteBody}</div>
        <div className="right-container">
          <span className="delete" onClick={() => {
              props.deleteNote(props.id)
          }}>DELETE</span>
        </div>
      </div>
    </div>
  );
}

export default Note;
