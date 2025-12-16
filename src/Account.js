import React from 'react'
import { Formik, Form, Field } from 'formik';
import * as Yup from 'yup';
import { Col, Row } from 'react-bootstrap';
import './Account.css';

const Account = () => {
       const SignupSchema = Yup.object().shape({
              username: Yup.string()
                     .min(3, 'Must be at least 3 characters!')
                     .max(30, 'Must be at most 30 characters!')
                     .required('Required'),
              password: Yup.number()
                     .required('Required'),

       });
       return (
              <div className='text-center'>
                     <h3>Account</h3>
                     <Formik
                            initialValues={{
                                   username: '',
                                   password: '',

                            }}
                            validationSchema={SignupSchema}
                            onSubmit={values => {
                                   // same shape as initial values
                                   console.log(values);
                            }}
                     >
                            {({ errors, touched }) => (
                                   <Form>
                                          <div className='form'>
                                                 <Row>
                                                        <Col>
                                                               <label>Username:</label>
                                                        </Col>
                                                        <Col>
                                                               <Field name="username" />
                                                               {errors.username && touched.username ? (
                                                                      <div>{errors.username}</div>
                                                               ) : null}
                                                        </Col>
                                                 </Row>
                                                 <Row>
                                                        <Col>
                                                               <label>Password:</label>
                                                        </Col>
                                                        <Col>
                                                               <Field name="password" />
                                                               {errors.password && touched.password ? (
                                                                      <div>{errors.password}</div>
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

export default Account
