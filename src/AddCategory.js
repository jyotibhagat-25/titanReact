import React, { useEffect, useState } from 'react'
import { Formik, Form, Field } from 'formik';
import * as Yup from 'yup';
import { Breadcrumb, Col, Container, Row } from 'react-bootstrap';
import './Addcategory.css';
import axios from 'axios';
import Table from 'react-bootstrap/Table';
import { CiEdit } from "react-icons/ci";
import { AiOutlineDelete } from "react-icons/ai";
import { Link, useNavigate } from 'react-router';
import { useDispatch, useSelector } from 'react-redux';




const AddCategory = () => {

       const [categories, setCategories] = useState();

       useEffect(() => {
              axios.get(" http://localhost:8090/api/cats").then((response) => {
                     console.log(response.data);
                     setCategories(response.data)
              });

       }, []);
       let navigate = useNavigate();
       const dispatch = useDispatch();
       const { user: currentUser } = useSelector((state) => state.auth);
       useEffect(() => {
              if (currentUser) {
                     console.log(currentUser);
              }
              if (currentUser && currentUser.roles[0] !== "ROLE_ADMIN") {
                     console.log(currentUser.roles[0]);

                     navigate("/Home");
              }
       }, [currentUser]);
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
                     console.log("successfully category delete");
                     window.location.reload();


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

                                                               <button className="btn btn-shine">Add</button>
                                                        </Col>
                                                 </Row>

                                          </div>

                                   </Form>
                            )}
                     </Formik>

                     <section className='table-area'>
                            <Container>
                                   <Row className='dashboard'>


                                          <Col md={3} className='menu' >
                                                 <Breadcrumb>
                                                        <Breadcrumb.Item href="/Home">Home</Breadcrumb.Item>
                                                        <Breadcrumb.Item href="#">
                                                               Dashboard
                                                        </Breadcrumb.Item>

                                                 </Breadcrumb>
                                                 <div >
                                                        <Row>
                                                               <h6>Menu</h6>
                                                               <Link to={'/Dashboard'} className='link-area'><p>Dashboard</p></Link>
                                                        </Row>
                                                 </div>
                                                 <div>
                                                        <Row>
                                                               <Link to={'/Brand'} className='link-area'><p>International Brand</p></Link>


                                                        </Row>
                                                 </div>
                                                 <div>
                                                        <Row>
                                                               <Link to={'/Men'} className='link-area'><p>Men</p></Link>

                                                        </Row>
                                                 </div>
                                                 <div>
                                                        <Row>
                                                               <Link to={'/Women'} className='link-area'><p>Women</p></Link>


                                                        </Row>
                                                 </div>
                                                 <div>
                                                        <Row>
                                                               <Link to={'/AddProduct'} className='link-area'><p>Add Product</p></Link>


                                                        </Row>
                                                 </div>
                                                 <div>
                                                        <Row>
                                                               <Link to={'/AddCategory'} className='link-area'><p>Add Category</p></Link>


                                                        </Row>
                                                 </div>
                                                 <div>
                                                        <Row>
                                                               <h6>Management</h6>
                                                               <Link to={'/TestProduct'} className='link-area'><p>Total Products</p></Link>

                                                        </Row>
                                                 </div>
                                                 <div>
                                                        <Row>
                                                               <Link to={'/AdminOrders'} className='link-area'><p>Product Details</p></Link>


                                                        </Row>
                                                 </div>
                                                 <div>
                                                        {/* <Row>

                  <Link to={'/CustomerDetails'} className='link-area'><p>Customer Details</p></Link>

                </Row> */}
                                                        <Row>

                                                               <Link to={'/UserOrders'} className='link-area'><p>User Orders Details</p></Link>

                                                        </Row>
                                                 </div>
                                                 <div>
                                                        <Row>
                                                               <h6>Notification</h6>
                                                               <p>Transaction</p>

                                                        </Row>
                                                 </div>
                                                 <div>
                                                        <Row>
                                                               <p>Message</p>

                                                        </Row>
                                                 </div>

                                          </Col>

                                          <Col>
                                                 <Table striped bordered hover>
                                                        <thead>
                                                               <tr>
                                                                      <th>Sl</th>
                                                                      <th> Name</th>
                                                                      {/* <th>Edit</th> */}
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
                                                                                                  {/* <td><CiEdit /></td> */}
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
