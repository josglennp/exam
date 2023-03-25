import React, { useContext, useReducer, useState } from "react";
import { TodoContext } from "./store";
import "./todolist.css";

const TodoList = () => {
  const [text, setText] = useState("");

  const todoCtx = useContext(TodoContext);

  const submit = () => {
    todoCtx.addTodo({ text });
    setText("");
  };

  return (
    <div className="container">
      <input
        type={"text"}
        value={text}
        onChange={(e) => setText(e.target.value)}
      />
      <button onClick={() => submit()} disabled={text === "" ? true : false}>
        Add todo
      </button>
      <ul>
        {todoCtx.todo.map((item) => (
          <li>
            <p>{item.text}</p>{" "}
            <button
              onClick={() => {
                todoCtx.removeTodo(item.id);
              }}
            >
              Remove todo
            </button>
          </li>
        ))}
      </ul>
      <hr />
      <h3>My Answer:</h3>
      <span>
        I create a new file for storing the logic for getting the data in
        todolist and I used useContext and useReducer for state and actions.
      </span>
    </div>
  );
};

export default TodoList;
