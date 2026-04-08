import axios from 'axios';
import React, { useEffect } from "react";
import { Container, Col, Row, ListGroup } from "react-bootstrap";
import { Link } from 'react-router';
import { useSelector, useDispatch } from "react-redux";
import { useNavigate } from "react-router";
import "./Account.css";

const Account = () => {
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
       return (




              <section className='account-info'>
                     <Container>
                            <Row>
                                   <Col md={4}>
                                          <ListGroup className="float-list">
                                                 <ListGroup.Item as="li">Account</ListGroup.Item>
                                                 
                                                 <ListGroup.Item as="li">
                                                        <Link to="/Wishlist" className="text-decoration-none text-dark">
                                                               Wishlist
                                                        </Link></ListGroup.Item>

                                                 <ListGroup.Item as="li">
                                                        <Link to="/Address" className="text-decoration-none text-dark">
                                                               Addresses
                                                        </Link>
                                                 </ListGroup.Item>
                                                 <ListGroup.Item as="li">
                                                        <Link to="/CustomerDetails" className="text-decoration-none text-dark">Orders</Link>
                                                 </ListGroup.Item>
                                                 {/* <ListGroup.Item as="li">
                                                        <Link to="/OrderStatus" className="text-decoration-none text-dark">Order Status</Link>
                                                 </ListGroup.Item> */}
                                          </ListGroup>


                                   </Col>


                                   <Col md={8} >
                                          <div className='account-text'>
                                                 <h3>Account</h3>
                                                 {
                                                        currentUser ?
                                                               <div className="account">
                                                                      <p>Mobile : {currentUser.username}</p>
                                                                      <p>Email : {currentUser.email}</p>
                                                               </div> : ""
                                                 }


                                          </div>
                                   </Col>
                            </Row>
                     </Container>
              </section>

       )
}

export default Account