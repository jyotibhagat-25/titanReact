import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { Card, Col, Container, Row } from 'react-bootstrap'
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import { Link, useParams } from 'react-router';

const Slide = () => {
       const { categoryName } = useParams();
       // const [allProducts, setAllProducts] = useState([]);
       // useEffect(() => {
       //        axios.get("http://localhost:8090/api/ssproducts/new/all").then((response) => {
       //               console.log(response.data);
       //               setAllProducts(response.data)
       //        });

       // }, []);

       const responsive = {
              superLargeDesktop: {
                     // the naming can be any, depends on you.
                     breakpoint: { max: 4000, min: 3000 },
                     items: 5
              },
              desktop: {
                     breakpoint: { max: 3000, min: 1024 },
                     items: 7
              },
              tablet: {
                     breakpoint: { max: 1024, min: 464 },
                     items: 2
              },
              mobile: {
                     breakpoint: { max: 464, min: 0 },
                     items: 1
              }
       };
       return (
              <div>
                     <section>
                            <Container>
                                   <Row>
                                          <Col>
                                                 <Carousel responsive={responsive}>
                                                        <div>
                                                               <Col >
                                                                      <Link to={'Category/New Arrival'}><img src='https://www.titan.co.in/dw/image/v2/BKDD_PRD/on/demandware.static/-/Library-Sites-TitanSharedLibrary/default/dwa4446693/images/smart_mar.jpg' alt='' /></Link>
                                                                      <p>New Arrival</p>
                                                               </Col>
                                                        </div>
                                                        <div>
                                                               <Col >
                                                                      <Link to={'Category/Kenneth cole'}><img src='https://www.titan.co.in/dw/image/v2/BKDD_PRD/on/demandware.static/-/Library-Sites-TitanSharedLibrary/default/dw2fcb1ac7/images/SMART_bestway.jpg' alt='' /></Link>
                                                                      <p>Kenneth Cole</p>
                                                               </Col>
                                                        </div>
                                                        <div>
                                                               <Col >
                                                                      <Link to={'Category/Anne klein'}><img src='https://www.titan.co.in/dw/image/v2/BKDD_PRD/on/demandware.static/-/Library-Sites-TitanSharedLibrary/default/dw6e1c29f5/images/bestseller_mar.jpg' alt='' /></Link>
                                                                      <p>Anne Klein</p>
                                                               </Col>
                                                        </div>
                                                        <div>
                                                               <Col>
                                                                      <Link to={'Category/Raga'}><img src='https://www.titan.co.in/dw/image/v2/BKDD_PRD/on/demandware.static/-/Library-Sites-TitanSharedLibrary/default/dw9e74cb0d/images/raga_bestway.jpg' alt='' /></Link>
                                                                      <p>Raga</p>
                                                               </Col>
                                                        </div>
                                                        
                                                        <div>
                                                               <Col>
                                                                      <Link to={'Category/Police'}><img src='https://www.titan.co.in/dw/image/v2/BKDD_PRD/on/demandware.static/-/Library-Sites-TitanSharedLibrary/default/dw64c44520/images/LUXE_bestway.jpg' alt='' /></Link>
                                                                      <p>Police</p>
                                                               </Col>
                                                        </div>
                                                        <div>
                                                               <Col>
                                                                      <Link to={'Category/Women'}><img src='https://www.titan.co.in/dw/image/v2/BKDD_PRD/on/demandware.static/-/Library-Sites-TitanSharedLibrary/default/dw4f3847ed/images/women_mar.jpg' alt='' /></Link>
                                                                      <p>Women</p>
                                                               </Col>
                                                        </div>
                                                        <div>
                                                               <Col>
                                                                      <Link to={'Category/Men'}><img src='https://www.titan.co.in/dw/image/v2/BKDD_PRD/on/demandware.static/-/Library-Sites-TitanSharedLibrary/default/dwba5e41d4/images/MEN_bestway.jpg' alt='' /></Link>
                                                                      <p>Men</p>
                                                               </Col>
                                                        </div>
                                                        
                                                        <div>
                                                               <Col>
                                                                      <Link to={'Category/Kids'}><img src='https://www.titan.co.in/dw/image/v2/BKDD_PRD/on/demandware.static/-/Library-Sites-TitanSharedLibrary/default/dw43a80cbb/images/kids.jpg' alt='' /></Link>
                                                                      <p>Kids</p>
                                                               </Col>
                                                        </div>
                                                        
                                                        
                                                        <div>
                                                               <Col>
                                                                      <Link to={'Category/Ducati'}><img src='https://www.titan.co.in/dw/image/v2/BKDD_PRD/on/demandware.static/-/Library-Sites-TitanSharedLibrary/default/dw34276b43/images/New_Arrivals_thumb.jpg' alt='' /></Link>
                                                                      <p>Ducati</p>
                                                               </Col>
                                                        </div>
                                                 </Carousel>
                                          </Col>
                                   </Row>
                            </Container>
                     </section>
                     {/* <section>
                            <Container>
                                   <Row>

                                          {
                                                 allProducts.map((allProduct, index) => {
                                                        return (
                                                               
                                                               <Col className='wishlist-product'>
                                                                      <Card style={{ width: '18rem' }}>
                                                                             
                                                                             <Card.Body>
                                                                                     <Card.Title>{wishlistproduct.productId.productName}</Card.Title> 
                                                                                    <Card.Text>
                                                                                           <p><img src={`http://localhost:8090/upload/${allProduct.images[0]}`} /></p>
                                                                                           <p>{allProduct.productCategory}</p>
                                                                                           <p>₹{wishlistproduct.productId.productPrice}</p>
                                                                                           <p>{wishlistproduct.productId.productDescription}</p>
                                                                                           <Button type="submit" className='icon-btn-cart' onClick={() => handleCart(wishlistproduct)}><MdOutlineShoppingCart /></Button>

                                                                                    </Card.Text>
                                                                                    <Row>
                                                                                          
                                                                                           
                                                                                    </Row>

                                                                             </Card.Body>
                                                                      </Card>
                                                               </Col>
                                                        );
                                                 })
                                          }


                                   </Row>
                            </Container>
                     </section>  */}
              </div>
       )
}

export default Slide
