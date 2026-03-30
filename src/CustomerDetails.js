import React, { useEffect, useState } from 'react'
import { Container, Col, Row, ListGroup } from "react-bootstrap";
import { Link } from 'react-router';
import { useSelector, useDispatch } from "react-redux";
import { useNavigate } from "react-router";
import axios from 'axios';
import Table from 'react-bootstrap/Table';
import Accordion from 'react-bootstrap/Accordion';
import {
       MDBBtn,
       MDBCard,
       MDBCardBody,
       MDBCol,
       MDBContainer,
       MDBIcon,
       MDBRow,
} from "mdb-react-ui-kit";



const CustomerDetails = () => {
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
              axios.get(`http://localhost:8090/api/ssorders/user/${currentUser.id}`).then((response) => {
                     console.log("Success", response.data);
                     setOrders(response.data);

              });
       }, [currentUser.id]);

       const [status, setStatus] = useState([]);

       useEffect(() => {
              axios.put(`http://localhost:8090/api/ssorders/69b38d7899a9d581afe578d2/status`).then((response) => {
                     console.log("Status Success", response.data);
                     setStatus(response.data);

              });
       }, []);


       return (
              <div>
                     {/* */}
                     <section>
                            <Container>
                                   <Row>
                                          <Col md={12}>

                                                 {
                                                        orders.map((order, index) => {
                                                               return (
                                                                      <div key={index}>
                                                                             <Accordion defaultActiveKey="0">
                                                                                    <Accordion.Item eventKey="0">
                                                                                           <Accordion.Header><b>order id : </b> {order.id} &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;<b>Date :</b> {new Date(order.createdAt).toLocaleDateString()}</Accordion.Header>
                                                                                           <Accordion.Body>
                                                                                                  {/* {
                                                                                                         orders.map((order,index)=>{
                                                                                                                return(
                                                                                                                       <div>

                                                                                                                              {
                                                                                                                                     order.products ?
                                                                                                                                            order.products.map((product, index)=>{
                                                                                                                                                   return(
                                                                                                                                                  <div key={index}>
                                                                                                                                                   <p>{product.productId}</p>
                                                                                                                                                   <p>{product.price}</p>
                                                                                                                                                   <p>{product.quantity}</p>
                                                                                                                                                   <p>{product.price * product.quantity}</p>
                                                                                                                                                  </div>

                                                                                                                                            )

                                                                                                                                            }

                                                                                                                                            )
                                                                                                                                     :

                                                                                                                                     "Something wrong"

                                                                                                                              }
                                                                                                                       </div>
                                                                                                                )
                                                                                                         })
                                                                                                  } */}

                                                                                                  <Table striped bordered hover>
                                                                                                         <thead>
                                                                                                                <tr>
                                                                                                                       <th>Sl</th>
                                                                                                                       <th>Product Id</th>
                                                                                                                       <th>Product Price</th>
                                                                                                                       <th>Product Quantity</th>
                                                                                                                       <th>Total Amount</th>
                                                                                                                       <th></th>


                                                                                                                </tr>
                                                                                                         </thead>
                                                                                                         <tbody>

                                                                                                                {
                                                                                                                       order.products ?
                                                                                                                              order.products.map((product, index) => {
                                                                                                                                     return (
                                                                                                                                            <tr key={index}>
                                                                                                                                                   <td>{index + 1}</td>
                                                                                                                                                   <td>{product.productId}</td>
                                                                                                                                                   {/* <td><img src={`http://localhost:8090/upload/${cartItem.productDetails.images[0]}`} /></td> */}
                                                                                                                                                   <td>₹{product.price}</td>
                                                                                                                                                   <td>{product.quantity}</td>
                                                                                                                                                   <td>₹{product.price * product.quantity}</td>



                                                                                                                                            </tr>
                                                                                                                                     )
                                                                                                                              })
                                                                                                                              : "No items available"
                                                                                                                }
                                                                                                         </tbody>
                                                                                                  </Table>

                                                                                                  <section className="vh-100" style={{ backgroundColor: "#eee" }}>
                                                                                                         <MDBContainer className="py-5">
                                                                                                                <MDBRow className="justify-content-center align-items-center">
                                                                                                                       <MDBCol>

                                                                                                                              <MDBCard
                                                                                                                                     className="card-stepper"
                                                                                                                                     style={{ borderRadius: "10px" }}
                                                                                                                              >
                                                                                                                                     <MDBCardBody>
                                                                                                                                            <div className="d-flex justify-content-between align-items-center">
                                                                                                                                                   <div className="d-flex flex-column">
                                                                                                                                                          <span className="lead fw-normal">
                                                                                                                                                                 Your order has been delivered
                                                                                                                                                          </span>
                                                                                                                                                          <span className="text-muted small">
                                                                                                                                                                 by DHFL on 21 Jan, 2020
                                                                                                                                                          </span>
                                                                                                                                                   </div>
                                                                                                                                                   <div>
                                                                                                                                                          <MDBBtn outline>Track order details</MDBBtn>
                                                                                                                                                   </div>
                                                                                                                                            </div>

                                                                                                                                            <hr className="my-4" />

                                                                                                                                            <div className="d-flex flex-row justify-content-between align-items-center align-content-center">
                                                                                                                                                   <span className="dot"></span>
                                                                                                                                                   <hr className="flex-fill track-line" />
                                                                                                                                                   <span className="dot"></span>
                                                                                                                                                   <hr className="flex-fill track-line" />
                                                                                                                                                   <span className="dot"></span>
                                                                                                                                                   <hr className="flex-fill track-line" />
                                                                                                                                                   <span className="dot"></span>
                                                                                                                                                   <hr className="flex-fill track-line" />
                                                                                                                                                   <span className="d-flex justify-content-center align-items-center big-dot dot">
                                                                                                                                                          <MDBIcon icon="check text-white" />
                                                                                                                                                   </span>
                                                                                                                                            </div>

                                                                                                                                            <div className="d-flex flex-row justify-content-between align-items-center">
                                                                                                                                                   <div className="d-flex flex-column align-items-start">
                                                                                                                                                          <span>15 Mar</span>
                                                                                                                                                          <span></span>
                                                                                                                                                   </div>
                                                                                                                                                   <div className="d-flex flex-column justify-content-center">
                                                                                                                                                          <span>15 Mar</span>
                                                                                                                                                          <span>Order placed</span>
                                                                                                                                                   </div>
                                                                                                                                                   <div className="d-flex flex-column justify-content-center align-items-center">
                                                                                                                                                          <span>15 Mar</span>
                                                                                                                                                          <span>Order Dispatched</span>
                                                                                                                                                   </div>
                                                                                                                                                   <div className="d-flex flex-column align-items-center">
                                                                                                                                                          <span>15 Mar</span>
                                                                                                                                                          <span>Out for delivery</span>
                                                                                                                                                   </div>
                                                                                                                                                   <div className="d-flex flex-column align-items-end">
                                                                                                                                                          <span>15 Mar</span>
                                                                                                                                                          <span>Delivered</span>
                                                                                                                                                   </div>
                                                                                                                                            </div>
                                                                                                                                     </MDBCardBody>
                                                                                                                              </MDBCard>
                                                                                                                       </MDBCol>
                                                                                                                </MDBRow>
                                                                                                         </MDBContainer>
                                                                                                  </section>
                                                                                           </Accordion.Body>
                                                                                    </Accordion.Item>

                                                                             </Accordion>


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

export default CustomerDetails


