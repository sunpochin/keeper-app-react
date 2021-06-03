import React, { useState } from "react";
import AddIcon from "@material-ui/icons/Add";
import Zoom from "@material-ui/core/Zoom";
import Fab from "@material-ui/core/Fab";
import axios from 'axios';

function CreateArea(props) {
  const [note, setNote] = useState({
    title: "",
    content: ""
  });

  function handleChange(event) {
    const { name, value } = event.target;

    setNote((prevNote) => {
      return {
        ...prevNote,
        [name]: value
      };
    });
  }

  function submitNote(event) {
    event.preventDefault();

    props.onAdd(note);
    // setNote({
    //   title: "",
    //   content: ""
    // });

    const data = {
      title: note.title,
      content: note.content,
    };


    axios
      .post('http://localhost:8082/api/books', data)
      .then(res => {
        this.setState({
          title: '',
          content:'',
        })
        this.props.history.push('/');
      })
      .catch(err => {
        console.log("Error in CreateBook!");
      })  
    }

  const [isExpanded, setExpanded] = useState(false);
  function click(event) {
    setExpanded(true);
  }
  function mouseLeave(event) {
    setExpanded(false);
  }

  return (
    <div>
      <form className="create-note">
        {isExpanded ? (
          <input
            name="title"
            onChange={handleChange}
            value={note.title}
            placeholder="Title"
          />
        ) : null}
        <textarea
          name="content"
          onChange={handleChange}
          value={note.content}
          placeholder="Take a note..."
          rows={isExpanded ? 3 : 1}
          onClick={click}
        />
        <Zoom in={true}>
          <Fab onClick={submitNote} color="primary" aria-label="add">
            <AddIcon />
          </Fab>
        </Zoom>
      </form>
    </div>
  );
}

export default CreateArea;
