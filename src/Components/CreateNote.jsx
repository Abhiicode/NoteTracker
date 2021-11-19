import React, { useState } from "react";
import Button from "@mui/material/Button";
import AddIcon from "@mui/icons-material/Add";
const CreateNote = (props) => {
  const [expand, setExpand] = useState(false);

  const [note, setNote] = useState({
    title: "",
    content: "",
  });
  const handleAdd = () => {
    props.passNote(note);
    setNote({
      title: "",
      content: "",
    });
  };
  const InputEvent = (e) => {
    // const value = e.target.value;
    // const name = e.target.name;
    const { name, value } = e.target;
    setNote((prevData) => {
      return {
        ...prevData,
        [name]: value,
      };
    });
  };

  const expandIt = () => {
    setExpand(!expand);
  };
  return (
    <>
      <div className="main-note">
        <form className="main-text-area1">
          {expand ? (
            <input
              type="text"
              placeholder="Title"
              autoComplete="off"
              value={note.title}
              name="title"
              onChange={InputEvent}
            />
          ) : null}
          <textarea
            className="text_AREA"
            placeholder="Write a note..."
            rows=""
            value={note.content}
            onChange={InputEvent}
            name="content"
            column=""
            onClick={expandIt}
          ></textarea>
          {expand ? (
            <Button onClick={handleAdd} className="AddButton">
              <AddIcon className="plus_sign" />
            </Button>
          ) : null}
        </form>
      </div>
    </>
  );
};

export default CreateNote;
