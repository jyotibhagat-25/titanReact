// import React from 'react'
// import {
//   Chart as ChartJS,
//   CategoryScale,
//   LinearScale,
//   BarElement,
//   Title,
//   Tooltip,
//   Legend,
// } from 'chart.js';
// import { Bar } from 'react-chartjs-2';
// import { Col, Container, Row, Breadcrumb } from 'react-bootstrap';
// ChartJS.register(
//   CategoryScale,
//   LinearScale,
//   BarElement,
//   Title,
//   Tooltip,
//   Legend
// );
// export const options = {
//   responsive: true,
//   plugins: {
//     legend: {
//       position: 'top',
//     },
//     title: {
//       display: true,
//       text: 'Chart.js Bar Chart',
//     },
//   },
// };

// const data = {
//   labels: ["January", "February", "March", "April", "May"],
//   datasets: [
//     {
//       label: "Sales",
//       data: [12000, 19000, 3000, 5000, 2000],
//       backgroundColor: "rgba(75, 192, 192, 0.5)",
//       borderColor: "rgba(75, 192, 192, 1)",
//       borderWidth: 1
//     }
//   ]
// };
// const Dashboard = () => {
//   return (
//     <div>
//       <section>
//         <Container>
//           <Row>
//             <Col>
//               <Bar options={options} data={data} />
//             </Col>
//           </Row>
//         </Container>
//         <section>
//           <Container>
//             <Row>
//               <Col>
//                 <h1>
//                   Admin Dashboard
//                 </h1>
//                 <Breadcrumb>
//                   <Breadcrumb.Item href="#">Dashboard</Breadcrumb.Item>
//                   <Breadcrumb.Item href="https://getbootstrap.com/docs/4.0/components/breadcrumb/">
//                     Library
//                   </Breadcrumb.Item>
//                   <Breadcrumb.Item active>Data</Breadcrumb.Item>
//                 </Breadcrumb>
//               </Col>
//             </Row>
//           </Container>
//         </section>
//       </section>
//     </div>
//   )
// }

// export default Dashboard

import React from 'react'
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
  return (
    <div>
      <section className='dashboard'>
        <Container>
          <Row>
            <Col md={4}>
              <Breadcrumb>
                <Breadcrumb.Item href="https://getbootstrap.com/docs/4.0/components/breadcrumb/">Home</Breadcrumb.Item>
                <Breadcrumb.Item href="#">
                  Dashboard
                </Breadcrumb.Item>

              </Breadcrumb>
              <Row>
                <h6>Menu</h6>
                <p>Dashboard</p>
              </Row>
              <Row>
                <p>Analytics</p>

              </Row>
              <Row>
                <p>Sales</p>

              </Row>
              <Row>
                <h6>Management</h6>
                <p>Products</p>

              </Row>
              <Row>
                <p>Customers</p>

              </Row>
              <Row>
                <h6>Notification</h6>
                <p>Transaction</p>

              </Row>
              <Row>
                <p>Message</p>

              </Row>

            </Col>

            <Col md={8}>
              <Row>
                <Col>
                  <h6>
                    Total Sales
                  </h6>
                  <p>$252m</p>
                </Col>
                <Col>
                  <h6>
                    Daily Sales
                  </h6>
                  <p>$432k</p>
                </Col>
                <Col>
                  <h6>
                    Total Quantity
                  </h6>
                  <p>499</p>
                </Col>
                <Col>
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
                <Col>
                  <h6>
                    Income
                  </h6>
                  <p>$800m</p>
                </Col>
                <Col>
                  <h6>
                    Expenses
                  </h6>
                  <p>$500m</p>
                </Col>
                <Col>
                  <h6>
                    Spendings
                  </h6>
                  <p>247k</p>
                </Col>
                <Col>
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
