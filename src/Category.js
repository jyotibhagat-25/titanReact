import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { Col, Container, Row ,Card, Button} from 'react-bootstrap'
import { IoMdHeartEmpty } from 'react-icons/io';
import { MdOutlineShoppingCart } from 'react-icons/md';
import { useParams } from 'react-router';


const Category = () => {

  const { categoryName } = useParams();

  const [products, setProducts] = useState([]);


  useEffect(() => {
    axios.get(`http://localhost:8090/api/ssproducts/category/${categoryName}`).then((response) => {
      console.log(response.data);
      setProducts(response.data);
      console.log(products);
    });

  }, [categoryName]);

  return (
    <div>
      <section>
        <Container>
          <Row>
            <Col>
            <h1>{categoryName}</h1>
            </Col>
          </Row>
          <Row>
            {
              products.map((product, index) => {
                return (
                  // <img src={product.image}/>
                  <Col className='card-product'>
                    <Card style={{ width: '18rem' }}>
                      {/* <Card.Img variant="top" src={product.image} /> */}
                      <Card.Body>
                        <Card.Title>{product.category}</Card.Title>
                        <Card.Text>
                          <p><img src={`http://localhost:8090/upload/${product.images[0]}`} /></p>
                          <p><b>| {product.productName}</b></p>
                          <p>{product.productDescription}</p>
                          <p>{product.productCategory}</p>
                          <p>₹{product.productPrice}</p>
                          <Button type="submit" className='icon-btn-wishlist'><IoMdHeartEmpty /></Button>
                          <Button type="submit" className='icon-btn-cart' ><MdOutlineShoppingCart /></Button>
                        </Card.Text>
                        <Col>

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

export default Category
