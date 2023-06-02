import React, { useState } from "react";
import "./App.css";
import CreateNote from "./componets/CreateNote";
import Footer from "./componets/Footer";
import Header from "./componets/Header";
import Note from "./componets/Note";

function App() {
  const [additem, setAddItem] = useState([]);

  const addNote = (note) => {
    setAddItem((prevData) => {
      return [...prevData, note];
    });
  };

  const onDelet = (id) => {
    setAddItem((oldData) =>
      oldData.filter((currData, inde) => {
        return inde !== id;
      })
    );
  };

  return (
    <>
      <div className="main_div">
        <Header />
        <CreateNote passNote={addNote} />

        <div className="container note_main_div">
          <div className="row justify-content-between note_div mt-5">
            {additem.map((val, index) => {
              return (
                <Note
                  key={index}
                  id={index}
                  title={val.title}
                  content={val.content}
                  deleteItem={onDelet}
                />
              );
            })}
          </div>
        </div>
        <Footer />
      </div>
    </>
  );
}

export default App;
