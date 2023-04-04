import React, { useState } from 'react';
import { Formik } from 'formik';
import "./App.css";

const REGEX = {
  email: /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/,
};

function App() {
  const [form, setForm] = useState({});
  const [errors, setErrors] = useState({});

  const handleChange = (event) => {
    const { name, value } = event.target;
    setForm({ ...form, [name]: value });
  };

  const handleValidate = (values) => {
    const errors = {};
    if (!values.name) {
      errors.name = "yêu cầu nhập name";
    }
    if (!values.email) {
      errors.email = "yêu cầu nhập email";
    } else if (!REGEX.email.test(values.email)) {
      errors.email = "địa chỉ email không hợp lệ";
    }
    if (!values.phone) {
      errors.phone = "yêu cầu nhập phone";
    }
    setErrors(errors);
    return errors;
  };
  const handleSubmit = (values) => {
    alert("Contact added successfully!");
  };

  return (
    <div className="App">
      <Formik
        initialValues={form}
        validate={handleValidate}
        onSubmit={handleSubmit}
      >
        {({ values, errors, handleSubmit, handleChange }) => (
          <form onSubmit={handleSubmit}>
            <input
              type="text"
              name="name"
              placeholder="Name"
              value={values.name || ""}
              onChange={handleChange}
            />
            {errors.name && <div className="error">{errors.name}</div>}
            <input
              type="email"
              name="email"
              placeholder="Email"
              value={values.email || ""}
              onChange={handleChange}
            />
            {errors.email && <div className="error">{errors.email}</div>}
            <input
              type="tel"
              name="phone"
              placeholder="Phone"
              value={values.phone || ""}
              onChange={handleChange}
            />
            {errors.phone && <div className="error">{errors.phone}</div>}
            <button type="submit">Add Contact</button>
          </form>
        )}
      </Formik>
    </div>
  );
}

export default App;
