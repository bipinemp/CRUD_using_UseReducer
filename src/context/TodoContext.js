import { createContext, useReducer, useState } from "react";

export const TodosContext = createContext();

export const todosReducer = (state, action) => {
  switch (action.type) {
    case "CREATE_TODO":
      return {
        todos: [...state.todos, action.payload],
      };
    case "DELETE_TODO":
      return {
        todos: state.todos.filter((t) => t.id !== action.payload.id),
      };
    case "UPDATE_TODO":
      const updatedTodo = action.payload;
      const updatedTodos = state.todos.map((todo) => {
        if (todo.id === updatedTodo.id) {
          return updatedTodos;
        }
        return todo;
      });
      return {
        ...state.todos,
        todos: updatedTodo,
      };
    default:
      return state;
  }
};

export const TodosContextProvider = ({ children }) => {
  const [editing, setEditing] = useState(false);

  const [state, dispatch] = useReducer(todosReducer, {
    todos: [],
  });
  return (
    <TodosContext.Provider value={{ ...state, dispatch, editing, setEditing }}>
      {children}
    </TodosContext.Provider>
  );
};
