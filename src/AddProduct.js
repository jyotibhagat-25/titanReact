import React from 'react'
import { Formik, Form, Field } from 'formik';
import * as Yup from 'yup';
import { Col, Row } from 'react-bootstrap';
import './AddProduct.css';

const AddProduct = () => {
  const SignupSchema = Yup.object().shape({
    ProductName: Yup.string()
      .min(2, 'Must be at least 2 characters!')
      .max(50, 'Too Long!')
      .required('Required'),
    ProductDescription: Yup.string()
      .min(10, 'Too Short!')
      .max(100, 'Too Long!')
      .required('Required'),
    ProductCategory: Yup.string()
      .min(5, 'Atleast 5 Character!')
      .max(50, 'Too Long!')
      .required('Required'),
    Gender: Yup.string()
      .min(3, 'Atleast 3 Character!')
      .max(10, 'Too Long!')
      .required('Required'),
    ProductPrice: Yup.number()
      .min(99, 'Minimum value is 99')
      .max(10000, 'Maximum value is 10000')
      .required('Required'),


  });

  return (
    <div className='text-center'>
      <h3>AddProduct</h3>
      <Formik
        initialValues={{
          ProductName: '',
          ProductDescription: '',
          ProductCategory: '',
          Gender: '',
          ProductPrice: '',
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
                <Col>
                  <label>ProductName : </label>
                </Col>
                <Col>

                  <Field name="ProductName" />
                  {errors.ProductName && touched.ProductName ? (
                    <div>{errors.ProductName}</div>
                  ) : null}
                </Col>
              </Row>

              <Row>
                <Col>
                <label>ProductDescription : </label>
                </Col>
                <Col>
                  
                  <Field name="ProductDescription" />
                  {errors.ProductDescription && touched.ProductDescription ? (
                    <div>{errors.ProductDescription}</div>
                  ) : null}
                </Col>
              </Row>
              <Row>
                <Col>
                <label>ProductCategory : </label>
                </Col>
                <Col>
                  
                  <Field name="ProductCategory" />
                  {errors.ProductCategory && touched.ProductCategory ? (
                    <div>{errors.ProductCategory}</div>
                  ) : null}
                </Col>
              </Row>
              <Row>
                <Col>
                <label>Gender : </label>
                </Col>
                <Col>
                  
                  <Field name="Gender" />
                  {errors.Gender && touched.Gender ? (
                    <div>{errors.Gender}</div>
                  ) : null}
                </Col>
              </Row>
              <Row>
                <Col>
                <label>ProductPrice : </label>
                </Col>
                <Col>
                  
                  <Field name="ProductPrice" />
                  {errors.ProductPrice && touched.ProductPrice ? (
                    <div>{errors.ProductPrice}</div>
                  ) : null}
                </Col>
              </Row>

              <Row>
                <Col>
                  <button type="submit">Submit</button>
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
