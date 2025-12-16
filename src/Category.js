import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

const Category = () => {
  const products = [
    {
      "id": 1,
      "category": "Men",
      "description": "Titan Quartz Multifunction Blue Dial",
      "image": "https://www.titan.co.in/dw/image/v2/BKDD_PRD/on/demandware.static/-/Sites-titan-master-catalog/default/dw91bcfc7b/images/Sonata/Catalog/77031KM02_1.jpg?sw=360&sh=360"

    },
    {
      "id": 2,
      "category": "Women",
      "description": " Raga Women's Charm: Elegant Mother of Pearl Dial ",
      "image": "https://www.titan.co.in/dw/image/v2/BKDD_PRD/on/demandware.static/-/Sites-titan-master-catalog/default/dw1e380d61/images/Titan/Catalog/2725WM01_1.jpg?sw=360&sh=360"


    },
    {
      "id": 3,
      "category": "smartwatch",
      "image": "https://www.titan.co.in/dw/image/v2/BKDD_PRD/on/demandware.static/-/Sites-titan-master-catalog/default/dw5a755061/images/Fastrack/Catalog/38153NP01_1.jpg?sw=360&sh=360",
      "description": "Fastrack Astor FR2 Pro Smart Watch",


    },
    {
      "id": 4,
      "category": "gifting",
      "description": "Raga Women's Viva Trendsetter Rose Gold Watch ",
      "image": "https://www.titan.co.in/dw/image/v2/BKDD_PRD/on/demandware.static/-/Sites-titan-master-catalog/default/dw1e380d61/images/Titan/Catalog/2725WM01_1.jpg?sw=360&sh=360",


    },
    {
      "id": 5,
      "category": "brand",
      "description": "Titan Raga Viva Blue Dial Analog with Date Silver Metal Strap",
      "image": "https://www.titan.co.in/dw/image/v2/BKDD_PRD/on/demandware.static/-/Sites-titan-master-catalog/default/dw84e61324/images/Sonata/Catalog/SP70006QM02_1.jpg?sw=360&sh=360",

    },
    {
      "id": 6,
      "category": "Titan",
      "description": "Titan Quartz Multifunction Blue Dial",
      "image": "https://www.titan.co.in/dw/image/v2/BKDD_PRD/on/demandware.static/-/Sites-titan-master-catalog/default/dw673df0c2/images/Titan/Catalog/1578SM04_1.jpg?sw=360&sh=360",

    },
    {
      "id": 7,
      "category": "tommy hilfiger",
      "description": "Tommy Hilfiger Quartz Multifunction Brown dial Stainless Steel Strap Watch for Men",
      "image": "https://www.titan.co.in/dw/image/v2/BKDD_PRD/on/demandware.static/-/Sites-titan-master-catalog/default/dw9a595bd0/images/Helios/Catalog/TH1791560_1.jpg?sw=360&sh=360",

    },
    {
      "id": 8,
      "category": "Ducati",
      "description": "Ducati Quartz Chronograph Black Dial Silver Stainless Steel Strap Watch For Men",
      "image": "https://www.titan.co.in/dw/image/v2/BKDD_PRD/on/demandware.static/-/Sites-titan-master-catalog/default/dw0889d2fd/images/Helios/Catalog/DTWGI0002401W_1.jpg?sw=360&sh=360",

    },
    {
      "id": 9,
      "category": "kenneth cole",
      "description": "Kenneth Cole Quartz Analog Green Dial Green Stainless Steel & Ceramic Strap Watch For Women",
      "image": "https://www.titan.co.in/dw/image/v2/BKDD_PRD/on/demandware.static/-/Sites-titan-master-catalog/default/dw52e96522/images/Helios/Catalog/KCWGX0064902MN_1.jpg?sw=360&sh=360",

    },
    {
      "id": 10,
      "category": "Anne klein",
      "description": "Anne Klein Quartz Analog Pink Dial Plastic Strap Watch For Women",
      "image": "https://www.titan.co.in/dw/image/v2/BKDD_PRD/on/demandware.static/-/Sites-titan-master-catalog/default/dw8da20bfd/images/Helios/Catalog/AK1906RGRG_1.jpg?sw=360&sh=360",

    }
  ]
  return (
    <div>
      <section>
        <Container>
          <Row>

            {
              products.map((product, index) => {
                return (
                  // <img src={product.image}/>
                  <Col>
                    <Card style={{ width: '18rem' }}>
                      <Card.Img variant="top" src={product.image} />
                      <Card.Body>
                        <Card.Title>{product.category}</Card.Title>
                        <Card.Text>
                          <p>{product.description}</p>
                        </Card.Text>
                        <Button variant="primary">Buy Now</Button>
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

export default Category
