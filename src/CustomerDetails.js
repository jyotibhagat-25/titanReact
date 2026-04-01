// import React, { useEffect, useState } from 'react'
// import { Container, Col, Row, ListGroup } from "react-bootstrap";
// import { Link } from 'react-router';
// import { useSelector, useDispatch } from "react-redux";
// import { useNavigate } from "react-router";
// import axios from 'axios';
// import Table from 'react-bootstrap/Table';
// import Accordion from 'react-bootstrap/Accordion';
// import {
//        MDBBtn,
//        MDBCard,
//        MDBCardBody,
//        MDBCol,
//        MDBContainer,
//        MDBIcon,
//        MDBRow,
// } from "mdb-react-ui-kit";



// const CustomerDetails = () => {
//        let navigate = useNavigate();
//        const dispatch = useDispatch();
//        const { user: currentUser } = useSelector((state) => state.auth);
//        useEffect(() => {
//               if (currentUser) {
//                      console.log(currentUser);
//               }
//               else {
//                      navigate("/Login");
//               }

//        }, []);

//        const [orders, setOrders] = useState([]);

//        useEffect(() => {
//               axios.get(`http://localhost:8090/api/ssorders/user/${currentUser.id}`).then((response) => {
//                      console.log("Success", response.data);
//                      setOrders(response.data);

//               });
//        }, [currentUser.id]);

//        const [status, setStatus] = useState([]);

//        useEffect(() => {
//               axios.put(`http://localhost:8090/api/ssorders/69b38d7899a9d581afe578d2/status`).then((response) => {
//                      console.log("Status Success", response.data);
//                      setStatus(response.data);

//               });
//        }, []);

//        const getStep = (status) => {
//               switch (status) {
//                      case "PLACED": return 1;
//                      case "READY": return 2;
//                      case "SHIPPED": return 3;
//                      case "OUT_FOR_DELIVERY": return 4;
//                      case "DELIVERED": return 5;
//                      default: return 1;
//               }
//        };


//        return (
//               <div>
//                      {/* */}
//                      <section>
//                             <Container>
//                                    <Row>
//                                           <Col md={12}>

//                                                  {
//                                                         orders.map((order, index) => {
//                                                                return (
//                                                                       <div key={index}>
//                                                                              <Accordion defaultActiveKey="0">
//                                                                                     <Accordion.Item eventKey="0">
//                                                                                            <Accordion.Header><b>order id : </b> {order.id} &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;<b>Date :</b> {new Date(order.createdAt).toLocaleDateString()}</Accordion.Header>
//                                                                                            <Accordion.Body>


//                                                                                                   <Table striped bordered hover>
//                                                                                                          <thead>
//                                                                                                                 <tr>
//                                                                                                                        <th>Sl</th>
//                                                                                                                        <th>Product Id</th>
//                                                                                                                        <th>Product Price</th>
//                                                                                                                        <th>Product Quantity</th>
//                                                                                                                        <th>Total Amount</th>
//                                                                                                                        <th></th>


//                                                                                                                 </tr>
//                                                                                                          </thead>
//                                                                                                          <tbody>

//                                                                                                                 {
//                                                                                                                        order.products ?
//                                                                                                                               order.products.map((product, index) => {
//                                                                                                                                      const step = getStep(order.status);
//                                                                                                                                      return (
//                                                                                                                                             <tr key={index}>
//                                                                                                                                                    <td>{index + 1}</td>
//                                                                                                                                                    <td>{product.productId}</td>
//                                                                                                                                                    {/* <td><img src={`http://localhost:8090/upload/${cartItem.productDetails.images[0]}`} /></td> */}
//                                                                                                                                                    <td>₹{product.price}</td>
//                                                                                                                                                    <td>{product.quantity}</td>
//                                                                                                                                                    <td>₹{product.price * product.quantity}</td>



//                                                                                                                                             </tr>
//                                                                                                                                      )
//                                                                                                                               })
//                                                                                                                               : "No items available"
//                                                                                                                 }
//                                                                                                          </tbody>
//                                                                                                   </Table>

//                                                                                                   <section className="vh-100" style={{ backgroundColor: "#eee" }}>
//                                                                                                          <MDBContainer className="py-5">
//                                                                                                                 <MDBRow className="justify-content-center align-items-center">
//                                                                                                                        <MDBCol>

//                                                                                                                               <MDBCard
//                                                                                                                                      className="card-stepper"
//                                                                                                                                      style={{ borderRadius: "10px" }}
//                                                                                                                               >
//                                                                                                                                      <MDBCardBody>
//                                                                                                                                             <div className="d-flex justify-content-between align-items-center">
//                                                                                                                                                    <div className="d-flex flex-column">
//                                                                                                                                                           <span className="lead fw-normal">
//                                                                                                                                                                  Order Status
//                                                                                                                                                           </span>

//                                                                                                                                                    </div>
//                                                                                                                                                    <div>
//                                                                                                                                                           <MDBBtn outline>Track order details</MDBBtn>
//                                                                                                                                                    </div>
//                                                                                                                                             </div>

//                                                                                                                                             <hr className="my-4" />

//                                                                                                                                             <div className="d-flex flex-row justify-content-between align-items-center align-content-center">
//                                                                                                                                                    <span className="dot"></span>
//                                                                                                                                                    <hr className="flex-fill track-line" />
//                                                                                                                                                    <span className="dot"></span>
//                                                                                                                                                    <hr className="flex-fill track-line" />
//                                                                                                                                                    <span className="dot"></span>
//                                                                                                                                                    <hr className="flex-fill track-line" />
//                                                                                                                                                    <span className="dot"></span>
//                                                                                                                                                    <hr className="flex-fill track-line" />
//                                                                                                                                                    <span className="big-dot">
//                                                                                                                                                           {/* <MDBIcon icon="check text-white" /> */}
//                                                                                                                                                    </span>
//                                                                                                                                             </div>


//                                                                                                                                             <div className="d-flex flex-row justify-content-between align-items-center">
//                                                                                                                                                    <div className="d-flex flex-column align-items-start">
//                                                                                                                                                           <span>15 Mar</span>
//                                                                                                                                                           <span>Order Placed</span>
//                                                                                                                                                    </div>
//                                                                                                                                                    <div className="d-flex flex-column justify-content-center">
//                                                                                                                                                           <span>15 Mar</span>
//                                                                                                                                                           <span>Ready to Shipped</span>
//                                                                                                                                                    </div>
//                                                                                                                                                    <div className="d-flex flex-column justify-content-center align-items-center">
//                                                                                                                                                           <span>15 Mar</span>
//                                                                                                                                                           <span>Order Shipped</span>
//                                                                                                                                                    </div>
//                                                                                                                                                    <div className="d-flex flex-column align-items-center">
//                                                                                                                                                           <span>15 Mar</span>
//                                                                                                                                                           <span>Out for delivery</span>
//                                                                                                                                                    </div>
//                                                                                                                                                    <div className="d-flex flex-column align-items-end">
//                                                                                                                                                           <span>15 Mar</span>
//                                                                                                                                                           <span>Delivered</span>
//                                                                                                                                                    </div>
//                                                                                                                                             </div>
//                                                                                                                                      </MDBCardBody>
//                                                                                                                               </MDBCard>
//                                                                                                                        </MDBCol>
//                                                                                                                 </MDBRow>
//                                                                                                          </MDBContainer>
//                                                                                                   </section>
//                                                                                            </Accordion.Body>
//                                                                                     </Accordion.Item>

//                                                                              </Accordion>


//                                                                       </div>
//                                                                )
//                                                         })
//                                                  }

//                                           </Col>
//                                    </Row>
//                             </Container>
//                      </section>
//               </div>
//        )
// }

// export default CustomerDetails



// import React, { useEffect, useState } from 'react'
// import { Container, Col, Row } from "react-bootstrap";
// import { useSelector } from "react-redux";
// import { useNavigate } from "react-router";
// import axios from 'axios';
// import Table from 'react-bootstrap/Table';
// import Accordion from 'react-bootstrap/Accordion';
// import {
//        MDBBtn,
//        MDBCard,
//        MDBCardBody,
//        MDBCol,
//        MDBContainer,
//        MDBIcon,
//        MDBRow,
// } from "mdb-react-ui-kit";

// const CustomerDetails = () => {

//        let navigate = useNavigate();
//        const { user: currentUser } = useSelector((state) => state.auth);

//        //  Auth check
//        useEffect(() => {
//               if (!currentUser) {
//                      navigate("/Login");
//               }
//        }, [currentUser]);

//        //  Fetch orders safely
//        const [orders, setOrders] = useState([]);

//        useEffect(() => {
//               axios.get(`http://localhost:8090/api/ssorders/user/${currentUser.id}`).then((response) => {
//                      console.log("Success", response.data);
//                      setOrders(response.data);

//               });
//        }, [currentUser.id]);

//        //    Status


//        // const [status, setStatus] = useState([]);

//        // useEffect(() => {
//        //        axios.put(`http://localhost:8090/api/ssorders/69b38d7899a9d581afe578d2/status`).then((response) => {
//        //               console.log("Status Success", response.data);
//        //               setStatus(response.data);

//        //        });
//        // }, []);

//        //  Step logic
//        const getStep = (status) => {
//               const s = status?.toLowerCase(); // ✅ normalize

//               if (s === "orders" || s === "placed") return 1;
//               if (s === "shipped") return 2;
//               if (s === "out for delivery" || s === "out for delivery") return 3;
//               if (s === "delivered") return 4;

//               return 1; // default
//        };

//        return (
//               <Container>
//                      <Row>
//                             <Col md={12}>

//                                    {
//                                           orders.map((order, index) => {

//                                                  const step = getStep(order.status); // ✅ correct place

//                                                  return (
//                                                         <Accordion key={index} defaultActiveKey="0">
//                                                                <Accordion.Item eventKey="0">

//                                                                       {/* ✅ HEADER */}
//                                                                       <Accordion.Header>
//                                                                              <b>Order ID:</b> {order.id}
//                                                                              &nbsp;&nbsp;&nbsp;
//                                                                              <b>Date:</b> {new Date(order.createdAt).toLocaleDateString()}
//                                                                       </Accordion.Header>

//                                                                       <Accordion.Body>

//                                                                              {/* ✅ TABLE FIRST */}
//                                                                              <Table striped bordered hover>
//                                                                                     <thead>
//                                                                                            <tr>
//                                                                                                   <th>Sl</th>
//                                                                                                   <th>Product Name</th>
//                                                                                                   <th>Price</th>
//                                                                                                   <th>Quantity</th>
//                                                                                                   <th>Total</th>
//                                                                                                   <th>Status</th>
//                                                                                            </tr>
//                                                                                     </thead>

//                                                                                     <tbody>
//                                                                                            {
//                                                                                                   order.products?.length > 0 ? (
//                                                                                                          order.products.map((product, i) => (
//                                                                                                                 <tr key={i}>
//                                                                                                                        <td>{i + 1}</td>
//                                                                                                                        <td>{product.productId._id}</td>
//                                                                                                                        <td>₹{product.price}</td>
//                                                                                                                        <td>{product.quantity}</td>
//                                                                                                                        <td>₹{product.price * product.quantity}</td>
//                                                                                                                        <td>{order.status}</td>
//                                                                                                                 </tr>
//                                                                                                          ))
//                                                                                                   ) : (
//                                                                                                          <tr>
//                                                                                                                 <td colSpan="5">No items available</td>
//                                                                                                          </tr>
//                                                                                                   )
//                                                                                            }
//                                                                                     </tbody>
//                                                                              </Table>

//                                                                              {/* ORDER STATUS */}
//                                                                              <MDBContainer className="py-4">
//                                                                                     <MDBRow>
//                                                                                            <MDBCol>

//                                                                                                   <MDBCard style={{ borderRadius: "10px" }}>
//                                                                                                          <MDBCardBody>

//                                                                                                                 <div className="d-flex justify-content-between">
//                                                                                                                        <h5>Order Status</h5>
//                                                                                                                        <MDBBtn outline size="sm">Track</MDBBtn>
//                                                                                                                 </div>

//                                                                                                                 <hr />

//                                                                                                                 {/* ✅ STEP TRACKER */}
//                                                                                                                 <div className="d-flex align-items-center">

//                                                                                                                        <span className={step >= 1 ? "big-dot" : "dot"}></span>
//                                                                                                                        <hr className="flex-fill track-line" />

//                                                                                                                        <span className={step >= 2 ? "big-dot" : "dot"}></span>
//                                                                                                                        <hr className="flex-fill track-line" />

//                                                                                                                        <span className={step >= 3 ? "big-dot" : "dot"}></span>
//                                                                                                                        <hr className="flex-fill track-line" />



//                                                                                                                        <span className={step >= 4 ? "big-dot" : "dot"}>
//                                                                                                                               {step === 5 && <MDBIcon icon="check text-white" />}
//                                                                                                                        </span>

//                                                                                                                 </div>

//                                                                                                                 {/* ✅ LABELS */}
//                                                                                                                 <div className="d-flex justify-content-between mt-3 small">
//                                                                                                                        <span>Ordered</span>
//                                                                                                                        <span>Shipped</span>
//                                                                                                                        <span>Out for Delivery</span>
//                                                                                                                        <span>Delivered</span>
//                                                                                                                 </div>

//                                                                                                          </MDBCardBody>
//                                                                                                   </MDBCard>

//                                                                                            </MDBCol>
//                                                                                     </MDBRow>
//                                                                              </MDBContainer>

//                                                                       </Accordion.Body>
//                                                                </Accordion.Item>
//                                                         </Accordion>
//                                                  );
//                                           })
//                                    }

//                             </Col>
//                      </Row>
//               </Container>
//        );
// };

// export default CustomerDetails;


import React, { useEffect, useState } from 'react'
import { Container, Col, Row } from "react-bootstrap";
import { useSelector } from "react-redux";
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
       MDBRow,
} from "mdb-react-ui-kit";

const CustomerDetails = () => {

       let navigate = useNavigate();
       const { user: currentUser } = useSelector((state) => state.auth);

       // ✅ AUTH CHECK
       useEffect(() => {
              if (!currentUser) {
                     navigate("/Login");
              }
       }, [currentUser]);

       const [orders, setOrders] = useState([]);

       //  FETCH FUNCTION
       const fetchOrders = () => {
              if (currentUser?.id) {
                     axios
                            .get(`http://localhost:8090/api/ssorders/user/${currentUser.id}`)
                            .then((response) => {
                                   setOrders(response.data);
                            })
                            .catch((err) => console.log(err));
              }
       };

       // INITIAL FETCH
       useEffect(() => {
              fetchOrders();
       }, [currentUser]);

       //  AUTO REFRESH (Polling हर 5 sec)
       // useEffect(() => {
       //        const interval = setInterval(() => {
       //               fetchOrders();
       //        }, 5000);

       //        return () => clearInterval(interval);
       // }, [currentUser]);

       //  STEP LOGIC
       const getStep = (status) => {
              const s = status?.toLowerCase();

              switch (s) {
                     case "placed":
                            return 1;

                     case "shipped":
                            return 2;

                     case "out_for_delivery":
                            return 3;

                     case "delivered":
                            return 4;

                     default:
                            return 1;
              }
       };

       return (
              <Container>
                     <Row>
                            <Col md={12}>

                                   {
                                          orders.map((order, index) => {

                                                 const step = getStep(order.status);

                                                 return (
                                                        <Accordion key={index} className="mb-3">
                                                               <Accordion.Item eventKey="0">

                                                                      {/* HEADER */}
                                                                      <Accordion.Header>
                                                                             <b>Order ID:</b> {order._id}
                                                                             &nbsp;&nbsp;&nbsp;
                                                                             <b>Date:</b> {new Date(order.createdAt).toLocaleDateString()}
                                                                      </Accordion.Header>

                                                                      <Accordion.Body>

                                                                             {/* TABLE */}
                                                                             <Table striped bordered hover>
                                                                                    <thead>
                                                                                           <tr>
                                                                                                  <th>Sl</th>
                                                                                                  <th>Product Name</th>
                                                                                                  <th>Price</th>
                                                                                                  <th>Quantity</th>
                                                                                                  <th>Total</th>
                                                                                                  <th>Status</th>
                                                                                           </tr>
                                                                                    </thead>

                                                                                    <tbody>
                                                                                           {
                                                                                                  order.products?.length > 0 ? (
                                                                                                         order.products.map((product, i) => (
                                                                                                                <tr key={i}>
                                                                                                                       <td>{i + 1}</td>
                                                                                                                       <td>{product.productId.productName}</td>
                                                                                                                       <td>₹{product.price}</td>
                                                                                                                       <td>{product.quantity}</td>
                                                                                                                       <td>₹{product.price * product.quantity}</td>
                                                                                                                       <td>{order.status}</td>
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

                                                                             {/* ORDER STATUS */}
                                                                             <MDBContainer className="py-4">
                                                                                    <MDBRow>
                                                                                           <MDBCol>

                                                                                                  <MDBCard style={{ borderRadius: "10px" }}>
                                                                                                         <MDBCardBody>

                                                                                                                <div className="d-flex justify-content-between">
                                                                                                                       <h5>Order Status</h5>
                                                                                                                       
                                                                                                                </div>

                                                                                                                <hr />

                                                                                                                {/* STEPPER */}
                                                                                                                <div className="d-flex align-items-center">

                                                                                                                       <span className={step >= 1 ? "big-dot" : "dot"}></span>
                                                                                                                       <hr className="flex-fill track-line" />

                                                                                                                       <span className={step >= 2 ? "big-dot" : "dot"}></span>
                                                                                                                       <hr className="flex-fill track-line" />

                                                                                                                       <span className={step >= 3 ? "big-dot" : "dot"}></span>
                                                                                                                       <hr className="flex-fill track-line" />

                                                                                                                       <span className={step >= 4 ? "big-dot" : "dot"}></span>

                                                                                                                </div>

                                                                                                                {/* LABELS */}
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
                                          })
                                   }

                            </Col>
                     </Row>
              </Container>
       );
};

export default CustomerDetails;
