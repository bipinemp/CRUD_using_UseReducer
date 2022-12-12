import { useContext, useState } from "react";
import { TodosContext } from "../context/TodoContext";

const SingleTodo = ({ todo, setTodo }) => {
  const [updatedTodo, setUpdatedTodo] = useState([]);
  const { dispatch, setEditing } = useContext(TodosContext);

  const handleDelete = () => {
    dispatch({ type: "DELETE_TODO", payload: todo });
  };

  const handleEdit = (t) => {
    setEditing(true);
    setUpdatedTodo(t);
    setTodo(t);
    dispatch({ type: "UPDATE_TODO", payload: updatedTodo });
  };

  return (
    <div key={todo.id} className="todo">
      <h1>
        {todo.id}. {todo.title}
      </h1>
      <h3>" {todo.desc} "</h3>
      <button onClick={handleDelete}>Delete</button>
      <button onClick={() => handleEdit(todo)}>Edit</button>
    </div>
  );
};

export default SingleTodo;
