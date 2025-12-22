import React, { useEffect, useState } from 'react'
import { Formik, Form, Field } from 'formik';
import * as Yup from 'yup';
import { Col, Container, Row } from 'react-bootstrap';
import './Addcategory.css';
import axios from 'axios';
import Table from 'react-bootstrap/Table';
import { CiEdit } from "react-icons/ci";
import { AiOutlineDelete } from "react-icons/ai";



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

       const handleSubmit = (formData) => {
              // console.log("Testing");
              console.log("formData");
              axios.post("http://localhost:8090/api/cats", formData)
              console.log("successfully category added");
              window.location.reload();
       }

       return (
              <div className='text-center'>
                     <h3>Add Category</h3>
                     <Formik
                            initialValues={{
                                   name: '',

                            }}
                            validationSchema={CategorySchema}
                            onSubmit={handleSubmit}

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
                                                               
                                                               <button class="btn btn-shine">Add</button>
                                                        </Col>
                                                 </Row>

                                          </div>
                                          <div >
                                                 
                                          </div>
                                   </Form>
                            )}
                     </Formik>

                     <section className='table-area'>
                            <Container>
                                   <Row>
                                          <Col>
                                                 <Table striped bordered hover>
                                                        <thead>
                                                               <tr>
                                                                      <th>Sl</th>
                                                                      <th> Name</th>
                                                                      <th><CiEdit />&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<AiOutlineDelete /></th>
                                                                      
                                                               </tr>
                                                        </thead>
                                                        <tbody>

                                                               {
                                                                      categories ?
                                                                             categories.map((category, index) => {
                                                                                    return (
                                                                                           <tr>
                                                                                                  <td>{index+1}</td>
                                                                                                  <td>{category.name}</td>
                                                                                           </tr>
                                                                                    )
                                                                             })
                                                                             : "loading"
                                                               }
                                                        </tbody>
                                                 </Table>





                                          </Col>
                                   </Row>
                            </Container>
                     </section>

              </div>
       )
}

export default AddCategory
