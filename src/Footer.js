import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import { FaHandPointRight, FaRegHandPointRight } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";
import { FaInstagramSquare } from "react-icons/fa";
import { FaTwitterSquare } from "react-icons/fa";
import { Link } from 'react-router';



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
                  <li>&nbsp;&nbsp;Titan Automatics</li>
                  <li>&nbsp;&nbsp;Police Batman</li>
                  <li>&nbsp;&nbsp;Stellar</li>
                  <li>&nbsp;&nbsp;Raga Power Pearls</li>


                </ul>
              </div>
            </Col>
            <Col md={2}>
              <div>
                <h6>
                  |  CUSTOMER SERVICE
                </h6>
                <ul>
                  <li>&nbsp;&nbsp;Payment Options</li>
                  <li>&nbsp;&nbsp;Track Order</li>
                  <li>&nbsp;&nbsp;Encircle Program</li>
                  <li>&nbsp;&nbsp;Find Titan World Stores</li>

                </ul>
              </div>
            </Col>
            <Col md={2}>
              <div>
                <h6>
                  |  CONTACT US
                </h6>
                <ul>
                  <li>&nbsp;&nbsp;1800-266-0123</li>
                  <li>&nbsp;&nbsp;customercare</li>
                  <li>&nbsp;&nbsp;Help & Contact</li>
                  <li>&nbsp;&nbsp;FAQs</li>

                </ul>
              </div>
            </Col>
            <Col md={2}>
              <div>
                <h6>
                  |  ABOUT TITAN
                </h6>
                <ul>
                  <li>&nbsp;&nbsp;Brand Protection</li>
                  <li>&nbsp;&nbsp;Corporate</li>
                  <li>&nbsp;&nbsp;Careers</li>
                  <li>&nbsp;&nbsp;Blog</li>

                </ul>
              </div>
            </Col>
            <Col md={4}>
              <div className='footer-col'>
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
                <div className='social-icons'>
                  <Link><FaFacebook /></Link>
                  <Link><FaInstagramSquare /></Link>
                  <Link><FaTwitterSquare /></Link>
                </div>
                {/* <img src='https://www.titan.co.in/on/demandware.static/-/Library-Sites-TitanSharedLibrary/default/dw1803b970/images/footer/facebook.svg' /><img src='https://www.titan.co.in/on/demandware.static/-/Library-Sites-TitanSharedLibrary/default/dw3c0d8bc6/images/footer/instagram.svg' /><img src='https://www.titan.co.in/on/demandware.static/-/Library-Sites-TitanSharedLibrary/default/dw812cf34d/images/footer/Footer-Twitter_White%20%281%29.svg' /><img src='https://www.titan.co.in/on/demandware.static/-/Library-Sites-TitanSharedLibrary/default/dwd1278123/images/footer/youtube.svg' /> */}
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
