import { useState } from "react";
import AddButton from "./addButton";
import "./textInput.css";

const TextInput = (props) => {
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
        <input
          className="new-note-title"
          placeholder="Title"
          name="noteTitle"
          value={note.noteTitle}
          onChange={handleChange}
        />
        <textarea
          className="new-note"
          placeholder="Take a note..."
          name="noteBody"
          value={note.noteBody}
          onChange={handleChange}
        />
        <div
          onClick={() => {
            props.addNewNote(note);
            setNote({
              noteTitle: "",
              noteBody: "",
            });
          }}
        >
          <AddButton />
        </div>
      </div>
    </div>
  );
};

export default TextInput;
