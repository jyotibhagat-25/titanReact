import React, { useEffect, useState } from 'react'
import { Formik, Form, Field } from 'formik';
import * as Yup from 'yup';
import { Col, Row } from 'react-bootstrap';
import './AddProduct.css';
import axios from 'axios';

const AddProduct = () => {
  const SignupSchema = Yup.object().shape({
    productName: Yup.string()
      .min(2, 'Must be at least 2 characters!')
      .max(50, 'Too Long!')
      .required('Required'),
    productDescription: Yup.string()
      .min(10, 'Too Short!')
      .max(100, 'Too Long!')
      .required('Required'),
    productCategory: Yup.string()
      .min(5, 'Atleast 5 Character!')
      .max(50, 'Too Long!')
      // .test(
      //   "checkDuplicateCategory",
      //   "Category Name already exists",
      //   async function (value) {
      //     if (!value) return false;
      //     const exists = await checkNameExists(value);
      //     return !exists;
      //   }
      // )
      .required('Required'),

    productPrice: Yup.number()
      .min(99, 'Minimum value is 99')
      .max(10000, 'Maximum value is 100000')
      .required('Required'),


  });
  const [categories, setCategories] = useState();

  useEffect(() => {
    axios.get("http://localhost:8090/api/cats").then((response) => {
      console.log(response.data);
      setCategories(response.data)
    });

  }, []);
  // const checkNameExists = async (name) => {
  //   // API call
  //   const response = await fetch(`http://localhost:8090/api/cats/check?name=${name} `);
  //   const data = await response.json();
  //   return data.exists; // Should return true if name exists
  // };


  return (
    <div className='text-center'>
      <h3>AddProduct</h3>
      <Formik
        initialValues={{
          productName: '',
          productDescription: '',
          productCategory: '',
          productPrice: '',
        }}
        validationSchema={SignupSchema}
        onSubmit={values => {
          // same shape as initial values
          console.log(values);
        }}
      >
        {({ errors, touched }) => (
          <Form>
            <div className='productform'>
              <Row>
                <Col md={4}>
                  <label>ProductName : </label>
                </Col>
                <Col md={8}>

                  <Field name="productName" />
                  {errors.productName && touched.productName ? (
                    <div>{errors.productName}</div>
                  ) : null}
                </Col>
              </Row>

              <Row>
                <Col md={4}>
                  <label>ProductDescription : </label>
                </Col>
                <Col md={8}>

                  <Field name="productDescription" />
                  {errors.productDescription && touched.productDescription ? (
                    <div>{errors.productDescription}</div>
                  ) : null}
                </Col>
              </Row>
              <Row>
                <Col md={4}>
                  <label>ProductCategory : </label>
                </Col>
                <Col md={8}>

                  <Field name="productCategory" />
                  <option></option>
                  {errors.productCategory && touched.productCategory ? (
                    <div>{errors.productCategory}</div>
                  ) : null}
                </Col>
              </Row>

              <Row>
                <Col md={4}>
                  <label>ProductPrice : </label>
                </Col>
                <Col md={8}>

                  <Field name="productPrice" />
                  {errors.productPrice && touched.productPrice ? (
                    <div>{errors.productPrice}</div>
                  ) : null}
                </Col>
              </Row>

              <Row>
                <Col>
                  <button class="btn btn-product">Add</button>

                </Col>
              </Row>
            </div>
          </Form>
        )}
      </Formik>
    </div>
  )
}

export default AddProduct
