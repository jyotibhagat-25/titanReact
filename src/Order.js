import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'

const Order = () => {
  const products = [
    {
      "id": 1,
      "image": "https://www.titan.co.in/dw/image/v2/BKDD_PRD/on/demandware.static/-/Sites-titan-master-catalog/default/dwefe47821/images/Sonata/Catalog/SP70022NM01W_1.jpg?sw=360&sh=360"
    },
    {
      "id": 2,
      "image": "https://www.titan.co.in/dw/image/v2/BKDD_PRD/on/demandware.static/-/Sites-titan-master-catalog/default/dwa8451e9b/images/Fastrack/Catalog/38124NM01_1.jpg?sw=360&sh=360"
    },
    {
      "id": 3,
      "image": "https://www.titan.co.in/dw/image/v2/BKDD_PRD/on/demandware.static/-/Sites-titan-master-catalog/default/dwdb1cc7ca/images/Helios/Catalog/PLPEWJF0006302_1.jpg?sw=360&sh=360"
    },
    {
      "id": 4,
      "image": "https://www.titan.co.in/dw/image/v2/BKDD_PRD/on/demandware.static/-/Sites-titan-master-catalog/default/dweba55a48/images/Sonata/Catalog/SP70026QM01W_1.jpg?sw=360&sh=360"
    },
    {
      "id": 5,
      "image": "https://www.titan.co.in/dw/image/v2/BKDD_PRD/on/demandware.static/-/Sites-titan-master-catalog/default/dw7ec7ba59/images/Titan/Catalog/90205AM01_1.jpg?sw=360&sh=360"
    },
    {
      "id": 6,
      "image": "https://www.titan.co.in/dw/image/v2/BKDD_PRD/on/demandware.static/-/Sites-titan-master-catalog/default/dwe3aee88c/images/Fastrack/Catalog/FV30027KM02W_1.jpg?sw=360&sh=360"
    }
  ]
  return (
    <div>
      <section>
        <Container>
          <Row>
            <Col>
              {
                products.map((product,index)=>{
                  return(
                    <div>
                      <p>{product.id}</p>
                      <p><img src={product.image}/></p>
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

export default Order
