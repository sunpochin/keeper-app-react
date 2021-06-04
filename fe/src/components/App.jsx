import React, { useState, useEffect } from "react";
import Header from "./Header";
import Footer from "./Footer";
import Note from "./Note";
import CreateArea from "./CreateArea";
import axios from "axios";

function App() {

  const [notes, setNotes] = useState([]);

  function refreshList() {
    axios
    .get('http://localhost:8082/api/list')
    .then(res => {
      const dataArray = res.data;
      console.log(", dataArray: ", dataArray);
      setNotes(dataArray);
    })
    .catch(err => {
      console.log("Error in CreateBook!");
    })  
  }

  useEffect(() => {
    refreshList();
  }, []);


  function addNote(newNote) {
    setNotes(prevNotes => {
      return [...prevNotes, newNote];
    });
  }

  function deleteNote(id) {
    setNotes(prevNotes => {
      return prevNotes.filter((noteItem, index) => {
        return index !== id;
      });
    });
  }

  return (
    <div>
      <Header />
      <CreateArea 
        onAdd={addNote} 
        onRefresh={refreshList}
      />
      {notes.map((noteItem, index) => {
        return (
          <Note
            key={noteItem._id}
            id={noteItem._id}
            index={index}
            title={noteItem.title}
            content={noteItem.content}
            onDelete={deleteNote}
            onRefresh={refreshList}
          />
        );
      })}

      <Footer />
    </div>
  );
}

export default App;
