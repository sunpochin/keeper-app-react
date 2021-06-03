import React, { useState, useEffect } from "react";
import Header from "./Header";
import Footer from "./Footer";
import Note from "./Note";
import CreateArea from "./CreateArea";
import axios from "axios";

function App() {

  const [notes, setNotes] = useState([]);

  useEffect(() => {
    // Your code here
    axios
    .get('http://localhost:8082/api/list')
    .then(res => {
      console.log("res: ", res.data);
      setNotes(prev => {
        return [...prev, res.data[0], res.data[1], res.data[2]]
      });
      // this.setState({
      //   title: '',
      //   content:'',
      // })
      // this.props.history.push('/');
    })
    .catch(err => {
      console.log("Error in CreateBook!");
    })  
  }, []);

  function init() {
  }

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
      <CreateArea onAdd={addNote} />
      {notes.map((noteItem, index) => {
        return (
          <Note
            key={index}
            id={index}
            title={noteItem.title}
            content={noteItem.content}
            onDelete={deleteNote}
          />
        );
      })}

      <Footer />
    </div>
  );
}

export default App;
