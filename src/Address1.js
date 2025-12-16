import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import Button from 'react-bootstrap/Button';
// import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';
// import Row from 'react-bootstrap/Row';
import * as formik from 'formik';
import * as yup from 'yup';
import './Address1.css';

const Address1 = () => {

       const { Formik } = formik;

       const schema = yup.object().shape({
              firstName: yup.string().required(),
              username: yup.string().required(),
              city: yup.string().required(),
              state: yup.string().required(),
              district: yup.string().required(),
              mobile: yup.number().required(),
              terms: yup.bool().required().oneOf([true], 'Terms must be accepted'),
       });
       return (
              <div className='text-center'>
                     <Row>
                            <Col>
                                   <div >
                                          <h3>Address</h3>
                                          <Formik
                                                 validationSchema={schema}
                                                 onSubmit={console.log}
                                                 initialValues={{
                                                        firstName: '',
                                                        username: '',
                                                        city: '',
                                                        state: '',
                                                        district: '',
                                                        mobile: '',
                                                        terms: false,
                                                 }}
                                          >
                                                 {({ handleSubmit, handleChange, values, touched, errors }) => (
                                                        <div className='addressform'>
                                                               <Form noValidate onSubmit={handleSubmit}>
                                                                      <Row className="mb-3">
                                                                             <Form.Group as={Col} md="4" controlId="validationFormik01">
                                                                                    <Form.Label>Full Name</Form.Label>
                                                                                    <Form.Control
                                                                                           type="text"
                                                                                           name="firstName"
                                                                                           placeholder="Enter your name"
                                                                                           value={values.firstName}
                                                                                           onChange={handleChange}
                                                                                           isValid={touched.firstName && !errors.firstName}
                                                                                    />

                                                                             </Form.Group>

                                                                             <Form.Group as={Col} md="4" controlId="validationFormikUsername">
                                                                                    <Form.Label>Username</Form.Label>
                                                                                    <InputGroup hasValidation>
                                                                                           <InputGroup.Text id="inputGroupPrepend">@</InputGroup.Text>
                                                                                           <Form.Control
                                                                                                  type="text"
                                                                                                  placeholder="Username"
                                                                                                  aria-describedby="inputGroupPrepend"
                                                                                                  name="username"
                                                                                                  value={values.username}
                                                                                                  onChange={handleChange}
                                                                                                  isInvalid={!!errors.username}
                                                                                           />
                                                                                           <Form.Control.Feedback type="invalid">
                                                                                                  {errors.username}
                                                                                           </Form.Control.Feedback>
                                                                                    </InputGroup>
                                                                             </Form.Group>
                                                                      </Row>
                                                                      <Row className="mb-3">
                                                                             <Form.Group as={Col} md="6" controlId="validationFormik03">
                                                                                    <Form.Label>City</Form.Label>
                                                                                    <Form.Control
                                                                                           type="text"
                                                                                           placeholder="City"
                                                                                           name="city"
                                                                                           value={values.city}
                                                                                           onChange={handleChange}
                                                                                           isInvalid={!!errors.city}
                                                                                    />

                                                                                    <Form.Control.Feedback type="invalid">
                                                                                           {errors.city}
                                                                                    </Form.Control.Feedback>
                                                                             </Form.Group>
                                                                             <Form.Group as={Col} md="3" controlId="validationFormik04">
                                                                                    <Form.Label>State</Form.Label>
                                                                                    <Form.Control
                                                                                           type="text"
                                                                                           placeholder="State"
                                                                                           name="state"
                                                                                           value={values.state}
                                                                                           onChange={handleChange}
                                                                                           isInvalid={!!errors.state}
                                                                                    />
                                                                                    <Form.Control.Feedback type="invalid">
                                                                                           {errors.state}
                                                                                    </Form.Control.Feedback>
                                                                             </Form.Group>
                                                                             <Form.Group as={Col} md="3" controlId="validationFormik04">
                                                                                    <Form.Label>District</Form.Label>
                                                                                    <Form.Control
                                                                                           type="text"
                                                                                           placeholder="district"
                                                                                           name="district"
                                                                                           value={values.district}
                                                                                           onChange={handleChange}
                                                                                           isInvalid={!!errors.district}
                                                                                    />
                                                                                    <Form.Control.Feedback type="invalid">
                                                                                           {errors.district}
                                                                                    </Form.Control.Feedback>
                                                                             </Form.Group>
                                                                             <Form.Group as={Col} md="3" controlId="validationFormik04">
                                                                                    <Form.Label>Mobile</Form.Label>
                                                                                    <Form.Control
                                                                                           type="number"
                                                                                           placeholder="mobile"
                                                                                           name="mobile"
                                                                                           value={values.mobile}
                                                                                           onChange={handleChange}
                                                                                           isInvalid={!!errors.mobile}
                                                                                    />
                                                                                    <Form.Control.Feedback type="invalid">
                                                                                           {errors.mobile}
                                                                                    </Form.Control.Feedback>
                                                                             </Form.Group>

                                                                      </Row>
                                                                      <Form.Group className="mb-3">
                                                                             <Form.Check
                                                                                    required
                                                                                    name="terms"
                                                                                    label="Agree to terms and conditions"
                                                                                    onChange={handleChange}
                                                                                    isInvalid={!!errors.terms}
                                                                                    feedback={errors.terms}
                                                                                    feedbackType="invalid"
                                                                                    id="validationFormik0"
                                                                             />
                                                                      </Form.Group>
                                                                      <div className='submit-btn'>
                                                                             <Button type="submit">Submit</Button>
                                                                      </div>
                                                               </Form>
                                                        </div>
                                                 )}
                                          </Formik>
                                   </div>
                            </Col>
                     </Row>

              </div>
       )
}

export default Address1
