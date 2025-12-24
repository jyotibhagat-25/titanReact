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
       const checkNameExists = async (name) => {
              // API call
              const response = await fetch(`http://localhost:8090/api/cats/check?name=${name} `);
              const data = await response.json();
              return data.exists; // Should return true if name exists
       };

       const CategorySchema = Yup.object().shape({
              name: Yup.string()
                     .required("Category name is required")
                     .test(
                            "checkDuplicateCategory",
                            "Category Name already exists",
                            async function (value) {
                                   if (!value) return false;
                                   const exists = await checkNameExists(value);
                                   return !exists;
                            }
                     ),
                    
       });


       const handleSubmit = (formData) => {
              // console.log("Testing");
              console.log("formData");
              axios.post("http://localhost:8090/api/cats", formData)
              console.log("successfully category added");
              window.location.reload();
       }

       const handleDelete = (id) => {
              console.log(id);
              axios.delete(`http://localhost:8090/api/cats/${id}`).then((response) => {
                     console.log(response.data);
                     setCategories(response.data)
              });
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
                            // onSubmit={handleDelete}

                     >
                            {({ errors, touched }) => (
                                   <Form>
                                          <div className='add-category'>
                                                 <Row>
                                                        <Col md={4}>
                                                               <label>Select Category :- </label>
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
                                                                      <th>Edit</th>
                                                                      <th>Delete</th>

                                                               </tr>
                                                        </thead>
                                                        <tbody>

                                                               {
                                                                      categories ?
                                                                             categories.map((category, index) => {
                                                                                    return (
                                                                                           <tr>
                                                                                                  <td>{index + 1}</td>
                                                                                                  <td>{category.name}</td>
                                                                                                  <td><CiEdit /></td>
                                                                                                  <td><button onClick={() => handleDelete(category.id)}><AiOutlineDelete /></button></td>
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
