import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { Col, Container, Row,Card,Button } from 'react-bootstrap';

const Product2 = () => {
       const [products, setProducts] = useState();
       useEffect(() => {
              axios.get("https://dummyjson.com/products").then((response) => {
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
                                                                                    <Card style={{ width: '18rem' }}>
                                                                                           <Card.Img variant="top" src={product.images} />
                                                                                           <Card.Body>
                                                                                                  <Card.Title>Card Title</Card.Title>
                                                                                                  <Card.Text>
                                                                                                         {product.title}
                                                                                                  </Card.Text>
                                                                                                  <Button variant="primary">Go somewhere</Button>
                                                                                           </Card.Body>
                                                                                    </Card>
                                                                             </div>
                                                                      )
                                                               }) : "loading"
                                                 }
                                          </Col>
                                   </Row>
                            </Container>
                     </section>
              </div>
       )
}

export default Product2
