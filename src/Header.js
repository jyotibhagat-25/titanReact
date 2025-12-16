import React from 'react'
import { Col, Container, Row, Nav, NavDropdown, Navbar } from 'react-bootstrap'
import { Link } from 'react-router'
import { CiHeart } from "react-icons/ci";
import { BsBag } from "react-icons/bs";
import { IoIosLogOut } from "react-icons/io";
import { CiUser } from "react-icons/ci";
import { IoHomeOutline } from "react-icons/io5";
import './Header.css';





const Header = () => {
  return (
    <div>
      <section className='offer'>
        <Container fluid>
          <Row>
            <Col>
              <marquee> Get 10% Cashback on Minimum transaction value of ₹999 on your payment via MobiKwik UPI. T&C Apply*.&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; Get 15% Cashback on Minimum transaction value of ₹1499 on your payment via MobiKwik UPI. T&C Apply*.</marquee>
            </Col>
          </Row>
        </Container>
      </section>
      <section className='toparea'>
        <Container fluid>
          <Row>
            <Col md={2}>
              <div>
                <img src='https://www.titan.co.in/on/demandware.static/Sites-Titan-Site/-/default/dw3486fc91/images/header/titan-logo.svg' />
              </div>
            </Col>
            <Col md={7}>
              <div>
                <form class="d-flex" role="search">
                  <input class="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
                  {/* <button class="btn btn-outline-success" type="submit">Search</button> */}
                </form>
              </div>
            </Col>
            <Col md={3}>
              <Row>
                <Col>
                  <CiUser />
                  <p><a href='#'>Admin</a></p>

                </Col>
                <Col>
                  <CiHeart />
                  <p><a href='#'>Wishlist</a></p>
                </Col>
                <Col>
                  <BsBag />
                  <p><a href='#'>Cart</a></p>

                </Col>
                <Col>
                  <IoIosLogOut />
                  <p><a href='#'>Log out</a></p>
                </Col>
              </Row>

            </Col>
          </Row>
        </Container>
      </section>
      <section className='menuarea'>
        <Container>
          <Row>
            <Col>

              <div className='menuarea'>
                <Navbar expand="lg" className="bg-body-tertiary">
                  <Container>
                    <Navbar.Brand href="#home"></Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                      <Nav className="me-auto">
                        <Nav.Link as={Link} to={''}>HOME</Nav.Link>
                        <Nav.Link as={Link} to={'/Men'}>MEN</Nav.Link>
                        <Nav.Link as={Link} to={'/Women'}>WOMEN</Nav.Link>
                        <Nav.Link as={Link} to={'/Smartwatch'}>SMART WATCHES</Nav.Link>
                        <Nav.Link as={Link} to={'/Gifting'}>GIFTING</Nav.Link>
                        <Nav.Link as={Link} to={'/Brand'}>INTERNATIONAL BRANND</Nav.Link>
                        <Nav.Link as={Link} to={'/Service'}>WATCH SERVICES</Nav.Link>


                        <NavDropdown title="MORE" id="basic-nav-dropdown">
                          <NavDropdown.Item href="#action/3.1">Kids watches</NavDropdown.Item>
                          <NavDropdown.Item href="#action/3.2">
                            Couple watches
                          </NavDropdown.Item>
                          <NavDropdown.Item href="#action/3.3">Clocks</NavDropdown.Item>
                          {/* <NavDropdown.Divider /> */}
                          <NavDropdown.Item href="#action/3.4">
                            Our Brand
                          </NavDropdown.Item>
                          <NavDropdown.Item href="#action/3.5">
                            Accessories
                          </NavDropdown.Item>
                          <NavDropdown.Item href="#action/3.6">
                            Luxury Watches
                          </NavDropdown.Item>
                          <NavDropdown.Item href="#action/3.7">
                            Encircle
                          </NavDropdown.Item>
                        </NavDropdown>
                      </Nav>
                    </Navbar.Collapse>
                  </Container>
                </Navbar>
              </div>


            </Col>
          </Row>
        </Container>
      </section>


    </div>
  )
}

export default Header
