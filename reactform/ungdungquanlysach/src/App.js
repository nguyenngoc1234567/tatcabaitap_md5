import React, { useState } from 'react';

function App() {
  const [books, setBooks] = useState([]);
  const [title, setTitle] = useState('');
  const [quantity, setQuantity] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();
    if (title.trim() === '') {
      alert('Title is required');
      return;
    }
    if (isNaN(quantity)) {
      alert('Quantity must be a number');
      return;
    }
    const newBook = { title, quantity };
    setBooks([...books, newBook]);
    setTitle('');
    setQuantity('');
  };

  const handleTitleChange = (event) => {
    setTitle(event.target.value);
  };

  const handleQuantityChange = (event) => {
    setQuantity(event.target.value);
  };
  const handleDelete = (index) => {
    const updatedBooks = [...books];
    updatedBooks.splice(index, 1);
    setBooks(updatedBooks);
  };
  return (
    <div>
      <h1>Books</h1>
      <form onSubmit={handleSubmit}>
        <label htmlFor="title">Title:</label>
        <input
          id="title"
          type="text"
          value={title}
          onChange={handleTitleChange}
        />
        <br />
        <label htmlFor="quantity">Quantity:</label>
        <input
          id="quantity"
          type="text"
          value={quantity}
          onChange={handleQuantityChange}
        />
        <br />
        <button type="submit">Submit</button>
      </form>
      <table>
        <thead>
          <tr>
            <th>Title</th>
            <th>Quantity</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {books.map((book, index) => (
            <tr key={index}>
              <td>{book.title}</td>
              <td>{book.quantity}</td>
              <td>
                <button>Edit</button>
                <button onClick={() => handleDelete(index)}>Delete</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
export default App;
