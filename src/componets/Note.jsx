import React from "react";
import DeleteOutlineIcon from "@mui/icons-material/DeleteOutline";

function Note(props) {
  const deleteNote = () => {
    props.deleteItem(props.id);
  };
  return (
    <>
      <div className="col-12 col-md-6 col-lg-4">
        <div className="your_note">
          <h2>{props.title}</h2>

          <p>{props.content} </p>

          <div className="btn_end">
            <button onClick={deleteNote} className="btn_delet">
              <DeleteOutlineIcon className="deletIcon" />
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

export default Note;
