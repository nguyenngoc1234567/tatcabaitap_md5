import React, { useState } from "react";
import axios from "axios";

function App() {
  const [todoList, setTodoList] = useState([]);
  const [inputText, setInputText] = useState("");

  const handleSubmit = async (event) => {
    event.preventDefault();

    try {
      const response = await axios.post(
        "https://jsonplaceholder.typicode.com/todos",
        { title: inputText, completed: false }
      );

      alert(`Status: ${response.status}`);
      setInputText("");
    } catch (error) {
      alert(error.message);
    }
  };

  const handleChange = (event) => {
    setInputText(event.target.value);
  };

  return (
    <div>
      <h1>Todo List</h1>
      <form onSubmit={handleSubmit}>
        <input type="text" value={inputText} onChange={handleChange} />
        <button type="submit">Submit</button>
      </form>
      <ul>
        {todoList.map((todo) => (
          <li key={todo.id}>{todo.title}</li>
        ))}
      </ul>
    </div>
  );
}
export default App;
