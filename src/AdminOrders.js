import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { Breadcrumb, Col, Container, Row, Table } from 'react-bootstrap'
import { AiOutlineDelete, AiOutlineEdit } from 'react-icons/ai';
import { useDispatch, useSelector } from 'react-redux';
import { Link, useNavigate } from 'react-router';

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
  // const handleDelete = (id) => {
  //   console.log(id);
  //   axios.delete(`http://localhost:8090/api/ssproducts/${id}`).then((response) => {
  //     console.log(response.data);
  //     console.log("successfully category delete");
  //     window.location.reload();


  //   });
  // }

  const handleEdit = (id) => {
    console.log(id);
    axios.put(`http://localhost:8090/api/ssproducts/${id}`).then((response) => {
      console.log(response.data);
      console.log("successfully Edited");
      window.location.reload();


    });
  }
  return (
    <div>
      <section>
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
                  <Link to={'/AddProduct'} className='link-area'><p>Add Product</p></Link>


                </Row>
              </div>
              <div>
                <Row>
                  <Link to={'/AddCategory'} className='link-area'><p>Add Category</p></Link>


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
                  <Link to={'/AdminOrders'} className='link-area'><p>Product Details</p></Link>


                </Row>
              </div>
              <div>
                {/* <Row>
            
                              <Link to={'/CustomerDetails'} className='link-area'><p>Customer Details</p></Link>
            
                            </Row> */}
                <Row>

                  <Link to={'/UserOrders'} className='link-area'><p>User Orders Details</p></Link>

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
                    {/* <th>Delete</th> */}

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
                            <td><button onClick={() => handleEdit(product.id)}><AiOutlineEdit /></button></td>
                            {/* <td><button onClick={() => handleDelete(product.id)}><AiOutlineDelete /></button></td> */}
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
