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

       //  FETCH ORDERS
       // const fetchOrders = () => {
       //        axios.get("http://localhost:8090/api/ssorders")
       //               .then((res) => {
       //                      setOrders(Array.isArray(res.data) ? res.data : []);
       //               })
       //               .catch((err) => console.log(err));
       // };

       // useEffect(() => {
       //        fetchOrders();
       // }, []);

       useEffect(() => {
              axios.get("http://localhost:8090/api/ssorders")
                     .then((res) => {
                            console.log("total orders", res.data);
                            setOrders(res.data);
                     })
              // .catch((err) => {
              //   console.log(err);
              // });
       }, []);

       // OPEN MODAL
       const handleShow = (id, currentStatus) => {
              setShow(true);
              setOrderId(id);
              // setStatus(currentStatus?.trim());
       };

       // CLOSE MODAL
       const handleClose = () => {
              setShow(false);
              setOrderId("");
              setStatus("");
       };


       const updateStatus = () => {
              if (!orderId || !status) return;

              axios.put(
                     `http://localhost:8090/api/ssorders/${orderId}/status`,
                     { status: status }
              )
                     .then(() => {

                            // setOrders(prev =>
                            //        prev.map(order =>
                            //               order.id === orderId ? { ...order, status: status } : order
                            //        )
                            // );

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
