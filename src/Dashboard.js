import React from 'react'
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';
import { Bar } from 'react-chartjs-2';
import { Col, Container, Row, Breadcrumb } from 'react-bootstrap';
ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
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
      <section>
        <Container>
          <Row>
            <Col>
              <Bar options={options} data={data} />
            </Col>
          </Row>
        </Container>
        <section>
          <Container>
            <Row>
              <Col>
                <h1>
                  Admin Dashboard
                </h1>
                <Breadcrumb>
                  <Breadcrumb.Item href="#">Dashboard</Breadcrumb.Item>
                  <Breadcrumb.Item href="https://getbootstrap.com/docs/4.0/components/breadcrumb/">
                    Library
                  </Breadcrumb.Item>
                  <Breadcrumb.Item active>Data</Breadcrumb.Item>
                </Breadcrumb>
              </Col>
            </Row>
          </Container>
        </section>
      </section>
    </div>
  )
}

export default Dashboard
