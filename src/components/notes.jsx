import {uid} from 'uid'
import TextInput from "./textInput";
import {useState} from "react"
import "./notes.css";
import Note from "./note";
import notes from "../notes";

function Notes(props) {
  const [allNotes, setAllNotes] = useState([]);

  // Add note
  function addNewNote(note) {
    setAllNotes(previous =>{

      return [...previous,{
        key: uid(),
        title: note.noteTitle,
        content: note.noteBody
      }]
    });
  }

  // Delete note
  function deleteNote(id){
    setAllNotes(allNotes.filter(note => {
      return note.key !== id
    }))

  }

  return (
    <div>
      <TextInput addNewNote={addNewNote} />
      <div className="notes">
        {allNotes.map((note) => (
          <Note
            key={note.key}
            id={note.key}
            noteHeader={note.title}
            noteBody={note.content}
            deleteNote= {deleteNote}
          />
        ))}
      </div>
    </div>
  );
}

export default Notes;
