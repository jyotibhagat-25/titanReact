import React, { useEffect, useState } from 'react'
import { Container, Col, Row } from "react-bootstrap";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router";
import axios from 'axios';
import Table from 'react-bootstrap/Table';
import Accordion from 'react-bootstrap/Accordion';
import {
       MDBCard,
       MDBCardBody,
       MDBCol,
       MDBContainer,
       MDBRow,
} from "mdb-react-ui-kit";

const CustomerDetails = () => {

       let navigate = useNavigate();
       const { user: currentUser } = useSelector((state) => state.auth);

       const [orders, setOrders] = useState([]);

       //  AUTH CHECK
       useEffect(() => {
              if (!currentUser) {
                     navigate("/Login");
              }
       }, [currentUser]);

       //  FETCH FUNCTION
       // const fetchOrders = () => {
       //        if (currentUser?.id) {
       //               axios
       //                      .get(`http://localhost:8090/api/ssorders/user/${currentUser.id}`)
       //                      .then((res) => {
       //                             setOrders(Array.isArray(res.data) ? res.data : []);
       //                      })
       //                      .catch((err) => console.log(err));
       //        }
       // };

       // useEffect(() => {
       //        fetchOrders();
       // }, [currentUser]);

       useEffect(() => {
              axios.get(`http://localhost:8090/api/ssorders/user/${currentUser.id}`)
                     .then((res) => {
                            console.log("total orders", res.data);
                            setOrders(res.data);
                     })
              
       }, []);

       // // AUTO UPDATE
       // useEffect(() => {
       //        const interval = setInterval(() => {
       //               fetchOrders();
       //        }, 3000);

       //        return () => clearInterval(interval);
       // }, [currentUser]);

       //   WORKING LOGIC
       const statusFlow = ["Ordered", "Shipped", "Out for Delivery", "Delivered"];

       const getStep = (status) => {
              if (!status) return 1;

              const index = statusFlow.findIndex(
                     (s) => s.toLowerCase() === status.toLowerCase().trim()
              );

              return index !== -1 ? index + 1 : 1;
       };

       return (
              <Container>
                     <Row>
                            <Col md={12}>

                                   {orders.map((order, index) => {

                                          const step = getStep(order?.status);

                                          return (
                                                 <Accordion key={index} className="mb-3">
                                                        <Accordion.Item eventKey="0">

                                                               
                                                               <Accordion.Header>
                                                                      <b>Order ID:</b> {order?.id}
                                                                      &nbsp;&nbsp;&nbsp;
                                                                      <b>Date:</b> {new Date(order?.createdAt).toLocaleDateString()}
                                                               </Accordion.Header>

                                                               <Accordion.Body>

                                                                      {/* ✅ SAME TABLE */}
                                                                      <Table striped bordered hover>
                                                                             <thead>
                                                                                    <tr>
                                                                                           <th>Sl</th>
                                                                                           <th>Product Name</th>
                                                                                           <th>Product Image</th>
                                                                                           <th>Price</th>
                                                                                           <th>Quantity</th>
                                                                                           <th>Total</th>
                                                                                           <th>Status</th>
                                                                                    </tr>
                                                                             </thead>

                                                                             <tbody>
                                                                                    {
                                                                                           order?.products?.length > 0 ? (
                                                                                                  order.products.map((product, i) => (
                                                                                                         <tr key={i}>
                                                                                                                <td>{i + 1}</td>
                                                                                                                <td>{product?.productId?.productName || "N/A"}</td>
                                                                                                                <td><img src={`http://localhost:8090/upload/${product.productId.images[0]}`} width={120}/></td>
                                                                                                                <td>₹{product?.price}</td>
                                                                                                                <td>{product?.quantity}</td>
                                                                                                                <td>₹{product?.price * product?.quantity}</td>
                                                                                                                <td>{order?.status}</td>
                                                                                                         </tr>
                                                                                                  ))
                                                                                           ) : (
                                                                                                  <tr>
                                                                                                         <td colSpan="6">No items available</td>
                                                                                                  </tr>
                                                                                           )
                                                                                    }
                                                                             </tbody>
                                                                      </Table>

                                                                      {/* ✅ SAME OLD UI (BIG DOT) */}
                                                                      <MDBContainer className="py-4">
                                                                             <MDBRow>
                                                                                    <MDBCol>

                                                                                           <MDBCard style={{ borderRadius: "10px" }}>
                                                                                                  <MDBCardBody>

                                                                                                         <div className="d-flex justify-content-between">
                                                                                                                <h5>Order Status</h5>
                                                                                                         </div>

                                                                                                         <hr />

                                                                                                         {/* 🔥 ONLY LOGIC CHANGED */}
                                                                                                         <div className="d-flex align-items-center">

                                                                                                                <span className={step >= 1 ? "big-dot" : "dot"}></span>
                                                                                                                <hr className="flex-fill track-line" />

                                                                                                                <span className={step >= 2 ? "big-dot" : "dot"}></span>
                                                                                                                <hr className="flex-fill track-line" />

                                                                                                                <span className={step >= 3 ? "big-dot" : "dot"}></span>
                                                                                                                <hr className="flex-fill track-line" />

                                                                                                                <span className={step >= 4 ? "big-dot" : "dot"}></span>

                                                                                                         </div>

                                                                                                         <div className="d-flex justify-content-between mt-3 small">
                                                                                                                <span>Ordered</span>
                                                                                                                <span>Shipped</span>
                                                                                                                <span>Out for Delivery</span>
                                                                                                                <span>Delivered</span>
                                                                                                         </div>

                                                                                                  </MDBCardBody>
                                                                                           </MDBCard>

                                                                                    </MDBCol>
                                                                             </MDBRow>
                                                                      </MDBContainer>

                                                               </Accordion.Body>
                                                        </Accordion.Item>
                                                 </Accordion>
                                          );
                                   })}

                            </Col>
                     </Row>
              </Container>
       );
};

export default CustomerDetails;