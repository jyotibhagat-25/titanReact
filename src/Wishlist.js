import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { IoMdHeartEmpty } from 'react-icons/io';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router';
// import { MdOutlineShoppingCart } from 'react-icons/md';

const Wishlist = () => {

  const [wishlistproducts, setWishlistProducts] = useState([]);

  let navigate = useNavigate();
  const dispatch = useDispatch();
  const { user: currentUser } = useSelector((state) => state.auth);
  useEffect(() => {
    if (currentUser) {
      console.log(currentUser);
    }
    //   THIS IS FOR ADMIN ONLY
    // if (currentUser && currentUser.roles[0] !== "ROLE_ADMIN") {
    //   console.log(currentUser.roles[0]);

    //   navigate("/Wishlist");
    // }      
  }, [currentUser]);

  useEffect(() => {
    axios.get(` http://localhost:8090/api/wishlist/user/${currentUser.id}`).then((response) => {
      console.log(response.data);
      setWishlistProducts(response.data)
    });

  }, []);

  return (
    <div>
      <section>
        <Container>
          <Row>
            {
              wishlistproducts.map((wishlistproduct, index) => {
                return (
                  // <img src={product.image}/>
                  <Col>
                    <Card style={{ width: '18rem' }}>
                      {/* <Card.Img variant="top" src={product.image} /> */}
                      <Card.Body>
                        <Card.Title>{wishlistproduct.productId.productName}</Card.Title>
                        <Card.Text>
                          {/* <p><img src={`http://localhost:8090/upload/${wishlistproduct.images[0]}`} /></p> */}
                          <p>{wishlistproduct.productId.images}</p>
                          <p>{wishlistproduct.productId.productCategory}</p>
                          <p>₹{wishlistproduct.productId.productPrice}</p>
                          <p>{wishlistproduct.productId.productDescription}</p>
                        </Card.Text>
                        {/* <Button variant="primary">Buy Now</Button> */}
                      </Card.Body>
                    </Card>
                  </Col>
                );
              })
            }

            {/* {
              wishlistproducts.map((wishlistproduct, index) => {
                return (
                  // <img src={product.image}/>
                  <Col className='card-product'>
                    <Card style={{ width: '18rem' }}>
                      <Card.Img variant="top" src={wishlistproduct.image} />
                      <Card.Body>
                        <Card.Title>{wishlistproduct.category}</Card.Title>
                        <Card.Text>
                          <p><img src={`http://localhost:8090/upload/${product.images[0]}`} /></p>
                          <p> {wishlistproduct.id}</p>
                          <p>{wishlistproduct.description}</p>

                          <Button type="submit" className='icon-btn-cart' onClick={() => handleCart(product)}><MdOutlineShoppingCart /></Button>
                        </Card.Text>
                        <Col>

                          <Button type="submit" className='buttons'>Buy Now</Button>
                          <Button type="submit" className='icon-btn-cart' onClick={() => handleWishlist(wishlistproduct)}><IoMdHeartEmpty /></Button>

                        </Col>
                      </Card.Body>
                    </Card>
                  </Col>
                );
              })
            } */}
          </Row>
        </Container>
      </section>
    </div>
  )
}

export default Wishlist
