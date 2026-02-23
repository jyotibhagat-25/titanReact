import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { IoMdHeartEmpty } from 'react-icons/io';
import { MdOutlineShoppingCart } from 'react-icons/md';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router';
// import "./Wishlist.css";
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
    //   THIS IS FOR ADMIN PAGE ONLY
    // if (currentUser && currentUser.roles[0] !== "ROLE_ADMIN") {
    //   console.log(currentUser.roles[0]);

    //   navigate("/home");
    // }      
  }, [currentUser]);

  useEffect(() => {
    axios.get(` http://localhost:8090/api/wishlist/user/${currentUser.id}`).then((response) => {
      console.log(response.data);
      setWishlistProducts(response.data)
    });

  }, []);
  const handleCart = (product) => {
    console.log(product);
    const data = {
      userId: currentUser.id,
      items: [{
        productId: product.id,
        quantity: 1,
        price: product.productPrice
      }]
    }
    axios.post(`http://localhost:8090/api/carts`, data).then((response) => {
      console.log(response.data);
      console.log("successfully Added");
      window.location.reload();


    });
  }

  return (
    <div>
      <section className='product-data'>
        <Container>
          <Row>
            {
              wishlistproducts.map((wishlistproduct, index) => {
                return (
                  // <img src={product.image}/>
                  <Col className='wishlist-product' >
                    <Card style={{ width: '18rem' }}>
                      {/* <Card.Img variant="top" src={product.image} /> */}
                      <Card.Body>
                        {/* <Card.Title>{wishlistproduct.productId.productName}</Card.Title> */}
                        <Card.Text>
                          <p><img src={`http://localhost:8090/upload/${wishlistproduct.productId.images[0]}`} /></p>
                          <p>{wishlistproduct.productId.productCategory}</p>
                          <p>₹{wishlistproduct.productId.productPrice}</p>
                          <p>{wishlistproduct.productId.productDescription}</p>
                          {/* <Button type="submit" className='icon-btn-cart' onClick={() => handleCart(wishlistproduct)}><MdOutlineShoppingCart /></Button> */}

                        </Card.Text>
                        <Row>
                          {/* <Col md={5}>

                            <Button type="submit" className='buttons'>Buy Now</Button>

                          </Col> */}
                          <Col md={12}>
                            <Button type="submit" className='buttons' onClick={() => handleCart(wishlistproduct)}>Add To Cart</Button>
                          </Col>
                        </Row>

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

export default Wishlist
