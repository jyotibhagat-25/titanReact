import React, { useEffect } from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import Button from 'react-bootstrap/Button';
// import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';
// import Row from 'react-bootstrap/Row';
import * as formik from 'formik';
import * as yup from 'yup';
import './Address1.css';
import { useSelector, useDispatch } from "react-redux";
import { useNavigate } from "react-router";
import { FaPlus } from "react-icons/fa6";
 

const Address1 = () => {

       const { Formik } = formik;

       const schema = yup.object().shape({
              firstName: yup.string().required(),
              addressLine1: yup.string().required(),
              addressLine2: yup.string().required(),
              city: yup.string().required(),
              district: yup.string().required(),
              state: yup.string().required(),
              pincode: yup.string().required(),
              mobile: yup.number().required(),
              email: yup.string().email("Invalid email").required("Required"),
              addressType: yup.string().required("Required"),
              terms: yup.bool().required().oneOf([true], 'Terms must be accepted'),
       });
       let navigate = useNavigate();
       const dispatch = useDispatch();
       const { user: currentUser } = useSelector((state) => state.auth);

       // This is for user id

       useEffect(() => {
              if (currentUser) {
                     console.log(currentUser);

              }

       }, []);
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
                                                        addressLine1: '',
                                                        addressLine2: '',
                                                        city: '',
                                                        district: '',
                                                        state: '',
                                                        pincode: '',
                                                        mobile: '',
                                                        email: '',
                                                        addressType: '',

                                                        terms: false,
                                                 }}
                                          >
                                                 {({ handleSubmit, handleChange, values, touched, errors }) => (
                                                        <div className='addressform'>
                                                               <Form noValidate onSubmit={handleSubmit}>
                                                                      <Row className="mb-3">
                                                                             <Form.Group as={Col} md="12" controlId="validationFormik01">
                                                                                    <Row>
                                                                                           <Col md={4}>
                                                                                                  <Form.Label>Full Name</Form.Label>
                                                                                           </Col>
                                                                                           <Col md={8}>
                                                                                                  <Form.Control
                                                                                                         type="text"
                                                                                                         name="firstName"
                                                                                                         placeholder="Enter your name"
                                                                                                         value={values.firstName}
                                                                                                         onChange={handleChange}
                                                                                                         isValid={touched.firstName && !errors.firstName}
                                                                                                  />
                                                                                           </Col>
                                                                                    </Row>


                                                                             </Form.Group>

                                                                             <Form.Group as={Col} md="12" controlId="validationFormikUsername">
                                                                                    <Row>
                                                                                           <Col md={4}>
                                                                                                  <Form.Label>Address Line1</Form.Label>
                                                                                           </Col>
                                                                                           <Col md={8}>
                                                                                                  <InputGroup hasValidation>
                                                                                                         {/* <InputGroup.Text id="inputGroupPrepend">@</InputGroup.Text> */}
                                                                                                         <Form.Control
                                                                                                                type="text"
                                                                                                                placeholder="address_line1"
                                                                                                                aria-describedby="inputGroupPrepend"
                                                                                                                name="addressLine1"
                                                                                                                value={values.addressLine1}
                                                                                                                onChange={handleChange}
                                                                                                                isInvalid={!!errors.addressLine1}
                                                                                                         />
                                                                                                         <Form.Control.Feedback type="invalid">
                                                                                                                {errors.addressLine1}
                                                                                                         </Form.Control.Feedback>
                                                                                                  </InputGroup>
                                                                                           </Col>
                                                                                    </Row>

                                                                             </Form.Group>
                                                                             <Form.Group as={Col} md="12" controlId="validationFormik04">
                                                                                    <Row>
                                                                                           <Col md={4}>
                                                                                                  <Form.Label>Address Line2</Form.Label>
                                                                                           </Col>
                                                                                           <Col md={8}>
                                                                                                  <Form.Control
                                                                                                         type="text"
                                                                                                         placeholder="address_line2"
                                                                                                         name="addressLine2"
                                                                                                         value={values.addressLine2}
                                                                                                         onChange={handleChange}
                                                                                                         isInvalid={!!errors.addressLine2}
                                                                                                  />
                                                                                                  <Form.Control.Feedback type="invalid">
                                                                                                         {errors.addressLine2}
                                                                                                  </Form.Control.Feedback>
                                                                                           </Col>
                                                                                    </Row>

                                                                             </Form.Group>
                                                                      </Row>
                                                                      <Row className="mb-3">
                                                                             <Form.Group as={Col} md="12" controlId="validationFormik03">
                                                                                    <Row>
                                                                                           <Col md={4}>
                                                                                                  <Form.Label>City</Form.Label>
                                                                                           </Col>
                                                                                           <Col md={8}>
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
                                                                                           </Col>
                                                                                    </Row>

                                                                             </Form.Group>

                                                                             <Form.Group as={Col} md="12" controlId="validationFormik04">
                                                                                    <Row>
                                                                                           <Col md={4}>
                                                                                                  <Form.Label>District</Form.Label>
                                                                                           </Col>
                                                                                           <Col md={8}>
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
                                                                                           </Col>
                                                                                    </Row>

                                                                             </Form.Group>
                                                                             <Form.Group as={Col} md="12" controlId="validationFormik04">
                                                                                    <Row>
                                                                                           <Col md={4}>
                                                                                                  <Form.Label>State</Form.Label>
                                                                                           </Col>
                                                                                           <Col md={8}>
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
                                                                                           </Col>
                                                                                    </Row>

                                                                             </Form.Group>


                                                                      </Row>

                                                                      <Form.Group as={Col} md="12" controlId="validationFormik04">
                                                                             <Row>
                                                                                    <Col md={4}>
                                                                                           <Form.Label>Pincode</Form.Label>
                                                                                    </Col>
                                                                                    <Col md={8}>
                                                                                           <Form.Control
                                                                                                  type="number"
                                                                                                  placeholder="pincode"
                                                                                                  name="pincode"
                                                                                                  value={values.pincode}
                                                                                                  onChange={handleChange}
                                                                                                  isInvalid={!!errors.pincode}
                                                                                           />
                                                                                           <Form.Control.Feedback type="invalid">
                                                                                                  {errors.pincode}
                                                                                           </Form.Control.Feedback>
                                                                                    </Col>
                                                                             </Row>

                                                                      </Form.Group>
                                                                      <Form.Group as={Col} md="12" controlId="validationFormik04">
                                                                             <Row>

                                                                                    <Col md={4}>
                                                                                           <Form.Label>Mobile</Form.Label>
                                                                                    </Col>
                                                                                    <Col md={8}>
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
                                                                                    </Col>
                                                                             </Row>

                                                                      </Form.Group>
                                                                      <Row>
                                                                             <Col md={4}>
                                                                                    <label>Address Type</label>
                                                                             </Col>
                                                                             <Col>
                                                                                    <Col md={8}>
                                                                                           <label>
                                                                                                  <formik.Field type="radio" name="addressType" value="addressType" />
                                                                                                  Home
                                                                                           </label>
                                                                                           <label>
                                                                                                  <formik.Field type="radio" name="addressType" value="addressType" />
                                                                                                  Office
                                                                                           </label>
                                                                                    </Col>
                                                                             </Col>
                                                                      </Row>

                                                                      {/* <Form.Group className="mb-3">
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
                                                                      </Form.Group> */}


                                                               </Form>
                                                               <div >
                                                                      <Button type="submit"className='submit-btn'>Submit</Button>
                                                               </div>
                                                               <div >
                                                                      <Button type="submit"className='submit-btn'><FaPlus />Add New</Button>
                                                               </div>
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
