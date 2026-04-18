import axios, { all } from 'axios';
import React, { useEffect, useState } from 'react'
import { Col, Container, Row, Card, Button } from 'react-bootstrap'
import { IoMdHeartEmpty } from 'react-icons/io';
import { MdOutlineShoppingCart } from 'react-icons/md';
import { useDispatch, useSelector } from 'react-redux';
import { Link, useNavigate, useParams } from 'react-router';
import Slider from 'rc-slider';
import 'rc-slider/assets/index.css';


const Category = () => {

  const { categoryName } = useParams();

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

  //////    TO SHOW THE PRODUCT BASED ON PRICE
  const [priceRange, setPriceRange] = useState([1000, 50000]);


  useEffect(() => {
    axios.get(`http://localhost:8090/api/ssproducts/category/${categoryName}`).then((response) => {
      console.log(response.data);
      setProducts(response.data);
      console.log(products);
    });

  }, [categoryName]);

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
  ////    TO SHOW THE PRODUCT ACCORDING TO THE PRICE IN ASCENDING OR DESCENDING ORDER

  const [sortOrder, setSortOrder] = useState("asc");


  const [category, setCategory] = useState("all");

  const uniqueCategory = [...new Set(products.map(product => product.productCategory))]
  console.log(uniqueCategory)

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
      <section>
        <Container>
          <Row>
            <Col className='category-name'>

              <h2>{categoryName}</h2>
              <h5>Choose Category</h5>
              <p>
                Price : {priceRange[0]} - {priceRange[1]}<Slider range min={1000} max={50000} value={priceRange} onChange={(value) => setPriceRange(value)} defaultValue={[1000, 50000]} />
              </p>
              {/* <Button onClick={() => sortOrder === "asc" ? setSortOrder("desc") : setSortOrder("asc")}>{sortOrder === "asc" ? "desc" : "asc"}</Button> */}
              <Button onClick={() => setSortOrder("asc")}>
                Price Low to High
              </Button>

              <Button onClick={() => setSortOrder("desc")}>
                Price High to Low
              </Button>

              <select onChange={(e) => setCategory(e.target.value)}>
                <option value="all">All</option>
                {
                  uniqueCategory.map((category, index) => {
                    return (
                      <option key={index} value={category}>
                        {category}
                      </option>
                    )
                  })
                }
              </select>



            </Col>


          </Row>
          <Row>
            {
              products
                .filter(product => product.productCategory === category || category === "all")
                .filter(product => product.productPrice >= priceRange[0] && product.productPrice <= priceRange[1])
                .sort((a, b) => { if (sortOrder === "asc") { return a.productPrice - b.productPrice } else { return b.productPrice - a.productPrice } })
                .map((product, index) => {
                  return (
                    // <img src={product.image}/>
                    <Col className='card-product'>
                      <Card style={{ width: '18rem' }}>
                        {/* <Card.Img variant="top" src={product.image} /> */}
                        <Card.Body>
                          <Card.Title>{product.category}</Card.Title>

                          {/*  TO LINK THE ENTIRE PRODUCT */}

                          <Link to={`/ViewProduct/${product.id}`} style={{ textDecoration: "none", color: 'inherit' }}>
                            <Card.Text key={index}>
                              <p><img src={`http://localhost:8090/upload/${product.images[0]}`} /></p>
                              <p><b>| {product.productName}</b></p>
                              <p>{product.productDescription}</p>
                              <p>{product.productCategory}</p>
                              <p>₹{product.productPrice}</p>
                              <Button type="submit" className='icon-btn-wishlist' onClick={() => handleWishlist(product)}><IoMdHeartEmpty /></Button>
                              <Button type="submit" className='icon-btn-cart' onClick={() => handleCart(product)}><MdOutlineShoppingCart /></Button>
                              {/* <Link >View</Link> */}
                            </Card.Text>
                          </Link>
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
