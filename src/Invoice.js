// import React from 'react'

// const Invoice = () => {
//   return (
//     <div>

//     </div>
//   )
// }

// export default Invoice


import axios from 'axios';
import React, { useEffect, useState } from "react";
import { Container, Row, Col } from 'react-bootstrap';
import { useSelector } from "react-redux";
import { useParams } from 'react-router';
import { usePDF } from 'react-to-pdf';

const Invoice = () => {

  const { user: currentUser } = useSelector((state) => state.auth);

  const [order, setOrder] = useState(null);

  const { id } = useParams();

  const { toPDF, targetRef } = usePDF({ filename: 'Invoice.pdf' });


  useEffect(() => {

    if (!currentUser) return;

    axios
      .get(`http://localhost:8090/api/ssorders/${id}`)
      .then((response) => {
        setOrder(response.data);
        console.log(response.data);
      })
      .catch((err) => console.log(err));

  }, [currentUser, id]);



  if (!order) {
    return <h2>Loading...</h2>;
  }

  const subtotal = order.products?.reduce(
    (acc, item) => acc + item.price * item.quantity,
    0
  );

  const tax = subtotal * 0.18;

  const total = subtotal + tax;

  return (

    <div className="invoice-container">

      <Container>

        <Row>

          <Col md={8} className="mx-auto">

            <div className="invoice-card">

              <h2 className="invoice-title">
                Tanishq Jewellery
              </h2>

              <div className="invoice-section">

                <p>
                  <strong>Order ID:</strong> {order.id}
                </p>

                <p>
                  <strong>Date:</strong>{" "}
                  {new Date(order.createdAt).toLocaleDateString()}
                </p>

              </div>

              <div className="invoice-section">

                <h4>Customer Details</h4>

                <p>{order.userId?.username}</p>

                <p>{order.userId?.email}</p>

              </div>

              <div className="invoice-section">

                <h4>Shipping Address</h4>

                <p>{order.addressId?.name}</p>

                <p>
                  {order.addressId?.addressLine1},
                  {" "}
                  {order.addressId?.city}
                </p>

                <p>
                  {order.addressId?.state}
                  {" - "}
                  {order.addressId?.pin}
                </p>

              </div>

              <table className="invoice-table">

                <thead>

                  <tr>
                    <th>Product</th>
                    <th>Price</th>
                    <th>Qty</th>
                    <th>Total</th>
                  </tr>

                </thead>

                <tbody>

                  {order.products?.map((item, index) => (

                    <tr key={index}>

                      <td>
                        {item.productId?.productName}
                      </td>

                      <td>
                        ₹{item.price.toLocaleString()}
                      </td>

                      <td>
                        {item.quantity}
                      </td>

                      <td>
                        ₹{(item.price * item.quantity).toLocaleString()}
                      </td>

                    </tr>

                  ))}

                </tbody>

              </table>

              <div className="invoice-summary">

                <p>
                  Subtotal: ₹{subtotal.toLocaleString()}
                </p>

                <p>
                  GST (18%): ₹{tax.toFixed(2)}
                </p>

                <h3>
                  Total: ₹{total.toLocaleString()}
                </h3>

              </div>

              {/* <button
                                className="print-btn"
                                onClick={() => window.print()}
                            >
                                Print Invoice
                            </button> */}


              <div>
                <button onClick={() => toPDF()}>Download PDF</button>
                <div ref={targetRef}>

                  {/*  */}


                  <div className="invoice-container">

                    <Container>

                      <Row>

                        <Col md={8} className="mx-auto">

                          <div className="invoice-card">

                            <h2 className="invoice-title">
                              Tanishq Jewellery
                            </h2>

                            <div className="invoice-section">

                              <p>
                                <strong>Order ID:</strong> {order.id}
                              </p>

                              <p>
                                <strong>Date:</strong>{" "}
                                {new Date(order.createdAt).toLocaleDateString()}
                              </p>

                            </div>

                            <div className="invoice-section">

                              <h4>Customer Details</h4>

                              <p>{order.userId?.username}</p>

                              <p>{order.userId?.email}</p>

                            </div>

                            <div className="invoice-section">

                              <h4>Shipping Address</h4>

                              <p>{order.addressId?.name}</p>

                              <p>
                                {order.addressId?.addressLine1},
                                {" "}
                                {order.addressId?.city}
                              </p>

                              <p>
                                {order.addressId?.state}
                                {" - "}
                                {order.addressId?.pin}
                              </p>

                            </div>

                            <table className="invoice-table">

                              <thead>

                                <tr>
                                  <th>Product</th>
                                  <th>Price</th>
                                  <th>Qty</th>
                                  <th>Total</th>
                                </tr>

                              </thead>

                              <tbody>

                                {order.products?.map((item, index) => (

                                  <tr key={index}>

                                    <td>
                                      {item.productId?.productName}
                                    </td>

                                    <td>
                                      ₹{item.price.toLocaleString()}
                                    </td>

                                    <td>
                                      {item.quantity}
                                    </td>

                                    <td>
                                      ₹{(item.price * item.quantity).toLocaleString()}
                                    </td>

                                  </tr>

                                ))}

                              </tbody>

                            </table>

                            <div className="invoice-summary">

                              <p>
                                Subtotal: ₹{subtotal.toLocaleString()}
                              </p>

                              <p>
                                GST (18%): ₹{tax.toFixed(2)}
                              </p>

                              <h3>
                                Total: ₹{total.toLocaleString()}
                              </h3>

                            </div>






                          </div>

                        </Col>

                      </Row>

                    </Container>

                  </div>






                  {/*  */}
                </div>
              </div>

            </div>

          </Col>

        </Row>

      </Container>

    </div>
  );
};

export default Invoice;