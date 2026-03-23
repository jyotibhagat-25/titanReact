import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { Col, Container, Row, Card, Button } from 'react-bootstrap'
import Table from 'react-bootstrap/Table';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router';

const UserOrders = () => {
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
                     console.log("Success", response.data);
                     setOrders(response.data);

              });
       }, []);
       return (
              <div>
                     <section>
                            <Container>
                                   <Row>
                                          <Col md={12}>

                                                 {
                                                        orders.map((order, index) => {
                                                               return (
                                                                      <div key={index}>

                                                                             {/* {
                                                                                                         orders.map((order,index)=>{
                                                                                                                return(
                                                                                                                       <div>
                                                                                                                              
                                                                                                                              {
                                                                                                                                     order.products ?
                                                                                                                                            order.products.map((product, index)=>{
                                                                                                                                                   return(
                                                                                                                                                  <div key={index}>
                                                                                                                                                   <p>{product.productId}</p>
                                                                                                                                                   <p>{product.price}</p>
                                                                                                                                                   <p>{product.quantity}</p>
                                                                                                                                                   <p>{product.price * product.quantity}</p>
                                                                                                                                                  </div>
                                                                                                                                                  
                                                                                                                                            )
                                                                                                                                            
                                                                                                                                            }
                                                                                                                                            
                                                                                                                                            )
                                                                                                                                     :

                                                                                                                                     "Something wrong"

                                                                                                                              }
                                                                                                                       </div>
                                                                                                                )
                                                                                                         })
                                                                                                  } */}

                                                                             {/* <Table striped bordered hover>
                                                                                                         <thead>
                                                                                                                <tr>
                                                                                                                       <th>Sl</th>
                                                                                                                       <th>Product Id</th>
                                                                                                                       <th>Product Price</th>
                                                                                                                       <th>Product Quantity</th>
                                                                                                                       <th>Total Amount</th>


                                                                                                                </tr>
                                                                                                         </thead>
                                                                                                         <tbody>

                                                                                                                {
                                                                                                                       order.products ?
                                                                                                                              order.products.map((product, index) => {
                                                                                                                                     return (
                                                                                                                                            <tr key={index}>
                                                                                                                                                   <td>{index + 1}</td>
                                                                                                                                                   <td>{product.productId}</td>
                                                                                                                                                    <td><img src={`http://localhost:8090/upload/${cartItem.productDetails.images[0]}`} /></td> 
                                                                                                                                                   <td>₹{product.price}</td>
                                                                                                                                                   <td>{product.quantity}</td>
                                                                                                                                                   <td>₹{product.price * product.quantity}</td>



                                                                                                                                            </tr>
                                                                                                                                     )
                                                                                                                              })
                                                                                                                              : "No items available"
                                                                                                                }
                                                                                                         </tbody>
                                                                                                  </Table> */}

                                                                             <Table striped bordered hover>
                                                                                    <thead>
                                                                                           <tr key={index}>
                                                                                                  <th>Sl</th>
                                                                                                  <th> Product Id</th>
                                                                                                  <th> Customer Id</th>
                                                                                                  <th> Category</th>
                                                                                                  <th> Description</th>
                                                                                                  <th> Price</th>
                                                                                                  <th> Last Status</th>

                                                                                                  {/* <th>Edit</th>
                                                                                                  <th>Delete</th> */}

                                                                                           </tr>
                                                                                    </thead>
                                                                                    <tbody>

                                                                                           {
                                                                                                  order.products ?
                                                                                                         order.products.map((product, index) => {
                                                                                                                return (
                                                                                                                       <tr>
                                                                                                                              <td>{index + 1}</td>
                                                                                                                              <td>{product.productId}</td>
                                                                                                                              <td>{order.id}</td>
                                                                                                                              <td>{product.productCategory}</td>
                                                                                                                              <td>{product.productDescription}</td>
                                                                                                                              <td>₹{product.productPrice}</td>
                                                                                                                              <td>pending</td>
                                                                                                                              {/* <td><AiOutlineEdit /></td> */}
                                                                                                                              {/* <td><button onClick={() => handleDelete(product.id)}><AiOutlineDelete /></button></td> */}
                                                                                                                       </tr>
                                                                                                                )
                                                                                                         })
                                                                                                         : "loading"
                                                                                           }
                                                                                    </tbody>
                                                                             </Table>



                                                                      </div>
                                                               )
                                                        })
                                                 }

                                          </Col>
                                   </Row>
                            </Container>
                     </section>
              </div>
       )
}

export default UserOrders
