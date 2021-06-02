import React, { useState } from "react";

function CreateArea(props) {
  const [area, setTitleContent] = useState({
    title: "title",
    content: "take a note!"
  });

  function handleChange(event) {
    let { value, name } = event.target;
    console.log("newValue: ", name, value);

    setTitleContent((prev) => {
      console.log("prev: ", prev);
      if ("title" === name) {
        return {
          title: value,
          content: prev.content
        };
      } else if ("content" === name) {
        return {
          title: prev.title,
          content: value
        };
      }
    });
  }

  function onCli(event) {
    event.preventDefault();
    props.onAdd(area);
  }
  return (
    <div>
      <form onChange={handleChange} value={area}>
        <input name="title" placeholder="Title" />
        <textarea name="content" placeholder="Take a note..." rows="3" />
        <button onClick={onCli}>Add</button>
      </form>
    </div>
  );
}

export default CreateArea;
