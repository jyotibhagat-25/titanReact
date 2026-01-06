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
                                                        <Col md={4}>
                                                               <label>Enter Pincode - </label>
                                                        </Col>
                                                        <Col md={8}>
                                                               <Field name="pincode" />
                                                               {errors.pincode && touched.pincode ? (
                                                                      <div>{errors.pincode}</div>
                                                               ) : null}
                                                        </Col>
                                                 </Row>
                                                 <Row>
                                                        
                                                               <Col>
                                                                      <button className="btn btn-service">submit</button>
                                                               </Col>
                                                 
                                                 </Row>
                                                 <Row>

                                                        <Col>

                                                               <a href='Account'><button className="btn btn-service">Account/Login</button></a>
                                                        </Col>

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
