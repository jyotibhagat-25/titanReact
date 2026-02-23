import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { Col, Container, Row, Table } from 'react-bootstrap'
import { AiOutlineDelete, AiOutlineEdit } from 'react-icons/ai';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router';

const AdminOrders = () => {

  const [products, setProducts] = useState();
  
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
  }, [currentUser]);
  useEffect(() => {
    axios.get("http://localhost:8090/api/ssproducts").then((response) => {
      console.log(response.data);
      setProducts(response.data)
    });

  }, []);
  const handleDelete = (id) => {
    console.log(id);
    axios.delete(`http://localhost:8090/api/ssproducts/${id}`).then((response) => {
      console.log(response.data);
      console.log("successfully category delete");
      window.location.reload();


    });
  }
  return (
    <div>
      <section>
        <Container>
          <Row>
            <Col>
              <Table striped bordered hover>
                <thead>
                  <tr>
                    <th>Sl</th>
                    <th> Name</th>
                    <th> Category</th>
                    <th> Description</th>
                    <th> Price</th>

                    <th>Edit</th>
                    <th>Delete</th>

                  </tr>
                </thead>
                <tbody>

                  {
                    products ?
                      products.map((product, index) => {
                        return (
                          <tr>
                            <td>{index + 1}</td>
                            <td>{product.productName}</td>
                            <td>{product.productCategory}</td>
                            <td>{product.productDescription}</td>
                            <td>₹{product.productPrice}</td>
                            <td><AiOutlineEdit /></td>
                            <td><button onClick={() => handleDelete(product.id)}><AiOutlineDelete /></button></td>
                          </tr>
                        )
                      })
                      : "loading"
                  }
                </tbody>
              </Table>
            </Col>
          </Row>
        </Container>
      </section>
    </div>
  )
}

export default AdminOrders
