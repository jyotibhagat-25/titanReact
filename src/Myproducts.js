
import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { Col, Container, Row } from 'react-bootstrap';
// import React from 'react'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

const Myproducts = () => {
       const [products, setProducts] = useState();

       useEffect(() => {
              axios.get("https://fakestoreapi.com/products").then((response) => {
                     console.log(response.data);
                     setProducts(response.data)
              });

       }, []);
       return (
              <div>
                     <section>
                            <Container>
                                   <Row>
                                          <Col>
                                                 {
                                                        products ?
                                                               products.map((product, index) => {
                                                                      return (
                                                                             <div>
                                                                                    {product.id}
                                                                                    {/* <Card style={{ width: '18rem' }}>
                                                                                           <Card.Img variant="top" src="" />
                                                                                           <Card.Body>
                                                                                                  <Card.Title>Card Title</Card.Title>
                                                                                                  <Card.Text>
                                                                                                        
                                                                                                  </Card.Text>
                                                                                                  <Button variant="primary">Go somewhere</Button>
                                                                                           </Card.Body>
                                                                                    </Card> */}
                                                                                    
                                                                             </div>
                                                                      )
                                                               })
                                                               : "loading"
                                                 }
                                          </Col>
                                   </Row>
                            </Container>
                     </section>
              </div>
       )
}

export default Myproducts
