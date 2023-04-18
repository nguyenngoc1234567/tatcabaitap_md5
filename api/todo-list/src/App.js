import React, { useState, useEffect } from 'react';
import axios from 'axios';

function App() {
  const [todos, setTodos] = useState([]);
  const [newTodo, setNewTodo] = useState('');

  useEffect(() => {
    axios.get('https://jsonplaceholder.typicode.com/todos')
      .then(response => {
        setTodos(response.data);
      })
      .catch(error => {
        console.log(error);
      });
  }, []);

  const handleNewTodoChange = (event) => {
    setNewTodo(event.target.value);
  };

  const handleNewTodoSubmit = (event) => {
    event.preventDefault();

    const data = {
      title: newTodo,
      completed: false
    };
// goi api để them mới todo 
    axios.post('https://jsonplaceholder.typicode.com/todos', data)
      .then(response => {
        console.log(response);
        setTodos([...todos, response.data]);
        setNewTodo('');
      })
      .catch(error => {
        console.log(error);
      });
  };

  const handleTodoDelete = (id) => {
    axios.delete(`https://jsonplaceholder.typicode.com/todos/${id}`)
      .then(response => {
        console.log(response);
        const updatedTodos = todos.filter(todo => todo.id !== id);
        setTodos(updatedTodos);
      })
      .catch(error => {
        console.log(error);
      });
  };

  return (
    <div className="App">
      <h1>Todo List</h1>
      <form onSubmit={handleNewTodoSubmit}>
        <input type="text" value={newTodo} onChange={handleNewTodoChange} placeholder="Enter a new todo" />
        <button type="submit">Add</button>
      </form>
      <ul>
        {todos.map(todo => (
          <li key={todo.id}>
            {todo.title}
            <button onClick={() => handleTodoDelete(todo.id)}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;
