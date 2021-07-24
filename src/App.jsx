import React from "react";
import "./styles.css";

export const App = () => {
  return (
    <>
      <div className="input-area">
        <input placeholder="Create New ToDo" />
        <button>Add</button>
      </div>
      <div className="incomplete-area">
        <p className="title">Work In Progress</p>
        <ul>
          <div className="list-row">
            <li>abcd</li>
            <button>Done</button>
            <button>Delete</button>
          </div>
          <div className="list-row">
            <li>xyz</li>
            <button>Done</button>
            <button>Delete</button>
          </div>
        </ul>
      </div>
      <div className="completed-area">
        <p className="title">Done - Closed Items</p>
        <ul>
          <div className="list-row">
            <li>abcd</li>
            <button>Retrieve</button>
          </div>
        </ul>
      </div>
    </>
  );
};
