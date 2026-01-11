import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { Button, Col, Container, Row } from 'react-bootstrap'
import Table from 'react-bootstrap/Table';
import { AiOutlineDelete } from 'react-icons/ai';
import { useDispatch, useSelector } from 'react-redux';
import { Link, useNavigate } from 'react-router';

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
  const handleDelete = () => {
    console.log("delete button clicked");
    


    };


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
                      <th>Product image</th>
                      <th>Product Price</th>
                      <th>Product Quantity</th>
                      <th>Delete</th>


                    </tr>
                  </thead>
                  <tbody>

                    {
                      cartItems ?
                        cartItems.items.map((cartItem, index) => {
                          return (
                            <tr key={index}>
                              <td>{index + 1}</td>
                              <td>{cartItem.productDetails.productName}</td>
                              <td>{cartItem.images}</td>
                              <td>{cartItem.price}</td>
                              <td>
                                <button onClick={decrease}>-</button>&nbsp;{count}&nbsp;
                                <button onClick={increase}>+</button>
                              </td>
                              <td><button onClick={() => handleDelete()}><AiOutlineDelete /></button></td>







                            </tr>
                          )
                        })
                        : "No items available"
                    }
                  </tbody>
                </Table>
                <p>Total Amount</p>
               <Link to={'/Address1'}> <Button>next</Button></Link>
              </Col>
            </Row>
          </Container>
        </section>
      </div>
    )
  }

  export default Cart
