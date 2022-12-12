import { useContext, useState } from "react";
import { TodosContext } from "../context/TodoContext";
import SingleTodo from "./SingleTodo";

function Form() {
  const { todos, dispatch, editing, setEditing } = useContext(TodosContext);
  const [todo, setTodo] = useState({
    title: "",
    desc: "",
  });

  const handleChange = (e) => {
    setTodo((prev) => {
      return {
        ...prev,
        [e.target.name]: [e.target.value],
      };
    });
  };

  const handleUpdate = (e) => {
    setEditing(false);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!todo.title || !todo.desc) {
      alert("Please enter all fields !!!");
    } else {
      const newTodo = {
        //   id: todos.length === 0 ? 1 : todos[todos.length - 1].id + 1,
        id: todos.length + 1,
        title: todo.title,
        desc: todo.desc,
      };
      dispatch({ type: "CREATE_TODO", payload: newTodo });
      setTodo({
        title: "",
        desc: "",
      });
    }
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="title"
          placeholder="title..."
          onChange={handleChange}
          value={todo.title}
        />
        <input
          type="text"
          name="desc"
          placeholder="description..."
          onChange={handleChange}
          value={todo.desc}
        />
        {editing ? (
          <button onClick={handleUpdate}>Update</button>
        ) : (
          <button>Submit</button>
        )}
      </form>
      <h2 style={{ textAlign: "center", margin: "10px 0px" }}>TODOS LIST :</h2>
      {todos.map((todo) => {
        return <SingleTodo todo={todo} setTodo={setTodo} />;
      })}
    </div>
  );
}

export default Form;
