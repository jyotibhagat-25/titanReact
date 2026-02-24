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
                                                                             {/* <Card.Img variant="top" src={product.images} /> */}
                                                                             <Card.Body>
                                                                                    <Card.Title>{product.title}</Card.Title>
                                                                                    <Card.Text>
                                                                                           <p><img src={`http://localhost:8090/upload/${product.images[0]}`} /></p>
                                                                                           <p>{product.productCategory}</p>
                                                                                           <p>{product.productName}</p>
                                                                                           <p>Rs{product.productPrice}</p>
                                                                                    </Card.Text>
                                                                                    <Col md={5}>

                                                                                           <Button type="submit" className='buttons'>Buy Now</Button>

                                                                                    </Col>
                                                                             </Card.Body>
                                                                      </Card>
                                                               </Col>
                                                        );
                                                 })
                                          }
                                   </Row>
                            </Container>
                     </section>
              </div>
       )
}

export default UserOrders
