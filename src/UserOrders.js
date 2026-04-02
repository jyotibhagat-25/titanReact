// import axios from 'axios';
// import React, { useEffect, useState } from 'react'
// import { Col, Container, Row, Card, Button } from 'react-bootstrap'
// import Table from 'react-bootstrap/Table';
// import { useDispatch, useSelector } from 'react-redux';
// import { useNavigate } from 'react-router';
// // import Button from 'react-bootstrap/Button';
// import Modal from 'react-bootstrap/Modal';
// import { Formik, Form, Field } from 'formik';

// const UserOrders = () => {
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
//               axios.get("http://localhost:8090/api/ssorders").then((response) => {
//                      console.log("order", response.data);
//                      setOrders(response.data);

//               });
//        }, []);

//        // Order Status

//        // const [status, setStatus] = useState([]);

//        // useEffect(() => {
//        //        axios.put(`http://localhost:8090/api/ssorders/69b38d7899a9d581afe578d2/status`).then((response) => {
//        //               console.log("Status Success", response.data);
//        //               setStatus(response.data);

//        //        });
//        // }, []);

//        const [selectedStatus, setSelectedStatus] = useState("");
//        const handleShow = (id, currentStatus) => {
//               setShow(true);
//               setOrderId(id);
//               
//        };


//        //     MODAL USE TO CHANGE THE STATUS 

//        const [show, setShow] = useState(false);
//        const [orderId, setOrderId] = useState("");

//        const handleClose = () => {
//               setShow(false)
//               //// update



//               ///
//               setOrderId("")
//        };
//        // const handleShow = (id) => {
//        //        setShow(true)
//        //        setOrderId(id)
//        //        console.log(id)
//        // };

//        return (
//               <div>
//                      <section>
//                             <Container>
//                                    <Row>
//                                           <Col md={12}>

//                                                  {
//                                                         orders.map((order, index) => {
//                                                                return (
//                                                                       <div key={index}>



//                                                                              <Table striped bordered hover>
//                                                                                     <thead>
//                                                                                            <tr key={index}>
//                                                                                                   <th>Sl</th>
//                                                                                                   <th> Product Name</th>
//                                                                                                   <th> Customer Id</th>
//                                                                                                   <th> Category</th>
//                                                                                                   {/* <th> Description</th> */}
//                                                                                                   <th> Price</th>
//                                                                                                   <th> Status</th>

//                                                                                                   {/* <th>Edit</th>
//                                                                                                   <th>Delete</th> */}

//                                                                                            </tr>
//                                                                                     </thead>
//                                                                                     <tbody>

//                                                                                            {
//                                                                                                   order.products ?
//                                                                                                          order.products.map((product, index) => {
//                                                                                                                 return (
//                                                                                                                        <tr>
//                                                                                                                               <td>{index + 1}</td>
//                                                                                                                               <td>{product.productId.productName}</td>
//                                                                                                                               <td>{order.userId._id}</td>
//                                                                                                                               <td>{product.productId.productCategory}</td>
//                                                                                                                               {/* <td>{product.productId.productDescription}</td> */}
//                                                                                                                               <td>₹{product.productId.productPrice}</td>
//                                                                                                                               <td>{order.status}</td>
//                                                                                                                               <td><Button
//                                                                                                                                      variant="primary"
//                                                                                                                                      onClick={() => handleShow(order._id, order.status)}
//                                                                                                                               >
//                                                                                                                                      Change status
//                                                                                                                               </Button>

//                                                                                                                                      <Modal show={show} onHide={handleClose}>
//                                                                                                                                             <Modal.Header closeButton>
//                                                                                                                                                    <Modal.Title>Status Related</Modal.Title>
//                                                                                                                                             </Modal.Header>

//                                                                                                                                             <Formik
//                                                                                                                                                    enableReinitialize
//                                                                                                                                                    initialValues={{ status: selectedStatus }}
//                                                                                                                                                    onSubmit={(values) => {
//                                                                                                                                                           axios.put(`http://localhost:8090/api/ssorders/${orderId}/status`, {
//                                                                                                                                                                  status: values.status
//                                                                                                                                                           }).then(() => {

//                                                                                                                                                                  // refresh
//                                                                                                                                                                  axios.get("http://localhost:8090/api/ssorders")
//                                                                                                                                                                         .then((res) => setOrders(res.data));

//                                                                                                                                                                  handleClose();
//                                                                                                                                                           });
//                                                                                                                                                    }}
//                                                                                                                                             >
//                                                                                                                                                    {({ values, setFieldValue }) => (
//                                                                                                                                                           <Form>

//                                                                                                                                                                  <Modal.Body>

//                                                                                                                                                                         <div>
//                                                                                                                                                                                <input
//                                                                                                                                                                                       type="radio"
//                                                                                                                                                                                       checked={values.status === "placed"}
//                                                                                                                                                                                       onChange={() => setFieldValue("status", "placed")}
//                                                                                                                                                                                />
//                                                                                                                                                                                Ordered
//                                                                                                                                                                         </div>

//                                                                                                                                                                         <div>
//                                                                                                                                                                                <input
//                                                                                                                                                                                       type="radio"
//                                                                                                                                                                                       checked={values.status === "shipped"}
//                                                                                                                                                                                       onChange={() => setFieldValue("status", "shipped")}
//                                                                                                                                                                                />
//                                                                                                                                                                                Shipped
//                                                                                                                                                                         </div>

//                                                                                                                                                                         <div>
//                                                                                                                                                                                <input
//                                                                                                                                                                                       type="radio"
//                                                                                                                                                                                       checked={values.status === "out for delivery"}
//                                                                                                                                                                                       onChange={() => setFieldValue("status", "out for delivery")}
//                                                                                                                                                                                />
//                                                                                                                                                                                Out For Delivery
//                                                                                                                                                                         </div>

//                                                                                                                                                                         <div>
//                                                                                                                                                                                <input
//                                                                                                                                                                                       type="radio"
//                                                                                                                                                                                       checked={values.status === "delivered"}
//                                                                                                                                                                                       onChange={() => setFieldValue("status", "delivered")}
//                                                                                                                                                                                />
//                                                                                                                                                                                Delivered
//                                                                                                                                                                         </div>

//                                                                                                                                                                  </Modal.Body>

//                                                                                                                                                                  <Modal.Footer>
//                                                                                                                                                                         <Button variant="secondary" onClick={handleClose}>
//                                                                                                                                                                                Close
//                                                                                                                                                                         </Button>

//                                                                                                                                                                         <Button variant="primary" type="submit">
//                                                                                                                                                                                Save Changes
//                                                                                                                                                                         </Button>
//                                                                                                                                                                  </Modal.Footer>

//                                                                                                                                                           </Form>
//                                                                                                                                                    )}
//                                                                                                                                             </Formik>
//                                                                                                                                      </Modal></td>

//                                                                                                                        </tr>
//                                                                                                                 )
//                                                                                                          })
//                                                                                                          : "loading"
//                                                                                            }
//                                                                                     </tbody>
//                                                                              </Table>



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

// export default UserOrders




// import React from 'react'

// import axios from 'axios';
// import React, { useEffect, useState } from 'react'
// import { Col, Container, Row, Button } from 'react-bootstrap'
// import Table from 'react-bootstrap/Table';
// import { useSelector } from 'react-redux';
// import { useNavigate } from 'react-router';
// import Modal from 'react-bootstrap/Modal';

// const UserOrders = () => {

//        let navigate = useNavigate();
//        const { user: currentUser } = useSelector((state) => state.auth);

//        useEffect(() => {
//               if (!currentUser) {
//                      navigate("/Login");
//               }
//        }, [currentUser]);

//        /////       To Fetch Total Orders
//        const [orders, setOrders] = useState([]);

//        // const fetchOrders = () => {
//        //        axios.get("http://localhost:8090/api/ssorders")
//        //               .then((response) => {
//        //                      setOrders(response.data);
//        //               });
//        // };

//        // useEffect(() => {
//        //        fetchOrders();
//        // }, []);
//        useEffect(() => {
//               axios.get(`http://localhost:8090/api/ssorders`).then((response) => {
//                      console.log(response.data);
//                      setOrders(response.data);
//                      console.log(orders);
//               });

//        }, []);

//        //  MODAL STATE
//        const [show, setShow] = useState(false);
//        const [orderId, setOrderId] = useState("");
//        const [selectedStatus, setSelectedStatus] = useState("");

//        const handleShow = (id, currentStatus) => {
//               setShow(true);
//               setOrderId(id);
//               setSelectedStatus(currentStatus);
//        };

//        const handleClose = () => {
//               setShow(false);
//               setOrderId("");
//        };

//        //  NEXT STEP LOGIC
//        const getNextStatus = (current) => {
//               switch (current) {
//                      case "Ordered":
//                             return "Shipped";

//                      case "Shipped":
//                             return "Out for Delivery";

//                      case "Out for Delivery":
//                             return "Delivered";

//                      default:
//                             return "Ordered";
//               }
//        };

//        //  UPDATE STATUS
//        const handleUpdateStatus = () => {
//               const nextStatus = getNextStatus(selectedStatus);
//               console.log("Sending Status:", nextStatus);  // 👈 ADD THIS
//               console.log("Order ID:", orderId);          // 👈 ADD THIS


//               axios.put(`http://localhost:8090/api/ssorders/${orderId}/status`, {
//                      status: nextStatus


//               }).then(() => {
//                      // fetchOrders(); // refresh data
//                      handleClose();

//               });

//        };

//        return (
//               <div>
//                      <section>
//                             <Container>
//                                    <Row>
//                                           <Col md={12}>

//                                                  {
//                                                         orders.map((order, index) => (
//                                                                <div key={index}>

//                                                                       <Table striped bordered hover>
//                                                                              <thead>
//                                                                                     <tr>
//                                                                                            <th>Sl</th>
//                                                                                            <th>Product Name</th>
//                                                                                            <th>Customer Id</th>
//                                                                                            <th>Category</th>
//                                                                                            <th>Price</th>
//                                                                                            <th>Status</th>
//                                                                                            <th>Action</th>
//                                                                                     </tr>
//                                                                              </thead>

//                                                                              <tbody>
//                                                                                     {
//                                                                                            order.products?.map((product, i) => (
//                                                                                                   <tr key={i}>
//                                                                                                          <td>{i + 1}</td>
//                                                                                                          <td>{product.productId.productName}</td>
//                                                                                                          <td>{order.userId._id}</td>
//                                                                                                          <td>{product.productId.productCategory}</td>
//                                                                                                          <td>₹{product.productId.productPrice}</td>
//                                                                                                          <td>{order.status}</td>

//                                                                                                          <td>
//                                                                                                                 <Button variant="primary" onClick={() => handleShow(order._id, order.status)}>
//                                                                                                                        Update to {getNextStatus(order.status)}
//                                                                                                                 </Button>
//                                                                                                          </td>
//                                                                                                   </tr>
//                                                                                            ))
//                                                                                     }
//                                                                              </tbody>
//                                                                       </Table>

//                                                                </div>
//                                                         ))
//                                                  }

//                                           </Col>
//                                    </Row>
//                             </Container>

//                             {/* ✅ SINGLE MODAL (OUTSIDE MAP) */}
//                             <Modal show={show} onHide={handleClose}>
//                                    <Modal.Header closeButton>
//                                           <Modal.Title>Update Order Status</Modal.Title>
//                                    </Modal.Header>

//                                    <Modal.Body>
//                                           <p><b>Current Status:</b> {selectedStatus}</p>
//                                           <p><b>Next Status:</b> {getNextStatus(selectedStatus)}</p>
//                                    </Modal.Body>

//                                    <Modal.Footer>
//                                           <Button variant="secondary" onClick={handleClose}>
//                                                  Close
//                                           </Button>

//                                           <Button variant="success" onClick={handleUpdateStatus}>
//                                                  Confirm Update
//                                           </Button>
//                                    </Modal.Footer>
//                             </Modal>

//                      </section>
//               </div>
//        )
// }

// export default UserOrders;


// import axios from 'axios';
// import React, { useEffect, useState } from 'react'
// import { Col, Container, Row, Button } from 'react-bootstrap'
// import Table from 'react-bootstrap/Table';
// import { useSelector } from 'react-redux';
// import { useNavigate } from 'react-router';
// import Modal from 'react-bootstrap/Modal';

// const UserOrders = () => {

//        let navigate = useNavigate();
//        const { user: currentUser } = useSelector((state) => state.auth);

//        useEffect(() => {
//               if (!currentUser) {
//                      navigate("/Login");
//               }
//        }, [currentUser]);

//        // ✅ ORDERS STATE
//        const [orders, setOrders] = useState([]);

//        const fetchOrders = () => {
//               axios.get(`http://localhost:8090/api/ssorders`)
//                      .then((response) => {
//                             setOrders(response.data);
//                      });
//        };

//        useEffect(() => {
//               fetchOrders();
//        }, []);

//        // ✅ MODAL STATE
//        const [show, setShow] = useState(false);
//        const [orderId, setOrderId] = useState("");
//        const [selectedStatus, setSelectedStatus] = useState("");

//        const handleShow = (id, currentStatus) => {
//               setShow(true);
//               setOrderId(id);
//               setSelectedStatus(currentStatus?.trim()); // 🔥 FIX
//        };

//        const handleClose = () => {
//               setShow(false);
//               setOrderId("");
//        };

//        // ✅ NEXT STATUS WITHOUT SWITCH
//        const statusFlow = ["Ordered", "Shipped", "Out for Delivery", "Delivered"];

//        const getNextStatus = (current) => {
//               const index = statusFlow.indexOf(current);
//               if (index === -1) return "Ordered";
//               if (index === statusFlow.length - 1) return current; // last step
//               return statusFlow[index + 1];

//        };

//        // ✅ UPDATE STATUS
//        const handleUpdateStatus = () => {
//               const nextStatus = getNextStatus(selectedStatus);

//               console.log("Sending:", nextStatus);
//               console.log("OrderId:", orderId);

//               if (!orderId || !nextStatus) {
//                      alert("Something went wrong");
//                      return;
//               }

//               axios.put(`http://localhost:8090/api/ssorders/${orderId}/status`, {
//                      status: nextStatus
//               })
//                      .then(() => {
//                             fetchOrders(); // 🔥 IMPORTANT (refresh UI)
//                             handleClose();
//                      })
//                      .catch((err) => {
//                             console.log("ERROR:", err.response?.data || err.message);
//                      });
//        };

//        return (
//               <div>
//                      <section>
//                             <Container>
//                                    <Row>
//                                           <Col md={12}>

//                                                  {
//                                                         orders.map((order, index) => (
//                                                                <div key={index}>

//                                                                       <Table striped bordered hover>
//                                                                              <thead>
//                                                                                     <tr>
//                                                                                            <th>Sl</th>
//                                                                                            <th>Product Name</th>
//                                                                                            <th>Customer Id</th>
//                                                                                            <th>Category</th>
//                                                                                            <th>Price</th>
//                                                                                            <th>Status</th>
//                                                                                            <th>Action</th>
//                                                                                     </tr>
//                                                                              </thead>

//                                                                              <tbody>
//                                                                                     {
//                                                                                            order.products?.map((product, i) => (
//                                                                                                   <tr key={i}>
//                                                                                                          <td>{i + 1}</td>
//                                                                                                          <td>{product.productId.productName}</td>
//                                                                                                          <td>{order.userId._id}</td>
//                                                                                                          <td>{product.productId.productCategory}</td>
//                                                                                                          <td>₹{product.productId.productPrice}</td>
//                                                                                                          <td>{order.status}</td>

//                                                                                                          <td>
//                                                                                                                 <Button
//                                                                                                                        variant="primary"
//                                                                                                                        onClick={() => handleShow(order.id, order.status)}
//                                                                                                                 >
//                                                                                                                        Update to {getNextStatus(order.status)}
//                                                                                                                 </Button>
//                                                                                                          </td>
//                                                                                                   </tr>
//                                                                                            ))
//                                                                                     }
//                                                                              </tbody>
//                                                                       </Table>

//                                                                </div>
//                                                         ))
//                                                  }

//                                           </Col>
//                                    </Row>
//                             </Container>

//                             {/* ✅ MODAL */}
//                             <Modal show={show} onHide={handleClose}>
//                                    <Modal.Header closeButton>
//                                           <Modal.Title>Update Order Status</Modal.Title>
//                                    </Modal.Header>

//                                    <Modal.Body>
//                                           <p><b>Current Status:</b> {selectedStatus}</p>
//                                           <p><b>Next Status:</b> {getNextStatus(selectedStatus)}</p>
//                                    </Modal.Body>

//                                    <Modal.Footer>
//                                           <Button variant="secondary" onClick={handleClose}>
//                                                  Close
//                                           </Button>

//                                           <Button variant="success" onClick={handleUpdateStatus}>
//                                                  Confirm Update
//                                           </Button>
//                                    </Modal.Footer>
//                             </Modal>

//                      </section>
//               </div>
//        )
// }

// export default UserOrders;


// import axios from 'axios';
// import React, { useEffect, useState } from 'react'
// import { Col, Container, Row, Button } from 'react-bootstrap'
// import Table from 'react-bootstrap/Table';
// import Modal from 'react-bootstrap/Modal';

// const OrdersDetail = () => {

//        const [orders, setOrders] = useState([]);
//        const [show, setShow] = useState(false);
//        const [orderId, setOrderId] = useState("");
//        const [status, setStatus] = useState("");

//        // Fetch orders
//        useEffect(() => {
//               axios.get("http://localhost:8090/api/ssorders")
//                      .then((res) => setOrders(res.data))
//                      .catch((err) => console.log(err));
//        }, []);

//        const handleShow = (id, currentStatus) => {
//               setShow(true);
//               setOrderId(id);
//               setStatus(currentStatus?.trim());
//        };

//        const handleClose = () => {
//               setShow(false);
//               setOrderId("");
//               setStatus("");
//        };

//        // ✅ UPDATE STATUS
//        const updateStatus = () => {
//               if (!status || !orderId) return;

//               axios.put(
//                      `http://localhost:8090/api/ssorders/${orderId}/status`,
//                      { status: status }
//               )
//                      .then(res => {

//                             // 🔥 instant UI update
//                             setOrders(prev =>
//                                    prev.map(order =>
//                                           order.id === orderId ? { ...order, status: status } : order
//                                    )
//                             );

//                             handleClose();
//                      })
//                      .catch(err => console.log(err));
//        };

//        return (
//               <Container>
//                      <Row>
//                             <Col>
//                                    <h3>Orders</h3>

//                                    {orders.map((order, index) => (
//                                           <Table bordered key={index} className="mb-4">
//                                                  <tbody>

//                                                         {order.products?.map((product, i) => (
//                                                                <tr key={i}>
//                                                                       <td>{i + 1}</td>
//                                                                       <td>{product.productId?.productName}</td>
//                                                                       <td>₹{product.price}</td>
//                                                                       <td>{product.quantity}</td>
//                                                                       <td>{order.status}</td>

//                                                                       <td>
//                                                                              <Button onClick={() => handleShow(order.id, order.status)}>
//                                                                                     Update
//                                                                              </Button>
//                                                                       </td>
//                                                                </tr>
//                                                         ))}

//                                                  </tbody>
//                                           </Table>
//                                    ))}

//                                    {/* MODAL */}
//                                    <Modal show={show} onHide={handleClose}>
//                                           <Modal.Header closeButton>
//                                                  <Modal.Title>Update Status</Modal.Title>
//                                           </Modal.Header>

//                                           <Modal.Body>
//                                                  <select
//                                                         className="form-control"
//                                                         value={status}
//                                                         onChange={(e) => setStatus(e.target.value)}
//                                                  >
//                                                         <option value="">Select Status</option>
//                                                         <option value="Ordered">Ordered</option>
//                                                         <option value="Shipped">Shipped</option>
//                                                         <option value="Out for Delivery">Out for Delivery</option>
//                                                         <option value="Delivered">Delivered</option>
//                                                  </select>
//                                           </Modal.Body>

//                                           <Modal.Footer>
//                                                  <Button onClick={handleClose}>Close</Button>
//                                                  <Button onClick={updateStatus}>Save</Button>
//                                           </Modal.Footer>
//                                    </Modal>

//                             </Col>
//                      </Row>
//               </Container>
//        );
// };

// export default OrdersDetail;


import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { Col, Container, Row, Button } from 'react-bootstrap'
import Table from 'react-bootstrap/Table';
import Modal from 'react-bootstrap/Modal';

const OrdersDetail = () => {

       const [orders, setOrders] = useState([]);
       const [show, setShow] = useState(false);
       const [orderId, setOrderId] = useState("");
       const [status, setStatus] = useState("");

       // ✅ FETCH ORDERS
       const fetchOrders = () => {
              axios.get("http://localhost:8090/api/ssorders")
                     .then((res) => {
                            setOrders(Array.isArray(res.data) ? res.data : []);
                     })
                     .catch((err) => console.log(err));
       };

       useEffect(() => {
              fetchOrders();
       }, []);

       // ✅ OPEN MODAL
       const handleShow = (id, currentStatus) => {
              setShow(true);
              setOrderId(id);
              setStatus(currentStatus?.trim());
       };

       // ✅ CLOSE MODAL
       const handleClose = () => {
              setShow(false);
              setOrderId("");
              setStatus("");
       };

       // ✅ UPDATE STATUS (SAME WORKING LOGIC)
       const updateStatus = () => {
              if (!orderId || !status) return;

              axios.put(
                     `http://localhost:8090/api/ssorders/${orderId}/status`,
                     { status: status }
              )
                     .then(() => {

                            // 🔥 INSTANT UI UPDATE (NO REFETCH NEEDED)
                            setOrders(prev =>
                                   prev.map(order =>
                                          order.id === orderId ? { ...order, status: status } : order
                                   )
                            );

                            handleClose();
                     })
                     .catch(err => console.log(err));
       };

       return (
              <Container>
                     <Row>
                            <Col md={12}>

                                   <h3>Orders</h3>

                                   {
                                          orders.map((order, index) => (
                                                 <div key={index}>

                                                        {/* ✅ SAME OLD TABLE UI */}
                                                        <Table striped bordered hover className="mb-4">
                                                               <thead>
                                                                      <tr>
                                                                             <th>Sl</th>
                                                                             <th>Product Name</th>
                                                                             <th>Customer Id</th>
                                                                             <th>Category</th>
                                                                             <th>Price</th>
                                                                             <th>Status</th>
                                                                             <th>Action</th>
                                                                      </tr>
                                                               </thead>

                                                               <tbody>
                                                                      {
                                                                             order.products?.map((product, i) => (
                                                                                    <tr key={i}>
                                                                                           <td>{i + 1}</td>
                                                                                           <td>{product?.productId?.productName}</td>
                                                                                           <td>{order?.userId?._id}</td>
                                                                                           <td>{product?.productId?.productCategory}</td>
                                                                                           <td>₹{product?.productId?.productPrice}</td>
                                                                                           <td>{order?.status}</td>

                                                                                           <td>
                                                                                                  <Button
                                                                                                         variant="primary"
                                                                                                         onClick={() => handleShow(order.id, order.status)}
                                                                                                  >
                                                                                                         Change Status
                                                                                                  </Button>
                                                                                           </td>
                                                                                    </tr>
                                                                             ))
                                                                      }
                                                               </tbody>
                                                        </Table>

                                                 </div>
                                          ))
                                   }

                                   {/* ✅ SAME OLD MODAL UI */}
                                   <Modal show={show} onHide={handleClose}>
                                          <Modal.Header closeButton>
                                                 <Modal.Title>Update Status</Modal.Title>
                                          </Modal.Header>

                                          <Modal.Body>

                                                 <p><b>Order ID:</b> {orderId}</p>

                                                 <select
                                                        className="form-control"
                                                        value={status}
                                                        onChange={(e) => setStatus(e.target.value)}
                                                 >
                                                        <option value="">Select Status</option>
                                                        <option value="Ordered">Ordered</option>
                                                        <option value="Shipped">Shipped</option>
                                                        <option value="Out for Delivery">Out for Delivery</option>
                                                        <option value="Delivered">Delivered</option>
                                                 </select>

                                          </Modal.Body>

                                          <Modal.Footer>
                                                 <Button variant="secondary" onClick={handleClose}>
                                                        Close
                                                 </Button>

                                                 <Button variant="primary" onClick={updateStatus}>
                                                        Save Changes
                                                 </Button>
                                          </Modal.Footer>
                                   </Modal>

                            </Col>
                     </Row>
              </Container>
       );
};

export default OrdersDetail;
