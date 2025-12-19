import React, { useEffect, useState } from 'react'
import { Formik, Form, Field } from 'formik';
import * as Yup from 'yup';
import { Col, Container, Row } from 'react-bootstrap';
import './Addcategory.css';
import axios from 'axios';
import Table from 'react-bootstrap/Table';


const AddCategory = () => {

       const [categories, setCategories] = useState();

       useEffect(() => {
              axios.get("http://localhost:8090/api/cats").then((response) => {
                     console.log(response.data);
                     setCategories(response.data)
              });

       }, []);
       const CategorySchema = Yup.object().shape({
              name: Yup.string()
                     .min(2, 'Too Short!')
                     .max(50, 'Too Long!')
                     .required('Required'),

       });

       return (
              <div className='text-center'>
                     <h3>Add Category</h3>
                     <Formik
                            initialValues={{
                                   name: '',

                            }}
                            validationSchema={CategorySchema}
                            onSubmit={values => {
                                   // same shape as initial values
                                   console.log(values);
                            }}
                     >
                            {({ errors, touched }) => (
                                   <Form>
                                          <div className='add-category'>
                                                 <Row>
                                                        <Col md={4}>
                                                               <label>Category :- </label>
                                                        </Col>
                                                        <Col md={8}>
                                                               <Field name="name" />
                                                               {errors.name && touched.name ? (
                                                                      <div>{errors.name}</div>
                                                               ) : null}

                                                        </Col>


                                                 </Row>

                                                 <Row>
                                                        <Col>
                                                               <button type="submit">Add</button>
                                                        </Col>
                                                 </Row>

                                          </div>
                                   </Form>
                            )}
                     </Formik>
                     {/* <section>
                            <Container>
                                   <Row>
                                          <Col>
                                                 <Table striped bordered hover >
                                                        <thead>
                                                               <tr>

                                                                      <th>Category id</th>
                                                                      <th>Category Name</th>
                                                                      <th>Username</th>
                                                               </tr>
                                                        </thead>
                                                        <tbody>
                                                               {
                                                                      categories ?
                                                                             categories.map((category, index) => {
                                                                                    return (
                                                                                           <div>
                                                                                                  <td colSpan={2}>{category.id}</td>
                                                                                                  <td>{category.name}</td>

                                                                                           </div>
                                                                                    )
                                                                             })
                                                                             : "please wait"
                                                               }
                                                        </tbody>
                                                 </Table>





                                          </Col>
                                   </Row>
                            </Container>
                     </section> */}

              </div>
       )
}

export default AddCategory
