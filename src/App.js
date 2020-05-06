import React, { useState } from "react";
import "./App.css";
import Note from "./Note";
import logo from "./logo.svg";

function App() {
  const [notes, setNote] = useState([]);
  const [input, setInput] = useState("");

  const handleSubmit = (e, notes, setNote, input, setInput) => {
    e.preventDefault();
    const id = notes.length ? notes[notes.length - 1].id + 1 : 0;
    setNote([...notes, { id: id, msg: input }]);
    setInput("");
  };
  const deleteNote = (id, notes, setNote) => {
    setNote(notes.filter((note) => note.id != id));
  };

  return (
    <div>
      <h1 className="title">To-Do List...</h1>
      <img src={logo} width="100px" className="img" alt="" />
      <form onSubmit={(e) => handleSubmit(e, notes, setNote, input, setInput)}>
        <input
          type="text"
          onChange={(e) => setInput(e.target.value)}
          value={input}
          placeholder="Write toDo..."
        />{" "}
        &nbsp;
        <button className="green" disabled={!input.length}>
          Submit
        </button>
      </form>
      {notes.map((item) => (
        <div className="p">
          <Note
            key={item.id}
            id={item.id}
            msg={item.msg}
            deleteNote={(id) => deleteNote(id, notes, setNote)}
          />
        </div>
      ))}
    </div>
  );
}

export default App;
