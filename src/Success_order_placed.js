import React from 'react'
import { Button, Col, Container, Row } from 'react-bootstrap'
import Alert from 'react-bootstrap/Alert';


const Success_order_placed = () => {
       return (
              <div>
                     <section>
                            <Container>
                                   <Row>
                                          <Col>
                                                 <Alert variant="success">
                                                        <Alert.Heading>order placed</Alert.Heading>
                                                        <p>
                                                               Order successfully placed
                                                        </p>
                                                        <hr />
                                                        {/* <p className="mb-0">
                                                               Continue Shopping
                                                        </p> */}
                                                        <Button>Continue Shopping</Button>
                                                 </Alert>
                                          </Col>
                                   </Row>
                            </Container>
                     </section>
              </div>
       )
}

export default Success_order_placed
