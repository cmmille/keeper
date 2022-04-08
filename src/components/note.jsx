import "./note.css";
import DeleteIcon from '@mui/icons-material/Delete';

function Note(props) {
  return (
    <div className="note">
      <div className="container">
        <div className="note-header">{props.noteHeader}</div>
        <div className="note-body">{props.noteBody}</div>
        <div className="right-container">
          <button className="delete" onClick={() => {
              props.deleteNote(props.id)
          }}><DeleteIcon/></button>
        </div>
      </div>
    </div>
  );
}

export default Note;
