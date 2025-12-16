import React from 'react'
import { Formik, Form, Field } from 'formik';
import * as Yup from 'yup';
import { Col, Row } from 'react-bootstrap';
import './Addcategory.css';

const AddCategory = () => {
       const SignupSchema = Yup.object().shape({
              category: Yup.string()
                     .min(2, 'Too Short!')
                     .max(50, 'Too Long!')
                     .required('Required'),

       });
       return (
              <div className='text-center'>
                     <h3>Add Category</h3>
                     <Formik
                            initialValues={{
                                   category: '',

                            }}
                            validationSchema={SignupSchema}
                            onSubmit={values => {
                                   // same shape as initial values
                                   console.log(values);
                            }}
                     >
                            {({ errors, touched }) => (
                                   <Form>
                                          <div className='add-category'>
                                                 <Row>
                                                        <Col>
                                                        <label>Category :- </label>
                                                        </Col>
                                                        <Col>
                                                               <Field name="Category" />
                                                               {errors.category && touched.category ? (
                                                                      <div>{errors.firstName}</div>
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

export default AddCategory
