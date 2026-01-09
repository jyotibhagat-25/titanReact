import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import Table from 'react-bootstrap/Table';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router';

const Cart = () => {
  const [cartItems, setCartItems] = useState();

  // const [selectedImages, setSelectedImages] = useState([]);

  let navigate = useNavigate();
  const dispatch = useDispatch();
  const { user: currentUser } = useSelector((state) => state.auth);
  useEffect(() => {
    if (currentUser) {
      console.log(currentUser);
    }
    if (currentUser && currentUser.roles[0] !== "ROLE_ADMIN") {
      console.log(currentUser.roles[0]);

      navigate("/Cart");
    }
  }, [currentUser]);

  useEffect(() => {
    axios.get(` http://localhost:8090/api/carts/user/${currentUser.id}`).then((response) => {
      console.log(response.data);
      setCartItems(response.data)
    });

  }, []);
  const [count, setCount] = useState(1);
  console.log(count);

  const increase = () => {
    setCount(count + 1);
  }
  const decrease = () => {
    setCount(count - 1);
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
                    <th>Product Id</th>
                    {/* <th>Product image</th>*/}
                    <th>Product Price</th>
                    <th>Product Quantity</th>


                  </tr>
                </thead>
                <tbody>

                  {
                    cartItems ?
                      cartItems.items.map((cartItem, index) => {
                        return (
                          <tr>
                            <td>{index + 1}</td>
                            <td>{cartItem.productId}</td>
                            <td>{cartItem.price}</td>
                            <td>
                              <button onClick={decrease}>-</button>&nbsp;{count}&nbsp;
                              <button onClick={increase}>+</button>
                            </td>




                          </tr>
                        )
                      })
                      : "No items available"
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

export default Cart
