import React, { useEffect, useState } from "react";
import BookModel from "../models/BookModel";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import Swal from "sweetalert2";

function Books(props) {
  const navigate = useNavigate();
  const [books, setBooks] = useState([]);
  useEffect(() => {
    BookModel.getAll()
      .then((res) => {
        setBooks(res.data);
      })
      .catch((err) => {
        throw err;
      });
  }, []);

  const handleDelete = (id) => {
    Swal.fire({
      title: 'Bạn có chắc muốn xóa không?',
      icon: 'warning',
      showCancelButton: true,
      confirmButtonText: 'Có',
      cancelButtonText: 'Không',
    }).then((result) => {
      if (result.isConfirmed) {
        BookModel.delete(id)
          .then((res) => {
            Swal.fire({
              icon: 'success',
              title: 'Xóa thành công!',
              showConfirmButton: false,
              timer: 1500
            });
            setBooks(books.filter((book) => book.id !== id));
          })
          .catch((err) => {
            console.log(err);
            alert("Đã có lỗi xảy ra!");
          });
      }
    });
  };

  return (
    <div>
      <Link to = "/books/create" className="btn btn-primary">Thêm mới</Link>
      <table border={1} width={"100%"}>
        <thead>
          <tr>
            <th> Title </th>
            <th> Quantity </th>
            <th> Action </th>
          </tr>
        </thead>
        <tbody>
          {books.map((book, key) => (
            <tr key={key}>
              <td>{book.Title}</td>
              <td>{book.Quantity}</td>
              <td>
                <Link to={"/Books/" + book.id} className="btn btn-success">Xem</Link>|
                <Link to={"/Books/" + book.id + "/edit"}className="btn btn-primary">Sửa</Link>|
                <button id="button2" onClick={() => handleDelete(book.id)} className="btn btn-danger">Xóa</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
export default Books;
