import './index.css';

import React from "react";  // import thư viện react
import ReactDOM from "react-dom/client"; // import thư viện react-dom/client

// // Tạo component App
// function App() {
//   return (
//     <div>
//       <h1>Hello World!</h1>
//     </div>
//   );
// }

// // Render component App vào "root"
// const root = ReactDOM.createRoot(document.getElementById("root"));
// root.render(<App />);
//  thuchanh2
// const name = "Your name";

// const root = ReactDOM.createRoot(document.getElementById("root"));

// root.render(<h1 style={{ textAlign: "center" }}>{name}</h1>);



// thuchanh3

//  const fruits = ['táo', 'chuối', 'cam', 'xoài', 'mít']
//  const root = ReactDOM.createRoot(document.getElementById("root"));
//  root.render(
//   <div>
//     <h1>danh sách trái cây </h1>
//     <ul>
//       {fruits.map(item => (
//         <li>{item}</li>
//       ))}
//     </ul>
//   </div>
// );
// thuchanh3
// const root = ReactDOM.createRoot(document.getElementById("root"));

// const tick = () => {
// root.render(
//     <div>
//       <h1>Hello, world!</h1>
//       <h2>It is {new Date().toLocaleTimeString()}.</h2>
//     </div>
//   );
// };
//   setInterval(tick, 1000);

// baitap
// Render component App vào "root"
// const root = ReactDOM.createRoot(document.getElementById("root"));
// root.render(
//   <h4>Browser's details: {navigator.userAgent}</h4>
//   );
// baitap2
const students = [
  {
    company: 'Alfreds Futterkiste',
    contact: 'Maria Anders',
    country: 'Germany'
  },
  {
    company: 'Centro comercial Moctezuma',
    contact: 'Francisco Chang',
    country: 'Mexico'
  },
  {
    company: 'Ernst Handel',
    contact: 'Roland Mendel',
    country: 'Austria'
  },
  {
    company: 'Island Trading',
    contact: 'Helen Bennett',
    country: 'UK'
  },
  {
    company: 'Laughing Bacchus Winecellars',
    contact: 'Yoshi Tannamuri',
    country: 'Canada'
  },
  {
    company: 'Magazzini Alimentari Riuniti',
    contact: 'Giovanni Rovelli',
    country: 'Italy'
  }
]
 const root = ReactDOM.createRoot(document.getElementById("root"));

 root.render(
<table>
  <tr>
    <th>Company</th>
    <th>Contact</th>
    <th>Country</th>
  </tr>

   {students.map(student => (
  <tr>
    <td>{student.company}</td>
    <td>{student.contact}</td>
    <td>{student.country}</td>
  </tr>
))}
 
</table>

)