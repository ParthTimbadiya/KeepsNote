import React, { useState } from "react";
import Button from "@mui/material/Button";
import AddIcon from "@mui/icons-material/Add";

function CreateNote(props) {
  const [expand, setextends] = useState(false);

  const [note, setNote] = useState({
    title: "",
    content: "",
  });

  const InputEvent = (event) => {
    const { name, value } = event.target;

    setNote((prevData) => {
      return {
        ...prevData,
        [name]: value,
      };
    });
  };

  const addEvent = () => {
    props.passNote(note);

    setNote({
      title: "",
      content: "",
    });
  };

  const expandIt = () => {
    setextends(true);
  };

  const bToNormal = () => {
    setextends(false);
  }

  return (
    <>
    <div className="container">
      <div className="row justify-content-center main_note mt-3"  onDoubleClick={bToNormal}>
        <form action="" className="col-11 col-md-8 col-lg-6 col-xl-4">
          {expand ?
          <input
            className="input"
            name="title"
            value={note.title}
            onChange={InputEvent}
            type="text"
            placeholder="Title"
            autoCapitalize="off"
          />
          : null}
          <textarea
            className="textarea"
            name="content"
            value={note.content}
            onChange={InputEvent}
            id=""
            cols=""
            rows="3"
            placeholder="Write a note..."
            onClick={expandIt}
          ></textarea>
          <div className="btn_add_end">
            {expand ? <Button onClick={addEvent} className="btn_add" color="primary">
              <AddIcon />
            </Button> : null}
          </div>
        </form>
      </div>
      </div>
    </>
  );
}

export default CreateNote;
