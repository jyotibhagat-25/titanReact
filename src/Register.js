import React from 'react'
import { Formik, Form, Field } from 'formik';
import * as Yup from 'yup';
import { Col, Row } from 'react-bootstrap';

const SignupSchema = Yup.object().shape({
       firstName: Yup.string()
              .min(2, 'Too Short!')
              .max(50, 'Too Long!')
              .required('Required'),
       lastName: Yup.string()
              .min(2, 'Too Short!')
              .max(50, 'Too Long!')
              .required('Required'),
       email: Yup.string().email('Invalid email')
              .required('Required'),
       password: Yup.number()
              // .min(10, 'Too Short!')
              // .max(50, 'Too Long!')
              .required('Required'),
       mobile: Yup.number()
              // .min(10, 'Too Short!')
              // .max(50, 'Too Long!')
              .required('Required'),
});

const Register = () => {
       return (
              <div className='text-center'>
                     <h3>___Register___</h3>
                     <Formik
                            initialValues={{
                                   firstName: '',
                                   lastName: '',
                                   email: '',
                                   password: '',
                                   mobile: '',

                            }}
                            validationSchema={SignupSchema}
                            onSubmit={values => {
                                   // same shape as initial values
                                   console.log(values);
                            }}
                     >
                            {({ errors, touched }) => (
                                   <Form>
                                          <div className='registerform'>
                                                 <Row>
                                                        <Col>
                                                               <label>FirstName : </label>
                                                        </Col>
                                                        <Col>
                                                               <Field name="firstName" />
                                                               {errors.firstName && touched.firstName ? (
                                                                      <div>{errors.firstName}</div>
                                                               ) : null}
                                                        </Col>
                                                 </Row>

                                                 <Row>
                                                        <Col>
                                                               <label>LastName : </label>
                                                        </Col>
                                                        <Col>
                                                               <Field name="lastName" />
                                                               {errors.lastName && touched.lastName ? (
                                                                      <div>{errors.lastName}</div>
                                                               ) : null}
                                                        </Col>
                                                 </Row>

                                                 <Row>
                                                        <Col>
                                                               <label>Email : </label>
                                                        </Col>
                                                        <Col>
                                                               <Field name="email" type="email" />
                                                               {errors.email && touched.email ? <div>{errors.email}</div> : null}
                                                        </Col>
                                                 </Row>

                                                 <Row>
                                                        <Col>
                                                               <label>Password</label>
                                                        </Col>
                                                        <Col>
                                                               <Field name="password" type="password" />
                                                               {errors.password && touched.password ? <div>{errors.password}</div> : null}
                                                        </Col>
                                                 </Row>

                                                 <Row>
                                                        <Col>
                                                               <label>Mobile : </label>
                                                        </Col>
                                                        <Col>
                                                               <Field name="mobile" type="number" />
                                                               {errors.mobile && touched.mobile ? <div>{errors.mobile}</div> : null}
                                                        </Col>
                                                 </Row>
                                                 <Row>
                                                        <Col>
                                                              <p>if already register <a href='Login'>login</a></p> <button type="submit">Submit</button>
                                                        </Col>
                                                 </Row>
                                          </div>
                                   </Form>
                            )}
                     </Formik>
              </div>
       )
}

export default Register
