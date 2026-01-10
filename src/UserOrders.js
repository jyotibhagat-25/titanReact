import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { Col, Container, Row, Card, Button } from 'react-bootstrap'

const UserOrders = () => {
       const [products, setProducts] = useState();
       useEffect(() => {
              axios.get("http://localhost:8090/api/ssproducts").then((response) => {
                     console.log(response.data);
                     setProducts(response.data)
              });

       }, []);
       return (
              <div>
                     <section>
                            <Container>
                                   <Row>
                                          {
                                                 products.map((product, index) => {
                                                        return (
                                                               <Col>
                                                                      <Card style={{ width: '18rem' }}>
                                                                             <Card.Img variant="top" src={product.images} />
                                                                             <Card.Body>
                                                                                    <Card.Title>{product.title}</Card.Title>
                                                                                    <Card.Text>
                                                                                           <p>{product.productCategory}</p>
                                                                                           <p>{product.productName}</p>
                                                                                           <p>Rs {product.productPrice}</p>
                                                                                    </Card.Text>
                                                                                    <Button variant="primary">Buy Now</Button>
                                                                             </Card.Body>
                                                                      </Card>
                                                               </Col>
                                                        )
                                                 })
                                          }
                                   </Row>
                            </Container>
                     </section>
              </div>
       )
}

export default UserOrders
