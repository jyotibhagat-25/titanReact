import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { Col, Container, Row } from 'react-bootstrap'


const Category = () => {
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
                  products.map((product,index)=>{
                    return(
                      <div>
                        <p>{product.id}</p>
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

export default Category
