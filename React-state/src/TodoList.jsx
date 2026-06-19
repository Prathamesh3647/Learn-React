import { useState } from "react";
export default function TodoList() {
  let [tasks, setTasks] = useState(["Sample task"]);
  let [todo, setTodo] = useState("");
  let addNewTask = () => {
    setTasks([...tasks, todo]);
  };
  let updateTodoValue = (event) => {
    setTodo(event.target.value);
  };
  return (
    <div>
      <h3>Add tasks </h3>
      <input
        type="text"
        placeholder="Add task"
        value={todo}
        onChange={updateTodoValue}
      />
      <button type="button" onClick={addNewTask}>
        Add
      </button>
      <br />
      <ul>
        {tasks.map((task) => (
          <li>{task}</li>
        ))}
      </ul>
    </div>
  );
}
