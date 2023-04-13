import React, { useEffect, useState } from 'react';
import { Formik, Form, Field } from "formik";
import { useNavigate, useParams } from "react-router-dom";
import * as Yup from "yup";
import BookModel from '../models/BookModel';

const rules = Yup.object().shape({
    Title: Yup.string().required('Truong yeu cau').min(3, 'Toi thieu 3 ky tu').max(255, 'Toi da 255'),
});
function BookEdit(props) {
  const navigate = useNavigate();
  const { id } = useParams();
  const [formData, setFormData] = useState({
    Title: ''
  })
  useEffect(() => {
    BookModel.find(id)
      .then((res) => {
        setFormData(res.data);
      })
      .catch((err) => {
        throw err;
      });
  }, []);
  const handleSubmit = (values) => {
    console.log(values);
    let data = {
        Title : values.Title
    }
    BookModel.update(id,data)
      .then((res) => {
        navigate("/");
      })
      .catch((err) => {
        throw err;
      });
    // Làm rỗng formik
  }
  return (
    <div>
      Title: {formData.Title} <br />
      <Formik
       enableReinitialize={true}
        initialValues={formData}
        validationSchema={rules}
        onSubmit={(values) => handleSubmit(values)}
      >
        {({ errors, touched }) => (
        <Form>
          Title
          <Field name="Title" /> <br />
          {errors.Title && touched.Title ? (
            <div>{errors.Title}</div>
          ) : null}
          <button > Register </button>
        </Form>
        )}
      </Formik>
      <h1> BookEdit</h1>
    </div>
  );
}
export default BookEdit;