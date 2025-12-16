import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

const Slide = () => {
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
                                                                      <img src='https://www.titan.co.in/dw/image/v2/BKDD_PRD/on/demandware.static/-/Library-Sites-TitanSharedLibrary/default/dwbe3d1757/images/SALE_bestway.jpg' alt='' />
                                                                      <p>Sale</p>
                                                               </Col>
                                                        </div>
                                                        <div>
                                                               <Col >
                                                                      <img src='https://www.titan.co.in/dw/image/v2/BKDD_PRD/on/demandware.static/-/Library-Sites-TitanSharedLibrary/default/dw2fcb1ac7/images/SMART_bestway.jpg' alt='' />
                                                                      <p>Smart</p>
                                                               </Col>
                                                        </div>
                                                        <div>
                                                               <Col >
                                                                      <img src='https://www.titan.co.in/dw/image/v2/BKDD_PRD/on/demandware.static/-/Library-Sites-TitanSharedLibrary/default/dw9e74cb0d/images/raga_bestway.jpg' alt='' />
                                                                      <p>Raga</p>
                                                               </Col>
                                                        </div>
                                                        <div>
                                                               <Col >
                                                                      <img src='https://www.titan.co.in/dw/image/v2/BKDD_PRD/on/demandware.static/-/Library-Sites-TitanSharedLibrary/default/dw65169d2d/images/NEW_ARRIVALS_bestway.jpg' alt='' />
                                                                      <p>New Arrival</p>
                                                               </Col>
                                                        </div>
                                                        <div>
                                                               <Col >
                                                                      <img src='https://www.titan.co.in/dw/image/v2/BKDD_PRD/on/demandware.static/-/Library-Sites-TitanSharedLibrary/default/dw64c44520/images/LUXE_bestway.jpg' alt='' />
                                                                      <p>Luxe</p>
                                                               </Col>
                                                        </div>
                                                        <div>
                                                               <Col>
                                                                      <img src='https://www.titan.co.in/dw/image/v2/BKDD_PRD/on/demandware.static/-/Library-Sites-TitanSharedLibrary/default/dwa5e6b08e/images/COUPLE_bestway.jpg' alt='' />
                                                                      <p>Couple</p>
                                                               </Col>
                                                        </div>
                                                        <div>
                                                               <Col>
                                                                      <img src='https://www.titan.co.in/dw/image/v2/BKDD_PRD/on/demandware.static/-/Library-Sites-TitanSharedLibrary/default/dwba5e41d4/images/MEN_bestway.jpg' alt='' />
                                                                      <p>Men</p>
                                                               </Col>
                                                        </div>
                                                        <div>
                                                               <Col >
                                                                      <img src='https://www.titan.co.in/dw/image/v2/BKDD_PRD/on/demandware.static/-/Library-Sites-TitanSharedLibrary/default/dwefbab774/images/CLOCKS_bestway.jpg' alt='' />
                                                                      <p>Clocks</p>
                                                               </Col>
                                                        </div>
                                                        <div>
                                                               <Col >
                                                                      <img src='https://www.titan.co.in/dw/image/v2/BKDD_PRD/on/demandware.static/-/Library-Sites-TitanSharedLibrary/default/dw43a80cbb/images/kids.jpg' alt='' />
                                                                      <p>Kids</p>
                                                               </Col>
                                                        </div>
                                                        <div>
                                                               <Col >
                                                                      <img src='https://www.titan.co.in/dw/image/v2/BKDD_PRD/on/demandware.static/-/Library-Sites-TitanSharedLibrary/default/dwe64c203a/images/Dec-mag-icon.jpg' alt='' />
                                                                      <p>Mag By Titan</p>
                                                               </Col>
                                                        </div>
                                                        <div>
                                                               <Col >
                                                                      <img src='https://www.titan.co.in/dw/image/v2/BKDD_PRD/on/demandware.static/-/Library-Sites-TitanSharedLibrary/default/dwff30f749/images/ragaB.jpg' alt='' />
                                                                      <p>Raga</p>
                                                               </Col>
                                                        </div>
                                                        <div>
                                                               <Col >
                                                                      <img src='https://www.titan.co.in/dw/image/v2/BKDD_PRD/on/demandware.static/-/Library-Sites-TitanSharedLibrary/default/dw34276b43/images/New_Arrivals_thumb.jpg' alt='' />
                                                                      <p>New Arrival</p>
                                                               </Col>
                                                        </div>
                                                 </Carousel>
                                          </Col>
                                   </Row>
                            </Container>
                     </section>
              </div>
       )
}

export default Slide
