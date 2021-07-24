import React from "react";
import "./styles.css";

export const App = () => {
  return (
    <>
      <div>
        <input placeholder="Create New ToDo" />
        <button>Add</button>
      </div>
      <div>
        <p>Work In Progress</p>
        <ul>
          <div>
            <li>abcd</li>
            <button>Done</button>
            <button>Delete</button>
          </div>
          <div>
            <li>xyz</li>
            <button>Done</button>
            <button>Delete</button>
          </div>
        </ul>
      </div>
      <div>
        <p>Done - Closed Items</p>
        <ul>
          <div>
            <li>abcd</li>
            <button>Done</button>
            <button>Delete</button>
          </div>
          <div>
            <li>xyz</li>
            <button>Done</button>
            <button>Delete</button>
          </div>
        </ul>
      </div>
    </>
  );
};
