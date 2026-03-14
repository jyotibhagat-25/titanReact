import React, { useEffect, useState } from 'react'
import { Container, Col, Row, ListGroup } from "react-bootstrap";
import { Link } from 'react-router';
import { useSelector, useDispatch } from "react-redux";
import { useNavigate } from "react-router";
import axios from 'axios';

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
                     console.log("Success",response.data);
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
                                                                             <p>{setOrders}</p>
                                                                      </div> : ""
                                                        }


                                                 </div>
                                          </Col>
                                   </Row>
                            </Container>
                     </section>
              </div>
       )
}

export default CustomerDetails
