import React from "react";
// import DeleteForeverIcon from "@material-ui/icons/DeleteForever";
import DeleteIcon from "@material-ui/icons/Delete";
import axios from "axios";

function Note(props) {
  function handleClick() {
    axios
    .delete("http://localhost:8082/api/" + props.id)
    .then(res => {
      console.log("res: ", res);
      // setNotes(dataArray);
      // props.onDelete(props.id);
      props.onRefresh();
      })
    .catch(err => {
      console.log("Error in delete: ",  + props.id);
    })

  }

  return (
    <div className="note">
      <h1>{props.title}</h1>
      <p>{props.content}</p>
      <button onClick={handleClick}>
        <DeleteIcon />
      </button>
    </div>
  );
}

export default Note;
