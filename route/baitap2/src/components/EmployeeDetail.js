import React from 'react';
import { useParams } from 'react-router-dom';
function EmployeeDetail() {
  const { id } = useParams();
  const employees = [
    { id: 1, name: "nho", age: 14, address: "lào" },
    { id: 2, name: "ngọc", age: 25, address: "lào" },
    { id: 3, name: "phong", age: 22, address: "lào" }
  ];
  const employee = employees.find(emp => emp.id === parseInt(id));
  if (!employee) {
    return <p>Không tìm thấy nhân viên</p>;
  }
  return (
    <div>
      <h2>Thông tin nhân viên</h2>
      <p>ID: {employee.id}</p>
      <p>Tên: {employee.name}</p>
      <p>Tuổi: {employee.age}</p>
      <p>Địa chỉ: {employee.address}</p>
    </div>
  );
}
export default EmployeeDetail;