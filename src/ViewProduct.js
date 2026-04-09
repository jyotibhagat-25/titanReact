import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { Button, Card, Col, Container, Row } from 'react-bootstrap';
import { Link, useParams } from 'react-router'

const ViewProduct = () => {

       const { productId } = useParams();
       const [product, setProduct] = useState({})
       useEffect(() => {
              axios.get(`http://localhost:8090/api/ssproducts/${productId}`).then((response) => {
                     console.log("productData", response.data);
                     setProduct(response.data);
              });

       }, []);

       return (
              <div>
                     <section>
                            <Container>
                                   <Row>
                                          <Col className='view-product'>
                                                 <Card style={{ width: '18rem' }}>
                                                        {/* <Card.Img variant="top" src="holder.js/100px180" /> */}
                                                        <Card.Body>
                                                               <Card.Title></Card.Title>
                                                               <Card.Text>
                                                                      <p><img src={`http://localhost:8090/upload/${product?.images?.[0]}`} /></p>
                                                                      <p><b>| {product.productName}</b></p>
                                                                      <p>{product.productDescription}</p>
                                                                      <p>{product.productCategory}</p>
                                                                      <p>₹{product.productPrice}</p>

                                                               </Card.Text>
                                                               <Col>

                                                                      <Button type="submit" className='buttons'>Add to cart</Button>
                                                               </Col>

                                                        </Card.Body>

                                                 </Card>
                                          </Col>
                                   </Row>
                            </Container>
                     </section>
              </div>
       )
}

export default ViewProduct
