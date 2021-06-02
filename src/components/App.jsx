import React, { useState } from "react";
import Header from "./Header";
import Footer from "./Footer";
import Note from "./Note";
import CreateArea from "./CreateArea";

function App() {
  let [notes, setNotes] = useState([
    {
      title: "title",
      content: "take a note!"
    }
  ]);
  function addNote(newNote) {
    console.log("newNote: ", newNote);
    setNotes((prev) => {
      console.log("prev: ", prev);
      return [...prev, newNote];
    });
  }

  function delNote(id) {
    console.log("del id: ", id);
  }
  return (
    <div>
      <Header />
      <CreateArea onAdd={addNote} />
      {notes.map((anote, index) => (
        <Note
          key={index}
          id={index}
          title={anote.title}
          content={anote.content}
          onDel={delNote}
        />
      ))}
      <Footer />
    </div>
  );
}

export default App;
