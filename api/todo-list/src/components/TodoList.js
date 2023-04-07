import React from 'react';
import { useState, useEffect } from 'react';
import { fetchTodos, addTodo } from '../services/api';
const TodoList = () => {
    const [todos, setTodos] = useState([]);
    const [task, setTask] = useState('');

    const handleSubmit = async (e) => {
      e.preventDefault();
      if (task) {
        await addTodo(task);
        setTask('');
        alert('Todo added successfully');
      }
    };
    
    return (
      <div>
        <h1>Todo List</h1>
        <form onSubmit={handleSubmit}>
          <label>
            Task:
            <input type="text" name="task" value={task} onChange={(e) => setTask(e.target.value)} />
          </label>
          <button type="submit">Submit</button>
        </form>
        <ul>
          {todos.map((todo) => (
            <li key={todo.id}>{todo.title}</li>
          ))}
        </ul>
      </div>
    );
    
    
  };
  
export default TodoList;
