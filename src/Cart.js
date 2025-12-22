import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import Table from 'react-bootstrap/Table';

const Cart = () => {
  const [products, setProducts] = useState();

  useEffect(() => {
    axios.get("http://localhost:8090/api/cats").then((response) => {
      console.log(response.data);
      setProducts(response.data)
    });

  }, []);
  const [count, setCount] = useState(0);
  console.log(count);
  
  const increase = () => {
    setCount(count + 1);
  }
  const decrease = () => {
    setCount(count - 1);
  }
  return (
    <div>
      <section>
        <Container>
          <Row>
            <Col>
              <Table striped bordered hover>
                <thead>
                  <tr>
                    <th>Product Name</th>
                    <th>Product Price</th>
                    <th>Product Quantity</th>

                  </tr>
                </thead>
                <tbody>

                  {
                    products ?
                      products.map((product, index) => {
                        return (
                          <tr>
                            {/* <td>{index + 1}</td> */}
                            <td>{product.name}</td>
                            <td>{product.price}</td>
                            <td><button onClick={increase}>+</button>&nbsp;&nbsp;
                              <button onClick={decrease}>-</button></td>
                          
                              

                          </tr>
                        )
                      })
                      : "loading"
                  }
                </tbody>
              </Table>
            </Col>
          </Row>
        </Container>
      </section>
    </div>
  )
}

export default Cart
