import React from 'react'
import { Formik, Form, Field } from 'formik';
import * as Yup from 'yup';

const Service = () => {
       const SignupSchema = Yup.object().shape({
              pincode: Yup.number()
                     .max(6, '6 digit pin')
                     .required('Required'),
              // lastName: Yup.string()
              //        .min(2, 'Too Short!')
              //        .max(50, 'Too Long!')
              //        .required('Required'),
              // email: Yup.string().email('Invalid email').required('Required'),
       });
       return (
              <div>
                     <h1>Services</h1>
                     <Formik
                            initialValues={{
                                   firstName: ''
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
                                          <Field name="pincode" />
                                          {errors.pincode && touched.pincode ? (
                                                 <div>{errors.pincode}</div>
                                          ) : null}
                                          <button type="submit">Submit</button>
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
