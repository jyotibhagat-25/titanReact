
// import React, { useEffect } from "react";
// import { Formik, Form, Field } from 'formik';
// import * as Yup from 'yup';
// import { Col, Row } from 'react-bootstrap';
// import './Account.css';
// import { useSelector, useDispatch } from "react-redux";
// import { useNavigate } from "react-router";

// const Account = () => {
//        let navigate = useNavigate();
//        const dispatch = useDispatch();
//        const { user: currentUser } = useSelector((state) => state.auth);
//        useEffect(() => {
//               if (currentUser) {
//                      console.log(currentUser);
//               }
//               else{
//                      navigate("/Login");
//               }

//        }, []);
//        return (
//               <div className='text-center'>
//                      <h3>Account</h3>
//                      {
//                             currentUser ? <div><p>Mobile : {currentUser.username }</p>
//                      <p>Email : {currentUser.email }</p></div>:""
//                      }
//               </div>
//        )
// }

// export default Account


import React, { useEffect } from "react";
import { Container, Col, Row, ListGroup } from "react-bootstrap";
import { Link } from 'react-router';



import { useSelector, useDispatch } from "react-redux";
import { useNavigate } from "react-router";

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




              <section>
                     <Container>
                            <Row>
                                   <Col md={4}>
                                          <ListGroup className="float-list">
                                                 <ListGroup.Item as="li">Account</ListGroup.Item>
                                                 <ListGroup.Item as="li">
                                                        <Link to="/Cart" className="text-decoration-none text-dark">Cart</Link></ListGroup.Item>
                                                 <ListGroup.Item as="li">
                                                        <Link to="/Wishlist" className="text-decoration-none text-dark">
                                                               Wishlist
                                                        </Link></ListGroup.Item>

                                                 <ListGroup.Item as="li">
                                                        <Link to="/Address" className="text-decoration-none text-dark">
                                                               Add Address
                                                        </Link>
                                                 </ListGroup.Item>
                                                 {/* <ListGroup.Item as="li">
                                                        <Link to={'/UserOrders'}>UserOrders</Link>
                                                 </ListGroup.Item> */}
                                                 {/* <ListGroup.Item as="li">Cras justo odio</ListGroup.Item> */}
                                          </ListGroup>


                                   </Col>


                                   <Col md={8}>
                                          <div >
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