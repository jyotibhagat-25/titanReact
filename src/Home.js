import React from 'react'
import { Container, Row, Col } from 'react-bootstrap'
import Carousel from 'react-bootstrap/Carousel';
import Slide from './Slide';
import Slide2 from './Slide2';
// import ExampleCarouselImage from 'components/ExampleCarouselImage';
// import Carousel from "react-multi-carousel";
// import "react-multi-carousel/lib/styles.css";



const Home = () => {
  const slides = [
    {
      "id": 1,
      "image": "https://www.titan.co.in/dw/image/v2/BKDD_PRD/on/demandware.static/-/Library-Sites-TitanSharedLibrary/default/dw513a545b/images/homepage/All_Banners/Stellar_Wandering_Hours_D.jpg"
      // "label": "label1",
      // "description":"image1"

    },
    {
      "id": 2,
      "image": "https://www.titan.co.in/dw/image/v2/BKDD_PRD/on/demandware.static/-/Library-Sites-TitanSharedLibrary/default/dwf6db4b10/images/homepage/All_Banners/WW_D.jpg"
      // "label": "label2",
      // "description":"image2"

    },
    {
      "id": 3,
      "image": "https://www.titan.co.in/dw/image/v2/BKDD_PRD/on/demandware.static/-/Library-Sites-TitanSharedLibrary/default/dw91514aca/images/homepage/All_Banners/ClocksNew_D.jpg"
      // "label": "label3",
      // "description":"image3"

    },
    {
      "id": 4,
      "image": "https://www.titan.co.in/dw/image/v2/BKDD_PRD/on/demandware.static/-/Library-Sites-TitanSharedLibrary/default/dw77a245f6/images/homepage/All_Banners/NewArrivals_Sept_D.jpg"
      // "label": "label4",
      // "description":"image4"
    },
    {
      "id": 5,
      "image": "https://www.titan.co.in/dw/image/v2/BKDD_PRD/on/demandware.static/-/Library-Sites-TitanSharedLibrary/default/dw1aee99cc/images/homepage/All_Banners/Titan_Smart_Evoke_Oct_25_d.jpg"
      // "label":"label5",
      // "description":"image5"

    },
    {
      "id": 6,
      "image": "https://www.titan.co.in/dw/image/v2/BKDD_PRD/on/demandware.static/-/Library-Sites-TitanSharedLibrary/default/dw9562ddec/images/homepage/All_Banners/Raga_Glimmers_D.jpg"
      // "label":"label6",
      // "description":"image6"

    },
    {
      "id": 7,
      "image": "https://www.titan.co.in/dw/image/v2/BKDD_PRD/on/demandware.static/-/Library-Sites-TitanSharedLibrary/default/dwfeedbf65/images/homepage/All_Banners/BestSellers_Sept_D.jpg"
      // "label":"label7",
      // "description":"image7"

    },
    {
      "id": 8,
      "image": "https://www.titan.co.in/dw/image/v2/BKDD_PRD/on/demandware.static/-/Library-Sites-TitanSharedLibrary/default/dw396610fd/images/homepage/All_Banners/IB_JanSale_FY25_D.jpg"
      // "label":"label8",
      // "description":"image8"

    }
  ]
  
  return (
    <div>

      <section className='slidearea'>
        <Container fluid>
          <Row>
            <Col>
              <Carousel>
                {
                  slides.map((slide, index) => {
                    return (
                      <Carousel.Item key={index}>
                        <img src={slide.image} className='img-fluid' />
                        <Carousel.Caption>
                          <h3>{slide.label}</h3>
                          <p>{slide.description}</p>
                        </Carousel.Caption>
                      </Carousel.Item>
                    )
                  })
                }

              </Carousel>
            </Col>
          </Row>
        </Container >
      </section>
      <section className='giftarea'>
        <Container>
          <Row>
            <Col md={6}>
              <img src='https://www.titan.co.in/dw/image/v2/BKDD_PRD/on/demandware.static/-/Library-Sites-TitanSharedLibrary/default/dwce062adf/images/Him_Utsav_Sale_Sep_d.jpg' alt='' />
            </Col>
            <Col md={6}>
              <img src='https://www.titan.co.in/dw/image/v2/BKDD_PRD/on/demandware.static/-/Library-Sites-TitanSharedLibrary/default/dw4fc2f729/images/Her_Updated_Utsav_Sale_Sep_d.jpg' alt='' />
            </Col>
          </Row>
        </Container>
      </section>
      <section className='imgsection' >
        <Container>
          <Row>
            <div>
              <Col>
                <h3>THE BEST WAY TO BUY THE PRODUCTS YOU LOVE</h3>

              </Col>
            </div>
          </Row>

          <Row>
            <Slide></Slide>
          </Row>
        </Container>
      </section>
      <section className='alia'>
        <Container>
          <Row>
            <div className='headings'>
              <Col>
                <h3>NEW ARRIVAL</h3>
              </Col>
            </div>
          </Row>
          <Row>
            <Slide2></Slide2>

          </Row>
        </Container>
      </section>
      <section className='raga'>
        <Container>
          <Row>
            <div>
              <Col>
                <h3>COLLECTION</h3>
              </Col>
            </div>
          </Row>
          <Row>
            <Col md={3}>
              <div className='raga1'><img src='https://www.titan.co.in/on/demandware.static/-/Library-Sites-TitanSharedLibrary/default/dw1af669ec/images/homepage/All_Banners/cocktails_COLLECTION_Updated_Sep_d.jpg' alt='' /></div>

            </Col>
            <Col md={3}>
              <div className='raga1'>
                <img src='https://www.titan.co.in/on/demandware.static/-/Library-Sites-TitanSharedLibrary/default/dw3132ef50/images/homepage/All_Banners/edge_COLLECTION_Updated_Sep_d.jpg' alt='' />

              </div>
            </Col>
            <Col md={3}>
              <div className='raga1'>
                <img src='https://www.titan.co.in/on/demandware.static/-/Library-Sites-TitanSharedLibrary/default/dw23a95e14/images/homepage/All_Banners/memoir_COLLECTION_Updated_Sep_d.jpg' alt='' />

              </div>
            </Col>
            <Col md={3}>
              <div className='raga1'>
                <img src='https://www.titan.co.in/on/demandware.static/-/Library-Sites-TitanSharedLibrary/default/dw341ce99b/images/homepage/All_Banners/stellar_COLLECTION_Updated_Sep_d.jpg' alt='' />
              </div>
            </Col>
          </Row>
          <Row>
            <Col md={3}>
              <div className='raga2'>
                <img src='https://www.titan.co.in/on/demandware.static/-/Library-Sites-TitanSharedLibrary/default/dwb26d6ddb/images/homepage/All_Banners/women_COLLECTION_Updated_Sep_d.jpg' alt='' />

              </div>
            </Col>
            <Col md={3}>
              <div className='raga2'>
                <img src='https://www.titan.co.in/on/demandware.static/-/Library-Sites-TitanSharedLibrary/default/dw3944b27e/images/homepage/All_Banners/automatics_COLLECTION_Updated_Sep_d.jpg' alt='' />

              </div>
            </Col>
            <Col md={3}>
              <div className='raga2'>
                <img src='https://www.titan.co.in/on/demandware.static/-/Library-Sites-TitanSharedLibrary/default/dwdedc4e73/images/homepage/All_Banners/silvers_COLLECTION_Updated_Sep_d.jpg' alt='' />

              </div>
            </Col>
            <Col md={3}>
              <div className='raga2'>
                <img src='https://www.titan.co.in/on/demandware.static/-/Library-Sites-TitanSharedLibrary/default/dwdd844871/images/homepage/All_Banners/maritime_COLLECTION_Updated_Sep_d.jpg' alt='' />
              </div>
            </Col>
          </Row>
        </Container>
      </section>
      <section className='auto'>
        <Container>
          <Row>
            <Col>
              <h3>MOVEMENT IN TIME</h3>
            </Col>
          </Row>
          <Row>
            <Col md={6}>
              <div className='automatic'>
                <img src='https://www.titan.co.in/on/demandware.static/-/Library-Sites-TitanSharedLibrary/default/dwef7ff51b/images/homepage/movement_automatic_updated_Sep_d.jpg' alt='' />
              </div>
            </Col>
            <Col md={6}>
              <Row>
                <Col md={6}>
                  <div className='mech'>
                    <img src='https://www.titan.co.in/on/demandware.static/-/Library-Sites-TitanSharedLibrary/default/dw5a834c27/images/homepage/movement_mechanical_updated_Sep_d.jpg' alt='' />

                  </div>
                </Col>
                <Col md={6}>
                  <div className='mech'>
                    <img src='https://www.titan.co.in/on/demandware.static/-/Library-Sites-TitanSharedLibrary/default/dw8040bb3a/images/homepage/movement_quartz_updated_Sep_d.jpg' alt='' />

                  </div>
                </Col>
              </Row>
              <Row>
                <Col md={6}>
                  <div className='smart'>
                    <img src='https://www.titan.co.in/on/demandware.static/-/Library-Sites-TitanSharedLibrary/default/dwca2d31d0/images/homepage/movement_chronograph_updated_Sep_d.jpg' alt='' />

                  </div>
                </Col>
                <Col md={6}>
                  <div className='smart'>
                    <img src='https://www.titan.co.in/on/demandware.static/-/Library-Sites-TitanSharedLibrary/default/dw0b9f18bc/images/homepage/movement_smart_updated_Sep_d.jpg' alt='' />

                  </div>
                </Col>
              </Row>
            </Col>
          </Row>
        </Container>
      </section>
      <section className='titan'>
        <Container>
          <Row>
            <Col>
              <h3>SHOP BY BRANDS</h3>
            </Col>
          </Row>
          <Row>
            <Col md={3}>

              <div className='titan1'>
                <img src='https://www.titan.co.in/on/demandware.static/-/Library-Sites-TitanSharedLibrary/default/dw83e2e00b/images/homepage/Brands/titan_Sep_d.jpg' alt='' />
              </div>
            </Col>
            <Col md={3}>
              <div className='titan1'>
                <img src='https://www.titan.co.in/on/demandware.static/-/Library-Sites-TitanSharedLibrary/default/dwd1e4c3c2/images/homepage/Brands/ft_Sep_d.jpg' alt='' />
              </div>

            </Col>
            <Col md={3}>
              <div className='titan1'>
                <img src='https://www.titan.co.in/on/demandware.static/-/Library-Sites-TitanSharedLibrary/default/dwbff2ef9f/images/homepage/Brands/sonata_Sep_d.jpg' alt='' />
              </div>

            </Col>
            <Col md={3}>
              <div className='titan1'>
                <img src='https://www.titan.co.in/on/demandware.static/-/Library-Sites-TitanSharedLibrary/default/dw9b44bd12/images/homepage/Brands/tommy_Sep_d.jpg' alt='' />
              </div>

            </Col>
          </Row>
          <Row>
            <Col md={3}>
              <div className='titan2'>
                <img src='https://www.titan.co.in/on/demandware.static/-/Library-Sites-TitanSharedLibrary/default/dwb1653fc9/images/homepage/Brands/kc_Sep_d.jpg' alt='' />
              </div>

            </Col>
            <Col md={3}>
              <div className='titan2'>
                <img src='https://www.titan.co.in/on/demandware.static/-/Library-Sites-TitanSharedLibrary/default/dw8e713993/images/homepage/Brands/police_Sep_d.jpg' alt='' />
              </div>

            </Col>
            <Col md={3}>
              <div className='titan2'>
                <img src='https://www.titan.co.in/on/demandware.static/-/Library-Sites-TitanSharedLibrary/default/dwd5a53a97/images/homepage/Brands/anne_Sep_d.jpg' alt='' />
              </div>

            </Col>
            <Col md={3}>
              <div className='titan2'>
                <img src='https://www.titan.co.in/on/demandware.static/-/Library-Sites-TitanSharedLibrary/default/dwad51ea49/images/homepage/Brands/zoop_Sep_d.jpg' alt='' />
              </div>

            </Col>
          </Row>
          <Row>

            <Col md={3}>
              <div className='titan3'>
                <img src='https://www.titan.co.in/on/demandware.static/-/Library-Sites-TitanSharedLibrary/default/dwc1a2d17c/images/homepage/Brands/raga_Sep_d.jpg' alt='' />
              </div>

            </Col>
            <Col md={3}>
              <div className='titan3'>
                <img src='https://www.titan.co.in/on/demandware.static/-/Library-Sites-TitanSharedLibrary/default/dwbd83db58/images/homepage/Brands/xylys_Sep_d.jpg' alt='' />
              </div>

            </Col>
            <Col md={3}>
              <div className='titan3'>
                <img src='https://www.titan.co.in/on/demandware.static/-/Library-Sites-TitanSharedLibrary/default/dw5626ec7d/images/homepage/Brands/edge_Sep_d.jpg' alt='' />
              </div>

            </Col>
            <Col md={3}>
              <div className='titan3'>
                <img src='https://www.titan.co.in/on/demandware.static/-/Library-Sites-TitanSharedLibrary/default/dw1fa5abd4/images/homepage/Brands/nebula_Sep_d.jpg' alt='' />
              </div>

            </Col>
          </Row>
        </Container>
      </section>
      <section className='discover'>
        <Container>
          <Row>
            <Col>
              <h3>DISCOVER YOUR STYLE</h3>
            </Col>
          </Row>
          <Row>
            <Col md={2}>
              <div className='style'>
                <img src='https://www.titan.co.in/dw/image/v2/BKDD_PRD/on/demandware.static/-/Library-Sites-TitanSharedLibrary/default/dw0b293ab5/images/homepage/All_Banners/Discover_Minimal_D.jpg' alt='' />
              </div>
            </Col>
            <Col md={2}>
              <div className='style'>
                <img src='https://www.titan.co.in/dw/image/v2/BKDD_PRD/on/demandware.static/-/Library-Sites-TitanSharedLibrary/default/dwbf49db4e/images/homepage/All_Banners/Discover_Bold_D.jpg' alt='' />
              </div>
            </Col>
            <Col md={2}>
              <div className='style'>
                <img src='https://www.titan.co.in/dw/image/v2/BKDD_PRD/on/demandware.static/-/Library-Sites-TitanSharedLibrary/default/dwdae85b9d/images/homepage/All_Banners/Discover_Luxe_D.jpg' alt='' />
              </div>
            </Col>
            <Col md={2}>
              <div className='style'>
                <img src='https://www.titan.co.in/dw/image/v2/BKDD_PRD/on/demandware.static/-/Library-Sites-TitanSharedLibrary/default/dw93f8affd/images/homepage/All_Banners/Discover_Couple_D.jpg' alt='' />
              </div>
            </Col>
            <Col md={2}>
              <div className='style'>
                <img src='https://www.titan.co.in/dw/image/v2/BKDD_PRD/on/demandware.static/-/Library-Sites-TitanSharedLibrary/default/dw816cf69a/images/homepage/All_Banners/Discover_Sporty_D.jpg' alt='' />
              </div>
            </Col>
            <Col md={2}>
              <div className='style'>
                <img src='https://www.titan.co.in/dw/image/v2/BKDD_PRD/on/demandware.static/-/Library-Sites-TitanSharedLibrary/default/dw816cf69a/images/homepage/All_Banners/Discover_Sporty_D.jpg' alt='' />
              </div>
            </Col>
          </Row>
        </Container>
      </section>
      <section className='services'>
        <Container>
          <Row>
            <Col>
              <div className='serve'>
                <img src='https://www.titan.co.in/on/demandware.static/-/Library-Sites-TitanSharedLibrary/default/dwc17b5cd2/images/homepage/Gurantee.svg' alt='' />
                <h6>100% ORIGINAL</h6>
              </div>
            </Col>
            <Col>
              <div className='serve'>
                <img src='https://www.titan.co.in/on/demandware.static/-/Library-Sites-TitanSharedLibrary/default/dw0987d956/images/homepage/Return.svg' alt='' />
                <h6>7 DAY RETURN</h6>
              </div>
            </Col>
            <Col>
              <div className='serve'>
                <img src='https://www.titan.co.in/on/demandware.static/-/Library-Sites-TitanSharedLibrary/default/dw824f2669/images/homepage/Shipping.svg' alt='' />
                <h6>FREE SHIPPING</h6>
              </div>
            </Col>
          </Row>
        </Container>
      </section>
      <section className='login'>
        <Container>
          <Row>
            <Col>
              <div className='loginsection'>
                <h3>
                  LOGIN FOR THE BEST EXPERIENCE
                </h3>
              </div>
              <div className='button'>
                <button><a href='Login'/>Login Now</button>
              </div>
              <div className='account'>
                <p><a href='Account'>Create An Account</a></p>
              </div>
            </Col>
          </Row>
        </Container>
      </section>
    </div>
  )
}

export default Home
