import React, { useEffect, useState } from 'react'
import { Col, Container, Row, Breadcrumb,Table } from 'react-bootstrap'
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
import axios from 'axios';
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
      text: 'Chart data',
    },
  },
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

  //      Total Orders

  const [totalOrders, setTotalOrders] = useState(0);


  useEffect(() => {

    axios.get("http://localhost:8090/api/ssorders")
      .then((response) => {
        console.log(response.data)
        setTotalOrders(response.data.length);
      })

  }, [])


  //         Summary Report

  const [summaryReport, setSummaryReport] = useState(null);


  useEffect(() => {
    axios.get("http://localhost:8090/api/ssorders/reports/summary")
      .then((res) => {
        console.log(res.data);
        setSummaryReport(res.data);
      })
    // .catch((err) => console.log(err));
  }, []);

  //         Daily sales

  const [dailyReports, setDailyReports] = useState(null);

  useEffect(() => {
    axios.get("http://localhost:8090/api/ssorders/reports/daily")
      .then((res) => {
        console.log(res.data);
        setDailyReports(res.data);
      })
    // .catch((err) => {
    //   console.log(err);
    // });
  }, []);


  //        Top Selling Products

  const [topProducts, setTopProducts] = useState([]);

  useEffect(() => {
    axios.get("http://localhost:8090/api/ssorders/top-selling-products")
      .then((res) => {
        console.log(res.data);
        setTopProducts(res.data);
      })
    // .catch((err) => console.log(err));
  }, []);


  //        Chart Data

  const [chartData, setChartData] = useState([]);

  useEffect(() => {
    axios.get("http://localhost:8090/api/ssorders/chartdata")
      .then((response) => {
        console.log(response.data);
        setChartData(response.data);
      })
      // .catch((error) => {
      //   console.log(error);
      // })
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
                    Total Orders
                  </h6>
                  <p>{totalOrders}</p>
                </Col>
                <Col className='box'>
                  <h6>
                    Total Sales
                  </h6>
                  <p>{ }</p>
                </Col>
                {/* <Col className='box'>
                  <h6>
                    Top Selling Product
                  </h6>
                  {topProducts.map((product, index) => (
                    <p key={index}>{product.productDetails.productName}</p>
                  ))}

                </Col> */}
                <Col className='box'>
                  <h6>
                    Daily sales
                  </h6>
                  <p>Date: {dailyReports?.date}</p>
                  <p>Total Orders: {dailyReports?.totalOrders}</p>


                </Col>
              </Row>
              <Row>
                {/* <Col md={6}>
                  <Bar options={options} data={data} />
                </Col>
                <Col md={6}>
                  <Pie
                    options={options}
                    data={data}
                  // {...props}
                  />
                </Col> */}
                <Col md={6}>

                  <h4>Top Selling Products</h4>
                  <div >



                    <Table striped bordered hover>
                      <thead>
                        <tr>
                          <th>Sl no.</th>
                          <th>Product Name</th>
                          <th>Total Sold</th>
                        </tr>
                      </thead>

                      <tbody>
                        {topProducts.map((item, index) => (
                          <tr key={index}>
                            <td>{index + 1}</td>
                            <td>{item.productDetails?.productName}</td>
                            <td>{item.totalSold}</td>
                          </tr>
                        ))}
                      </tbody>
                    </Table>
                  </div>
                </Col>

                <Col md={6}>
                  {chartData && chartData.labels && (
                    <Bar options={options} data={chartData} />
                  )}
                </Col>
              </Row>
              <Row>
                <Col className='box'>
                  <h6>
                    Summary Report
                  </h6>
                  {summaryReport ? (

                    <p>Total Orders : {summaryReport.totalOrders}</p>

                  ) : (
                    <p>No Data</p>
                  )}
                </Col>
                <Col className='box'>
                  <h6>
                    Income
                  </h6>
                  {summaryReport ? (
                    <p>{summaryReport.totalRevenue}</p>
                  ) : (
                    <p>No Data</p>
                  )}
                </Col>
                <Col className='box'>
                  <h6>
                    Spendings
                  </h6>
                  {/* <p>247k</p> */}
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
