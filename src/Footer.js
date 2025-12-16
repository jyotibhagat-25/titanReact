import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import { FaRegHandPointRight } from "react-icons/fa";

const Footer = () => {
  return (
    <div>
      <section className='footersection'>
        <Container>
          <Row>
            <Col md={2}>
              <div>
                <h6>
                  |  COLLECTIONS
                </h6>
                <ul>
                  <li><FaRegHandPointRight />&nbsp;&nbsp;Titan Automatics</li>
                  <li><FaRegHandPointRight />&nbsp;&nbsp;Police Batman</li>
                  <li><FaRegHandPointRight />&nbsp;&nbsp;Stellar</li>
                  <li><FaRegHandPointRight />&nbsp;&nbsp;Raga Power Pearls</li>


                </ul>
              </div>
            </Col>
            <Col md={2}>
              <div>
                <h6>
                  |  CUSTOMER SERVICE
                </h6>
                <ul>
                  <li><FaRegHandPointRight />&nbsp;&nbsp;Payment Options</li>
                  <li><FaRegHandPointRight />&nbsp;&nbsp;Track Order</li>
                  <li><FaRegHandPointRight />&nbsp;&nbsp;Encircle Program</li>
                  <li><FaRegHandPointRight />&nbsp;&nbsp;Find Titan World Stores</li>

                </ul>
              </div>
            </Col>
            <Col md={2}>
              <div>
                <h6>
                  |  CONTACT US
                </h6>
                <ul>
                  <li><FaRegHandPointRight />&nbsp;&nbsp;1800-266-0123</li>
                  <li><FaRegHandPointRight />&nbsp;&nbsp;customercare</li>
                  <li><FaRegHandPointRight />&nbsp;&nbsp;Help & Contact</li>
                  <li><FaRegHandPointRight />&nbsp;&nbsp;FAQs</li>

                </ul>
              </div>
            </Col>
            <Col md={2}>
              <div>
                <h6>
                  |  ABOUT TITAN
                </h6>
                <ul>
                  <li><FaRegHandPointRight />&nbsp;&nbsp;Brand Protection</li>
                  <li><FaRegHandPointRight />&nbsp;&nbsp;Corporate</li>
                  <li><FaRegHandPointRight />&nbsp;&nbsp;Careers</li>
                  <li><FaRegHandPointRight />&nbsp;&nbsp;Blog</li>

                </ul>
              </div>
            </Col>
            <Col md={4}>
              <div>
                <h6>
                  |  Download Titan World App
                </h6>
                {/* <img src='https://www.titan.co.in/on/demandware.static/-/Library-Sites-TitanSharedLibrary/default/dw435df752/images/footer/Group%2015609.png' /><img src='https://www.titan.co.in/on/demandware.static/-/Library-Sites-TitanSharedLibrary/default/dwac46a6ed/images/footer/Group%2015610@2x.png' /> */}

              </div>
              <div className='download'>
                <img src='https://www.titan.co.in/on/demandware.static/-/Library-Sites-TitanSharedLibrary/default/dw435df752/images/footer/Group%2015609.png' /><img src='https://www.titan.co.in/on/demandware.static/-/Library-Sites-TitanSharedLibrary/default/dwac46a6ed/images/footer/Group%2015610@2x.png' />
              </div>
              <div className='follow-us'>
                <h6>Follow Us With</h6>
                <img src='https://www.titan.co.in/on/demandware.static/-/Library-Sites-TitanSharedLibrary/default/dw1803b970/images/footer/facebook.svg' /><img src='https://www.titan.co.in/on/demandware.static/-/Library-Sites-TitanSharedLibrary/default/dw3c0d8bc6/images/footer/instagram.svg' /><img src='https://www.titan.co.in/on/demandware.static/-/Library-Sites-TitanSharedLibrary/default/dw812cf34d/images/footer/Footer-Twitter_White%20%281%29.svg' /><img src='https://www.titan.co.in/on/demandware.static/-/Library-Sites-TitanSharedLibrary/default/dwd1278123/images/footer/youtube.svg' />
              </div>
              <div className='footerpara'>
                <p>
                  Want Help? Click Here To Chat With Us On
                  Operating Hours: 10:00AM To 10:00PM Monday To Sunday
                </p>
              </div>
              

            </Col>
            <div className='lines'>
              <hr></hr>
            </div>
          </Row>
        </Container>
      </section>
      
    </div>
  )
}

export default Footer
