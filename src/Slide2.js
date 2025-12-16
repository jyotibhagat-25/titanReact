import React from 'react'
import { Col, Container, Row } from 'react-bootstrap';
// import Carousel from "react-multi-carousel";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import './Slide2.css'

const Slide2 = () => {

       const responsive = {
              superLargeDesktop: {
                     // the naming can be any, depends on you.
                     breakpoint: { max: 4000, min: 3000 },
                     items: 5
              },
              desktop: {
                     breakpoint: { max: 3000, min: 1024 },
                     items: 5
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
                     <section className='slides'>
                            <Container>
                                   <Row>
                                          <Col>
                                                 <Carousel responsive={responsive}>
                                                        <Col>
                                                               <div>
                                                                      <img src='https://www.titan.co.in/dw/image/v2/BKDD_PRD/on/demandware.static/-/Library-Sites-TitanSharedLibrary/default/dwe4480ac1/images/homepage/All_Banners/Glimmers_newarrival_d.jpg' alt='' />
                                                               </div>
                                                        </Col>
                                                        <Col>
                                                               <div>
                                                                      <img src='https://www.titan.co.in/dw/image/v2/BKDD_PRD/on/demandware.static/-/Library-Sites-TitanSharedLibrary/default/dw049755d0/images/homepage/All_Banners/Stellar_3_NA_D.jpg' alt='' />
                                                               </div>
                                                        </Col>
                                                        <Col>
                                                               <div>
                                                                      <img src='https://www.titan.co.in/dw/image/v2/BKDD_PRD/on/demandware.static/-/Library-Sites-TitanSharedLibrary/default/dwebf7cbea/images/homepage/All_Banners/NA_RagaCocktails_D.jpg' alt='' />
                                                               </div>
                                                        </Col>
                                                        <Col>
                                                               <div>
                                                                      <img src='https://www.titan.co.in/dw/image/v2/BKDD_PRD/on/demandware.static/-/Library-Sites-TitanSharedLibrary/default/dw9a60f1af/images/homepage/Titan-purple-updated-sep-25-d.jpg' alt='' />

                                                               </div>
                                                        </Col>

                                                        <Col>
                                                               <div>
                                                                      <img src='https://www.titan.co.in/dw/image/v2/BKDD_PRD/on/demandware.static/-/Library-Sites-TitanSharedLibrary/default/dwd9c8ccf8/images/homepage/All_Banners/NA_Automatics_FY25_D.jpg' alt='' />

                                                               </div>
                                                        </Col>
                                                        <Col>
                                                               <div>
                                                                      <img src='https://www.titan.co.in/dw/image/v2/BKDD_PRD/on/demandware.static/-/Library-Sites-TitanSharedLibrary/default/dw83817a15/images/Stellar_D.jpg' alt='' />

                                                               </div>
                                                        </Col>
                                                        <Col>
                                                               <div>
                                                                      <img src='https://www.titan.co.in/dw/image/v2/BKDD_PRD/on/demandware.static/-/Library-Sites-TitanSharedLibrary/default/dwb7d230af/images/Astral-Watch_New-Arrival-Banner_Sep_d.jpg' alt='' />

                                                               </div>
                                                        </Col>
                                                        <Col>
                                                               <div>
                                                                      <img src='https://www.titan.co.in/dw/image/v2/BKDD_PRD/on/demandware.static/-/Library-Sites-TitanSharedLibrary/default/dw56c44965/images/Memoir_D.jpg' alt='' />

                                                               </div>
                                                        </Col>
                                                        <Col>
                                                               <div>
                                                                      <img src='https://www.titan.co.in/dw/image/v2/BKDD_PRD/on/demandware.static/-/Library-Sites-TitanSharedLibrary/default/dwc6867e46/images/NA_Zoop_D.jpg' alt='' />

                                                               </div>
                                                        </Col>
                                                 </Carousel>
                                          </Col>
                                   </Row>
                            </Container>
                     </section>
              </div>
       )
}

export default Slide2
