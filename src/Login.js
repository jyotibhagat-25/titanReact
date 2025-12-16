import React from 'react'
import { Formik, Form, Field } from 'formik';
import * as Yup from 'yup';
import { Col, Container, Row } from 'react-bootstrap';
import './Login.css';

const Login = () => {
       const SignupSchema = Yup.object().shape({
              email: Yup.string().email('Invalid email')
                     .required('Required'),
              password: Yup.number()
                     .required('Required'),
                     // .min(6, 'Minimum value is 6')
                     // .max(1, 'Maximum value is 100')
                     // .positive('Must be a positive number')
                     // .negative('Must be a negative number')
                     // .integer('Must be an integer')
                     // .lessThan(10, 'Must be less than 10')
                     // .moreThan(5, 'Must be more than 5')
                     // .oneOf([1, 2, 3], 'Must be one of: 1, 2, 3'),
       });
       return (
              <div className='text-center'>
                     <section>
                            <Container>
                                   <Row>
                                          <Col>
                                                 <h3>Login</h3>
                                                 <Formik
                                                        initialValues={{
                                                               email: '',
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
                                                                      <div className='loginform'>
                                                                             <Row>
                                                                                    <Col>
                                                                                           <label>Email :- </label>
                                                                                    </Col>
                                                                                    <Col>
                                                                                           <Field name="email" type="email" />
                                                                                           {errors.email && touched.email ? <div>{errors.email}</div> : null}

                                                                                    </Col>
                                                                             </Row>

                                                                             <Row>
                                                                                    <Col>
                                                                                           <label>Password :- </label>
                                                                                    </Col>
                                                                                    <Col>
                                                                                           <Field name="password" type="password" />
                                                                                           {errors.password && touched.password ? <div>{errors.password}</div> : null}

                                                                                    </Col>
                                                                             </Row>
                                                                             <Row>
                                                                                    
                                                                                    <Col>
                                                                                           <p>if not logged in then <a href='Register'>Register</a></p><button type="submit">Submit</button>
                                                                                    </Col>
                                                                             </Row>
                                                                      </div>


                                                               </Form>
                                                        )}
                                                 </Formik>
                                          </Col>
                                   </Row>
                            </Container>
                     </section>
              </div>
       )
}

export default Login
