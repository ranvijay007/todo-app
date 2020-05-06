import React, { useState } from "react";
import "./App.css";

function Note({ id, msg, deleteNote }) {
  const [isMark, setMark] = useState(false);
  const mark = () => {
    setMark(!isMark);
  };
  return (
    <div className="note">
      <div className="left">
        <p>
          {id} |<span className={isMark ? "change" : ""}> {msg}</span>
        </p>
      </div>
      <div className="btn">
        <button className="red" onClick={() => deleteNote(id)}>
          Delete
        </button>{" "}
        &nbsp;
        <button className="green" onClick={mark}>
          {isMark ? "UnMark" : "Mark"}
        </button>
      </div>
    </div>
  );
}

export default Note;
