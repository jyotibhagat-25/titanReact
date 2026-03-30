import axios from 'axios';
import React, { useEffect, useState } from 'react'
import {
       MDBBtn,
       MDBCard,
       MDBCardBody,
       MDBCardFooter,
       MDBCardHeader,
       MDBCardImage,
       MDBCol,
       MDBContainer,
       MDBIcon,
       MDBRow,
       MDBTypography,
} from "mdb-react-ui-kit";

const OrderStatus = () => {

       //  Total Orders

       // const [orders, setOrders] = useState([]);

       // useEffect(() => {
       //        axios.get("http://localhost:8090/api/ssorders").then((response) => {
       //               console.log("order", response.data);
       //               setOrders(response.data);

       //        });
       // }, []);
       // Order Status

       const [status, setStatus] = useState([]);

       useEffect(() => {
              axios.put(`http://localhost:8090/api/ssorders/69b38d7899a9d581afe578d2/status`).then((response) => {
                     console.log("Status Success", response.data);
                     setStatus(response.data);

              });
       }, []);
       return (
              <div>
                     <section className="vh-100" style={{ backgroundColor: "#eee" }}>
                            <MDBContainer className="py-5 h-100">
                                   <MDBRow className="justify-content-center align-items-center h-100">
                                          <MDBCol>
                                                 {/* {
                                                      status.map((index,status)=>{
                                                        return(
                                                               <div>
                                                                      <p>{status.status}</p>
                                                               </div>
                                                        )
                                                      })  
                                                 } */}
                                                 <MDBCard
                                                        className="card-stepper"
                                                        style={{ borderRadius: "10px" }}
                                                 >
                                                        <MDBCardBody className="p-4">
                                                               <div className="d-flex justify-content-between align-items-center">
                                                                      <div className="d-flex flex-column">
                                                                             <span className="lead fw-normal">
                                                                                    Your order has been delivered
                                                                             </span>
                                                                             <span className="text-muted small">
                                                                                    by DHFL on 21 Jan, 2020
                                                                             </span>
                                                                      </div>
                                                                      <div>
                                                                             <MDBBtn outline>Track order details</MDBBtn>
                                                                      </div>
                                                               </div>

                                                               <hr className="my-4" />

                                                               <div className="d-flex flex-row justify-content-between align-items-center align-content-center">
                                                                      <span className="dot"></span>
                                                                      <hr className="flex-fill track-line" />
                                                                      <span className="dot"></span>
                                                                      <hr className="flex-fill track-line" />
                                                                      <span className="dot"></span>
                                                                      <hr className="flex-fill track-line" />
                                                                      <span className="dot"></span>
                                                                      <hr className="flex-fill track-line" />
                                                                      <span className="d-flex justify-content-center align-items-center big-dot dot">
                                                                             <MDBIcon icon="check text-white" />
                                                                      </span>
                                                               </div>

                                                               <div className="d-flex flex-row justify-content-between align-items-center">
                                                                      <div className="d-flex flex-column align-items-start">
                                                                             <span>15 Mar</span>
                                                                             <span></span>
                                                                      </div>
                                                                      <div className="d-flex flex-column justify-content-center">
                                                                             <span>15 Mar</span>
                                                                             <span>Order placed</span>
                                                                      </div>
                                                                      <div className="d-flex flex-column justify-content-center align-items-center">
                                                                             <span>15 Mar</span>
                                                                             <span>Order Dispatched</span>
                                                                      </div>
                                                                      <div className="d-flex flex-column align-items-center">
                                                                             <span>15 Mar</span>
                                                                             <span>Out for delivery</span>
                                                                      </div>
                                                                      <div className="d-flex flex-column align-items-end">
                                                                             <span>15 Mar</span>
                                                                             <span>Delivered</span>
                                                                      </div>
                                                               </div>
                                                        </MDBCardBody>
                                                 </MDBCard>
                                          </MDBCol>
                                   </MDBRow>
                            </MDBContainer>
                     </section>
              </div>
       )
}

export default OrderStatus
