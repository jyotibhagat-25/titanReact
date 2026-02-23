import React, { useEffect } from 'react'
import { Col, Container, Row, Breadcrumb } from 'react-bootstrap'
import './Dashboard.css';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  ArcElement,
  Legend,
} from 'chart.js';
import { Bar } from 'react-chartjs-2';
import { Pie } from 'react-chartjs-2';
import { useSelector, useDispatch } from "react-redux";
import { Link, useNavigate } from "react-router";
ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  ArcElement,
  Legend
);
export const options = {
  responsive: true,
  plugins: {
    legend: {
      position: 'top',
    },
    title: {
      display: true,
      text: 'Chart.js Bar Chart',
    },
  },
};

const data = {
  labels: ["January", "February", "March", "April", "May"],
  datasets: [
    {
      label: "Sales",
      data: [12000, 19000, 3000, 5000, 2000],
      backgroundColor: "rgba(75, 192, 192, 0.5)",
      borderColor: "rgba(75, 192, 192, 1)",
      borderWidth: 1
    }
  ]
};

const Dashboard = () => {
  let navigate = useNavigate();
  const dispatch = useDispatch();
  const { user: currentUser } = useSelector((state) => state.auth);
  useEffect(() => {
    if (currentUser) {
      console.log(currentUser);
    }
    if (currentUser && currentUser.roles[0] !== "ROLE_ADMIN") {
      console.log(currentUser.roles[0]);

      navigate("/Home");
    }
  }, []);
  return (
    <div>
      <section className='dashboard'>
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
              <div>
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
              </div>
              <div>
                <Row>
                  <Link to={'/Smartwatch'} className='link-area'><p>Smartwatch</p></Link>
                  

                </Row>
              </div>
              <div>
                <Row>
                  <Link to={'/Gifting'} className='link-area'><p>Gifting</p></Link>
                  

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
                  <Link to={'/AdminOrders'} className='link-area'><p>Total Orders</p></Link>
                  

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

            <Col md={9}>
              <Row>
                <Col className='box'>
                  <h6>
                    Total Sales
                  </h6>
                  <p>$252m</p>
                </Col>
                <Col className='box'>
                  <h6>
                    Daily Sales
                  </h6>
                  <p>$432k</p>
                </Col>
                <Col className='box'>
                  <h6>
                    Total Quantity
                  </h6>
                  <p>499</p>
                </Col>
                <Col className='box'>
                  <h6>
                    Daily User
                  </h6>
                  <p>5048</p>
                </Col>
              </Row>
              <Row>
                <Col md={6}>
                  <Bar options={options} data={data} />
                </Col>
                <Col md={6}>
                  <Pie
                    options={options}
                    data={data}
                  // {...props}
                  />
                </Col>
              </Row>
              <Row>
                <Col className='box'>
                  <h6>
                    Income
                  </h6>
                  <p>$800m</p>
                </Col>
                <Col className='box'>
                  <h6>
                    Expenses
                  </h6>
                  <p>$500m</p>
                </Col>
                <Col className='box'>
                  <h6>
                    Spendings
                  </h6>
                  <p>247k</p>
                </Col>
                <Col className='box'>
                  <h6>
                    Totals
                  </h6>
                  <p>990</p>
                </Col>
              </Row>
            </Col>
          </Row>
        </Container>
      </section>
    </div>
  )
}

export default Dashboard
