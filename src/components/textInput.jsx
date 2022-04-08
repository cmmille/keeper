import { useState } from "react";
import AddButton from "./addButton";
import "./textInput.css";

const TextInput = (props) => {
  const [isExpanded, setIsExpanded] = useState(false);
  const [note, setNote] = useState({
    noteTitle: "",
    noteBody: "",
  });

  function handleChange(event) {
    const { name, value } = event.target;
    setNote((previous) => {
      return { ...previous, [name]: value };
    });
  }

  return (
    <div className="text-input">
      <div className="container">
        {isExpanded && (
          <input
            className="new-note-title"
            placeholder="Title"
            name="noteTitle"
            value={note.noteTitle}
            onChange={handleChange}
          />
        )}
        <textarea
          className="new-note"
          placeholder="Take a note..."
          name="noteBody"
          rows={isExpanded ? 4 : 1}
          value={note.noteBody}
          onChange={handleChange}
          onClick={() => {
            setIsExpanded(true);
          }}
        />
        {isExpanded && (
          <div
            onClick={() => {
              props.addNewNote(note);
              setNote({
                noteTitle: "",
                noteBody: "",
              });
            }}
          >
            <AddButton zoom={isExpanded} />
          </div>
        )}
      </div>
    </div>
  );
};

export default TextInput;
