import { createContext, useReducer } from "react";

export const TodoContext = createContext({
  todo: [],
  addTodo: (todo) => {},
  removeTodo: (id) => {},
});

const DUMMY = [
  {
    id: 1,
    text: "new",
  },
];

function todoReducer(state, action) {
  switch (action.type) {
    case "ADD_TODO":
      const id = new Date().toString() + Math.random().toString();
      return [{ ...action.payload, id: id }, ...state];
    case "REMOVE_TODO":
      return state.filter((todo) => todo.id !== action.payload);
  }
}

function TodoContextProvider({ children }) {
  const [todoState, dispatch] = useReducer(todoReducer, DUMMY);

  function addTodo(text) {
    dispatch({ type: "ADD_TODO", payload: text });
  }

  function removeTodo(id) {
    dispatch({ type: "REMOVE_TODO", payload: id });
  }

  const value = {
    todo: todoState,
    addTodo: addTodo,
    removeTodo: removeTodo,
  };

  return <TodoContext.Provider value={value}>{children}</TodoContext.Provider>;
}

export default TodoContextProvider;
