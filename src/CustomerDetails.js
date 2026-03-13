import React, { useEffect } from 'react'
import { Container, Col, Row, ListGroup } from "react-bootstrap";
import { Link } from 'react-router';
import { useSelector, useDispatch } from "react-redux";
import { useNavigate } from "react-router";

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
