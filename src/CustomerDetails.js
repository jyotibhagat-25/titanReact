import React, { useEffect, useState } from 'react'
import { Container, Col, Row, ListGroup } from "react-bootstrap";
import { Link } from 'react-router';
import { useSelector, useDispatch } from "react-redux";
import { useNavigate } from "react-router";
import axios from 'axios';
import Table from 'react-bootstrap/Table';


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
              axios.get("http://localhost:8090/api/ssorders/user/6959eeffaa95aa7abaf6035a").then((response) => {
                     console.log("Success", response.data);
                     setOrders(response.data);

              });
       }, []);
       return (
              <div>
                     <section>
                            <Container>
                                   <Row>
                                          <Col>
                                                 <div >
                                                        <h3>Details</h3>
                                                        {
                                                               currentUser ?
                                                                      <div className="account">
                                                                             <p>Mobile : {currentUser.username}</p>
                                                                             <p>Email : {currentUser.email}</p>
                                                                             {/* <p>Name : {currentUser.}</p> */}
                                                                             {/* <p>{orders}</p> */}
                                                                      </div> : ""
                                                        }


                                                 </div>
                                          </Col>
                                   </Row>
                            </Container>
                     </section>
                     <section>
                            <Container>
                                   <Row>
                                          <Col md={12}>
                                                 <Table striped bordered hover>
                                                        <thead>
                                                               <tr>
                                                                      <th>Sl</th>
                                                                      <th>Product Id</th>
                                                                      <th>Product Price</th>
                                                                      
                                                                      <th>Payment Status</th>
                                                                      {/* <th>Product order Date</th> */}


                                                               </tr>
                                                        </thead>
                                                        <tbody>

                                                               {/* {
                                                                      orders ?
                                                                             orders.map((order, index) => {
                                                                                    return (
                                                                                           <tr key={index}>
                                                                                                  <td>{index + 1}</td>
                                                                                                  <td>{order.products.productName}</td>
                                                                                                  <td><img src={`http://localhost:8090/upload/${order.productDetails.images[0]}`} /></td>
                                                                                                  <td>₹{order.products.status}</td>
                                                                                                  
                                                                                                  

                                                                                           </tr>
                                                                                    )
                                                                             })
                                                                             : "No items available"
                                                               } */}

                                                               {orders.map((order, index) => (
                                                                      <tr key={index}>
                                                                             <td>{index + 1}</td>
                                                                             <td>{order.id}</td>
                                                                             <td>₹{order.totalAmount}</td>
                                                                             <td>{order.status}</td>
                                                                             {/* <td>{new Date(order.createdAt).toLocaleDateString()}</td> */}
                                                                      </tr>
                                                               ))}

                                                               {/* {orders.map((order, index) => (
                                                                      <div key={index} style={{ border: "1px solid #ccc", margin: "10px", padding: "10px" }}>
                                                                             <p><b>Order ID:</b> {order._id}</p>
                                                                             <p><b>Total Amount:</b> {order.totalAmount}</p>
                                                                             <p><b>Status:</b> {order.status}</p>
                                                                      </div>
                                                               ))} */}
                                                        </tbody>
                                                 </Table>

                                          </Col>
                                   </Row>
                            </Container>
                     </section>
              </div>
       )
}

export default CustomerDetails
