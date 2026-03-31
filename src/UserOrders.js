import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { Col, Container, Row, Card, Button } from 'react-bootstrap'
import Table from 'react-bootstrap/Table';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router';
// import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import { Formik, Form, Field } from 'formik';

const UserOrders = () => {
       let navigate = useNavigate();
       const dispatch = useDispatch();
       const { user: currentUser } = useSelector((state) => state.auth);
       useEffect(() => {
              if (currentUser) {
                     console.log(currentUser);
              }
              else {
                     navigate("/Login");
              }

       }, []);

       const [orders, setOrders] = useState([]);

       useEffect(() => {
              axios.get("http://localhost:8090/api/ssorders").then((response) => {
                     console.log("order", response.data);
                     setOrders(response.data);

              });
       }, []);

       // Order Status

       const [status, setStatus] = useState([]);
       const [orderId, setOrderId] = useState("");

       useEffect(() => {
              axios.put(`http://localhost:8090/api/ssorders/69b38d7899a9d581afe578d2/status`).then((response) => {
                     console.log("Status Success", response.data);
                     setStatus(response.data);

              });
       }, []);


       //     MODAL USE TO CHANGE THE STATUS 

       const [show, setShow] = useState(false);

       const handleClose = () => {
              setShow(false)
              //// update

              ///
              setOrderId("")
       };
       const handleShow = (id) => {
              setShow(true)
              setOrderId(id)
              console.log(id)
       };

       return (
              <div>
                     <section>
                            <Container>
                                   <Row>
                                          <Col md={12}>

                                                 {
                                                        orders.map((order, index) => {
                                                               return (
                                                                      <div key={index}>



                                                                             <Table striped bordered hover>
                                                                                    <thead>
                                                                                           <tr key={index}>
                                                                                                  <th>Sl</th>
                                                                                                  <th> Product Name</th>
                                                                                                  <th> Customer Id</th>
                                                                                                  <th> Category</th>
                                                                                                  {/* <th> Description</th> */}
                                                                                                  <th> Price</th>
                                                                                                  <th> Status</th>

                                                                                                  {/* <th>Edit</th>
                                                                                                  <th>Delete</th> */}

                                                                                           </tr>
                                                                                    </thead>
                                                                                    <tbody>

                                                                                           {
                                                                                                  order.products ?
                                                                                                         order.products.map((product, index) => {
                                                                                                                return (
                                                                                                                       <tr>
                                                                                                                              <td>{index + 1}</td>
                                                                                                                              <td>{product.productId.productName}</td>
                                                                                                                              <td>{order.userId._id}</td>
                                                                                                                              <td>{product.productId.productCategory}</td>
                                                                                                                              {/* <td>{product.productId.productDescription}</td> */}
                                                                                                                              <td>₹{product.productId.productPrice}</td>
                                                                                                                              <td>{order.status}</td>
                                                                                                                              <td><Button variant="primary" onClick={handleShow}>
                                                                                                                                     Change status
                                                                                                                              </Button>

                                                                                                                                     <Modal show={show} onHide={handleClose}>
                                                                                                                                            <Modal.Header closeButton>
                                                                                                                                                   <Modal.Title>Status Related</Modal.Title>
                                                                                                                                            </Modal.Header>
                                                                                                                                            <Modal.Body>
                                                                                                                                                   <Modal.Body>

                                                                                                                                                          <Formik
                                                                                                                                                                 initialValues={{ status: "" }}
                                                                                                                                                                 onSubmit={(values) => {
                                                                                                                                                                        axios.put(`http://localhost:8090/api/ssorders/69b38da899a9d581afe578d8/status`, {
                                                                                                                                                                               status: values.status
                                                                                                                                                                        }).then((res) => {
                                                                                                                                                                               console.log("Updated:", res.data);

                                                                                                                                                                               // refresh orders
                                                                                                                                                                               axios.get("http://localhost:8090/api/ssorders")
                                                                                                                                                                                      .then((response) => setOrders(response.data));

                                                                                                                                                                               handleClose();
                                                                                                                                                                        });
                                                                                                                                                                 }}
                                                                                                                                                          >

                                                                                                                                                                 {() => (
                                                                                                                                                                        <Form>

                                                                                                                                                                               <div>
                                                                                                                                                                                      <label>
                                                                                                                                                                                             <Field type="radio" name="status" value="ordered" />
                                                                                                                                                                                             Ordered
                                                                                                                                                                                      </label>
                                                                                                                                                                               </div>

                                                                                                                                                                               <div>
                                                                                                                                                                                      <label>
                                                                                                                                                                                             <Field type="radio" name="status" value="shipped" />
                                                                                                                                                                                             Shipped
                                                                                                                                                                                      </label>
                                                                                                                                                                               </div>

                                                                                                                                                                               <div>
                                                                                                                                                                                      <label>
                                                                                                                                                                                             <Field type="radio" name="status" value="delivery" />
                                                                                                                                                                                             Out For Delivery
                                                                                                                                                                                      </label>
                                                                                                                                                                               </div>

                                                                                                                                                                               <div>
                                                                                                                                                                                      <label>
                                                                                                                                                                                             <Field type="radio" name="status" value="delivered" />
                                                                                                                                                                                             Delivered
                                                                                                                                                                                      </label>
                                                                                                                                                                               </div>

                                                                                                                                                                               

                                                                                                                                                                        </Form>
                                                                                                                                                                 )}

                                                                                                                                                          </Formik>

                                                                                                                                                   </Modal.Body>
                                                                                                                                            </Modal.Body>
                                                                                                                                            <Modal.Footer>
                                                                                                                                                   <Button variant="secondary" onClick={handleClose}>
                                                                                                                                                          Close
                                                                                                                                                   </Button>
                                                                                                                                                   <Button variant="primary"  onClick={() => handleShow}>
                                                                                                                                                          Save Changes
                                                                                                                                                   </Button>
                                                                                                                                            </Modal.Footer>
                                                                                                                                     </Modal></td>

                                                                                                                       </tr>
                                                                                                                )
                                                                                                         })
                                                                                                         : "loading"
                                                                                           }
                                                                                    </tbody>
                                                                             </Table>



                                                                      </div>
                                                               )
                                                        })
                                                 }

                                          </Col>
                                   </Row>
                            </Container>
                     </section>
              </div>
       )
}

export default UserOrders
