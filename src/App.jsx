import React, { useState } from "react";
import "./styles.css";

export const App = () => {
  const [incompleteTodos, setIncompleteTodos] = useState([]);
  const [completeTodos, setCompleteTodos] = useState([]);
  const [todoText, setTodoText] = useState("");

  const onChangeTodoText = (event) => setTodoText(event.target.value);

  const onClickAdd = () => {
    if (todoText === "") return;
    const newTodos = [...incompleteTodos, todoText];
    setIncompleteTodos(newTodos);
    setTodoText("");
  };

  const onClickDelete = (index) => {
    const newTodos = [...incompleteTodos];
    newTodos.splice(index, 1);
    setIncompleteTodos(newTodos);
  };

  const onClickDone = (index) => {
    const newIncomepleteTodos = [...incompleteTodos];
    newIncomepleteTodos.splice(index, 1);

    const newCompleteTodos = [...completeTodos, incompleteTodos[index]];
    setIncompleteTodos(newIncomepleteTodos);
    setCompleteTodos(newCompleteTodos);
  };

  const onClickBack = (index) => {
    const newCompleteTodos = [...completeTodos];
    newCompleteTodos.splice(index, 1);

    const newIncompleteTodos = [...incompleteTodos, completeTodos[index]];
    setCompleteTodos(newCompleteTodos);
    setIncompleteTodos(newIncompleteTodos);
  };

  return (
    <>
      <div className="input-area">
        <input
          placeholder="Create New ToDo"
          value={todoText}
          onChange={onChangeTodoText}
        />
        <button onClick={onClickAdd}>Add</button>
      </div>
      <div className="incomplete-area">
        <p className="title">Work In Progress</p>
        <ul>
          {incompleteTodos.map((todo, index) => {
            return (
              <>
                <div key={todo} className="list-row">
                  <li>{todo}</li>
                  <button onClick={() => onClickDone(index)}>Done</button>
                  <button onClick={() => onClickDelete(index)}>Delete</button>
                </div>
              </>
            );
          })}
        </ul>
      </div>
      <div className="completed-area">
        <p className="title">Done</p>
        <ul>
          {completeTodos.map((todo, index) => {
            return (
              <>
                <div key={todo} className="list-row">
                  <li>{todo}</li>
                  <button onClick={() => onClickBack(index)}>Retrieve</button>
                </div>
              </>
            );
          })}
        </ul>
      </div>
    </>
  );
};
