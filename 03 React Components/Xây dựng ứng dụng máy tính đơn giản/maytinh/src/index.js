import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
// import Calculator from './Calculator';
import StudentInfoComponent from './component/StudentInfoComponent';

// import './Calculator';
import reportWebVitals from './reportWebVitals';

// const root = ReactDOM.createRoot(document.getElementById('root'));
// root.render(
//   <React.StrictMode>
 
//     <StudentInfoComponent/>

//   </React.StrictMode>
// );
const students = [
  { id: 1, name: "phongcute", age: 25, address: "Quần Đảo Hoàng Sa" },
  { id: 2, name: "nhocute", age: 31, address: "Miền Tây Nam Bộ" },
  { id: 3, name: "Ngoc", age: 22, address: "aaaa" },
];
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <StudentInfoComponent students={students}/>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
