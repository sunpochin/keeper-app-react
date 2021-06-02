import React from "react";

function Note(props) {
  function onDel(event) {
    console.log();
    props.onDel(props.id);
    event.preventDefault();
    // props.onDel(area);
  }

  return (
    <div className="note">
      <h1>{props.title}</h1>
      <p>{props.content}</p>
      <button onClick={onDel}>DELETE</button>
    </div>
  );
}

export default Note;
