import React from 'react'
import { Formik, Form, Field } from 'formik';
import * as Yup from 'yup';
import { Col, Row } from 'react-bootstrap';
import './Service.css';

const Service = () => {
       const SignupSchema = Yup.object().shape({
              pincode: Yup.number()
                     // .max(6, '6 digit pin')
                     .required('Required'),
              // lastName: Yup.string()
              //        .min(2, 'Too Short!')
              //        .max(50, 'Too Long!')
              //        .required('Required'),
              // email: Yup.string().email('Invalid email').required('Required'),
       });
       return (
              <div className='text-center'>
                     <h3>Services</h3>
                     <Formik
                            initialValues={{
                                   pincode: ''
                                   // lastName: '',
                                   // email: '',
                            }}
                            validationSchema={SignupSchema}
                            onSubmit={values => {
                                   // same shape as initial values
                                   console.log(values);
                            }}
                     >
                            {({ errors, touched }) => (
                                   <Form>
                                          <div className='service-form'>
                                                 <Row>
                                                        <Col>
                                                               <label>Enter Pincode - </label>
                                                        </Col>
                                                        <Col>
                                                               <Field name="pincode" />
                                                               {errors.pincode && touched.pincode ? (
                                                                      <div>{errors.pincode}</div>
                                                               ) : null}
                                                        </Col>
                                                 </Row>
                                                 <Row>
                                                        <div className='submit-button'>
                                                               <Col>
                                                                      <button type="submit">Submit</button>
                                                               </Col>
                                                        </div>
                                                 </Row>
                                                 <Row>
                                                        <div className='submit-button'>
                                                               <Col>
                                                                      <a href='Account'><button type='submit'>Admin/Login</button></a>
                                                               </Col>
                                                        </div>
                                                 </Row>

                                          </div>
                                          {/* <Field name="lastName" />
                                          {errors.lastName && touched.lastName ? (
                                                 <div>{errors.lastName}</div>
                                          ) : null}
                                          <Field name="email" type="email" />
                                          {errors.email && touched.email ? <div>{errors.email}</div> : null}
                                          <button type="submit">Submit</button> */}
                                   </Form>
                            )}
                     </Formik>
              </div>
       )
}

export default Service
