import React from 'react'
import { Button, Col, Container, Row } from 'react-bootstrap'

const Product1 = () => {
  return (
    <div>
      <section className='productimage'>
        <Container>
          <Row>
            <Col md={2}>
              <div className='image'>
                <ul>
                  <li>
                    <img src='https://www.titan.co.in/dw/image/v2/BKDD_PRD/on/demandware.static/-/Sites-titan-master-catalog/default/dwf5666e88/images/Fastrack/Catalog/38148QM01_1.jpg?sw=600&sh=600' />
                  </li>
                  <li>
                    <img src='https://www.titan.co.in/dw/image/v2/BKDD_PRD/on/demandware.static/-/Sites-titan-master-catalog/default/dwa9392e23/images/Fastrack/Catalog/38148QM01_2.jpg?sw=115&sh=115' />
                  </li>
                  <li>
                    <img src='https://www.titan.co.in/dw/image/v2/BKDD_PRD/on/demandware.static/-/Sites-titan-master-catalog/default/dw12a36a3d/images/Fastrack/Catalog/38148QM01_3.jpg?sw=600&sh=600' />
                  </li>
                  <li>
                    <img src='https://www.titan.co.in/dw/image/v2/BKDD_PRD/on/demandware.static/-/Sites-titan-master-catalog/default/dw41afa8a5/images/Fastrack/Catalog/38148QM01_4.jpg?sw=600&sh=600' />
                  </li>
                  <li>
                    <img src='https://www.titan.co.in/dw/image/v2/BKDD_PRD/on/demandware.static/-/Sites-titan-master-catalog/default/dw87f6a615/images/Fastrack/Catalog/38148QM01_5.jpg?sw=115&sh=115' />
                  </li>
                  <li>
                    <img src='https://www.titan.co.in/dw/image/v2/BKDD_PRD/on/demandware.static/-/Sites-titan-master-catalog/default/dw9db1e8d0/images/Fastrack/Catalog/38148QM01_6.jpg?sw=600&sh=600' />
                  </li>
                </ul>

              </div>
            </Col>
            <Col md={5}>
              <img src='https://www.titan.co.in/dw/image/v2/BKDD_PRD/on/demandware.static/-/Sites-titan-master-catalog/default/dwf5666e88/images/Fastrack/Catalog/38148QM01_1.jpg?sw=600&sh=600' />

            </Col>
            <Col md={5}>
              <div>
                <p>Fastrack Marvellous FX2 Unisex Smart Watch With Black Metal Strap</p>
                <p>₹ 6,499.00</p>
                  <p>
                    Inclusive of all taxes*
                  </p>
                  <p>expected delivery date </p>
                  <Button className='button1'>Add to Cart</Button>
                  <Button className='button2'>Buy Now</Button>
              </div>

            </Col>

          </Row>
        </Container>
      </section>

    </div>
  )
}

export default Product1

