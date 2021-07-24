import React, { useState } from "react";
import "./styles.css";

export const App = () => {
  const [incompleteTodos, setIncompleteTodos] = useState(["abcd", "xyz"]);
  const [completeTodos, setCompleteTodos] = useState(["zzz"]);
  const [todoText, setTodoText] = useState("");

  const onChangeTodoText = (event) => setTodoText(event.target.value);

  return (
    <>
      <div className="input-area">
        <input
          placeholder="Create New ToDo"
          value={todoText}
          onChange={onChangeTodoText}
        />
        <button>Add</button>
      </div>
      <div className="incomplete-area">
        <p className="title">Work In Progress</p>
        <ul>
          {incompleteTodos.map((todo) => {
            return (
              <>
                <div key={todo} className="list-row">
                  <li>{todo}</li>
                  <button>Done</button>
                  <button>Delete</button>
                </div>
              </>
            );
          })}
        </ul>
      </div>
      <div className="completed-area">
        <p className="title">Done - Closed Items</p>
        <ul>
          {completeTodos.map((todo) => {
            return (
              <>
                <div key={todo} className="list-row">
                  <li>{todo}</li>
                  <button>Retrieve</button>
                </div>
              </>
            );
          })}
        </ul>
      </div>
    </>
  );
};
