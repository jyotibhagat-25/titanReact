import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { Col, Container, Row, Card, Button } from 'react-bootstrap';
import { IoMdHeartEmpty } from 'react-icons/io';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router';
import { MdOutlineShoppingCart } from "react-icons/md";


const TestProduct = () => {
       const [products, setProducts] = useState([]);
let navigate = useNavigate();
  const dispatch = useDispatch();
  const { user: currentUser } = useSelector((state) => state.auth);
  useEffect(() => {
    if (currentUser) {
      console.log(currentUser);
    }
    if (currentUser && currentUser.roles[0] !== "ROLE_ADMIN") {
      console.log(currentUser.roles[0]);

      navigate("/TestProduct");
    }
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
              const data={
                userId:currentUser.id,
                items:[{
                    productId:product.id,
                    quantity:1,
                    price:product.productPrice
                }]
              }
              axios.post(`http://localhost:8090/api/carts`,data ).then((response) => {
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
    console.log(data)
    axios.post(`http://localhost:8090/api/wishlist`, data).then((response) => {
      console.log(response.data);
      console.log("successfully Added to wishlist");
      window.location.reload();


    });
  }
       return (
              <div>
       

       <section>
                 <Container>
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
                                                <Button type="submit" className='icon-btn-wishlist' onClick={() => handleWishlist(product)}><IoMdHeartEmpty /></Button>  
                                                <Button type="submit" className='icon-btn-cart'onClick={() => handleCart(product)}><MdOutlineShoppingCart /></Button>
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
// import axios from 'axios';
// import React, { useEffect, useState } from 'react'
// import { Container, Row, Col, Table } from 'react-bootstrap';

// const Products = () => {

//     const [products, setproducts] = useState([]);

//     useEffect(() => {
//         axios.get("http://localhost:8090/api/ssproducts").then((response) => {
//             console.log(response.data);
//             setproducts(response.data);
//             console.log(products);
//         });

//     }, []);
//     return (
//         <div>
//             <section>
//                 <Container>
//                     <Row className='mapingimage'>
//                         <Col>

//                             <h4>Products</h4>
//                             <Table striped bordered hover>
//                                 <thead>
//                                     <tr>
//                                         <th>Sl</th>
//                                         <th> Name</th>
//                                         <th>Image</th>
//                                         <th>Category</th>
//                                         <th>Price</th>
//                                         <th>Description</th>
//                                         <th>Gender</th>
//                                     </tr>
//                                 </thead>
//                                 <tbody>
//                                     {
//                                         products.map((product, index) => {
//                                             return (



//                                                 <tr>
//                                                     <td>{index + 1}</td>
//                                                     <td>{product.productName}</td>
//                                                     {/* <td>{<img src={product.images[0]}/>}</td> */}
//                                                     <td><img src={`http://localhost:8090/upload/${product.images[0]}`} /></td>


//                                                     <td>{product.productCategory}</td>
//                                                     <td>{product.productPrice}</td>
//                                                     <td>{product.productDescription}</td>
//                                                     <td>{product.productGender}</td>



//                                                 </tr>
//                                             )
//                                         })


//                                     }
//                                 </tbody>
//                             </Table>

//                         </Col>
//                     </Row>
//                 </Container>
//             </section>
//         </div>
//     )
// }

// export default Products

// import React from 'react'

// const TestProduct = () => {
//   return (
//     <div>
      
//     </div>
//   )
// }

// export default TestProduct
