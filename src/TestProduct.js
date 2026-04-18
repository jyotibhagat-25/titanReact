import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { Col, Container, Row, Card, Button, Breadcrumb } from 'react-bootstrap';
import { IoMdHeartEmpty } from 'react-icons/io';
import { useDispatch, useSelector } from 'react-redux';
import { Link, useNavigate } from 'react-router';
import { MdOutlineShoppingCart } from "react-icons/md";
// import "./common-for-all.css";


const TestProduct = () => {
  const [products, setProducts] = useState([]);
  let navigate = useNavigate();
  const dispatch = useDispatch();
  const { user: currentUser } = useSelector((state) => state.auth);
  useEffect(() => {
    if (currentUser) {
      console.log(currentUser);
    }
    // if (currentUser && currentUser.roles[0] !== "ROLE_ADMIN") {
    //   console.log(currentUser.roles[0]);

    //   navigate("/TestProduct");
    // }
  }, [currentUser]);
  useEffect(() => {
    axios.get("http://localhost:8090/api/ssproducts").then((response) => {
      console.log(response.data);
      setProducts(response.data);
      console.log(products);
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
  const handleWishlist = (product) => {
    console.log(product);
    const data = {
      userId: currentUser.id,
      productId: product.id,
    }
    // try{
    console.log(data)
    axios.post(`http://localhost:8090/api/wishlist`, data).then((response) => {
      console.log(response.data);
      console.log("successfully Added to wishlist");
      window.location.reload();


    })
      .catch((error) => {
        console.log(error.response)
        if (error.response?.status === 409) {
          alert("product already in wishlist")
        }
        else {
          alert("Something wrong")
        }
      })

  }


  return (
    <div>


      <section >
        <Container>
          <Row>
            <Col md={3} className='menu'>
              <Breadcrumb>
                <Breadcrumb.Item href="/Home">Home</Breadcrumb.Item>
                <Breadcrumb.Item href="#">
                  Dashboard
                </Breadcrumb.Item>

              </Breadcrumb>
              <div >
                <Row>
                  <h6>Menu</h6>
                  <Link to={'/Dashboard'} className='link-area'><p>Dashboard</p></Link>
                </Row>
              </div>
              {/* <div>
                <Row>
                  <Link to={'/Brand'} className='link-area'><p>International Brand</p></Link>


                </Row>
              </div>
              <div>
                <Row>
                  <Link to={'/Men'} className='link-area'><p>Men</p></Link>

                </Row>
              </div>
              <div>
                <Row>
                  <Link to={'/Women'} className='link-area'><p>Women</p></Link>


                </Row>
              </div> */}
              <div>
                <Row>
                  <Link to={'/AddProduct'} className='link-area'><p>Add Product</p></Link>


                </Row>
              </div>
              <div>
                <Row>
                  <Link to={'/AddCategory'} className='link-area'><p>Add Category</p></Link>


                </Row>
              </div>
              <div>
                <Row>
                  <h6>Management</h6>
                  <Link to={'/TestProduct'} className='link-area'><p>Total Products</p></Link>

                </Row>
              </div>
              <div>
                <Row>
                  <Link to={'/AdminOrders'} className='link-area'><p>Product Details</p></Link>


                </Row>
              </div>
              <div>
                {/* <Row>

                  <Link to={'/CustomerDetails'} className='link-area'><p>Customer Details</p></Link>

                </Row> */}
                <Row>

                  <Link to={'/UserOrders'} className='link-area'><p>User Orders Details</p></Link>

                </Row>
              </div>
              <div>
                <Row>
                  <h6>Notification</h6>
                  <p>Transaction</p>

                </Row>
              </div>
              <div>
                <Row>
                  <p>Message</p>

                </Row>
              </div>

            </Col>

            {
              products.map((product, index) => {
                return (

                  <Col className='card-product'>
                    <Card style={{ width: '18rem' }}>

                      <Card.Body className='images'>
                        <Card.Title>{product.category}</Card.Title>
                        <Card.Text key={index}>
                          <p><img src={`http://localhost:8090/upload/${product.images[0]}`} /></p>
                          <p><b>| {product.productName}</b></p>
                          <p>{product.productDescription}</p>
                          <p>{product.productCategory}</p>
                          <p>₹{product.productPrice}</p>
                          <Button type="submit" className='icon-btn-wishlist' onClick={() => handleWishlist(product)}><IoMdHeartEmpty /></Button>
                          <Button type="submit" className='icon-btn-cart' onClick={() => handleCart(product)}><MdOutlineShoppingCart /></Button>
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

export default TestProduct

