import React, { useEffect, useState } from 'react'
import { Container, Col, Row, ListGroup } from "react-bootstrap";
import { Link } from 'react-router';
import { useSelector, useDispatch } from "react-redux";
import { useNavigate } from "react-router";
import axios from 'axios';
import Table from 'react-bootstrap/Table';
import Accordion from 'react-bootstrap/Accordion';



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
                                                 
                                                 {
                                                        orders.map((order, index) => {
                                                               return (
                                                                      <div>
                                                                             <Accordion defaultActiveKey="0">
                                                                                    <Accordion.Item eventKey="0">
                                                                                           <Accordion.Header><b>order id : </b> {order.id} &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<b>Date :</b> {new Date(order.createdAt).toLocaleDateString()}</Accordion.Header>
                                                                                           <Accordion.Body>
                                                                                                  {
                                                                                                         orders.map((order,index)=>{
                                                                                                                return(
                                                                                                                       <div>
                                                                                                                              {/* <p>{order.products.quantity}</p> */}
                                                                                                                              <p>price{order.products.productId}</p>
                                                                                                                       </div>
                                                                                                                )
                                                                                                         })
                                                                                                  }
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
