import React from "react";
import DeleteOutlineOutlinedIcon from "@mui/icons-material/DeleteOutlineOutlined";
const Note = (props) => {
  const handleDel = () => {
    props.passDel(props.id);
  };
  return (
    <>
      <div className="note">
        <h1>{props.title}</h1>
        <br />
        <p>{props.content}</p>
        <button>
          <DeleteOutlineOutlinedIcon
            className="deleteIcon"
            onClick={handleDel}
          />
        </button>
      </div>
    </>
  );
};

export default Note;
