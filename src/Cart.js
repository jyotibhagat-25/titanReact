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
    // if (currentUser && currentUser.roles[0] !== "ROLE_ADMIN") {
    //   console.log(currentUser.roles[0]);

    //   navigate("/home");
    // }
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
  // const handleDelete = () => {
  //   console.log("delete button clicked");
    


  //   };
  const handleDelete = (id) => {
    console.log(id);
    axios.delete(`http://localhost:8090/api/carts/user/${currentUser.id}/item/${id}`).then((response) => {
      console.log(response.data);
      console.log("successfully cart item deleted");
      window.location.reload();


    });
  }

  const quantityUpdate =(productId,newQuantity)=>{
    console.log(productId)
    console.log(newQuantity)
    if(newQuantity<1) return;
    axios.put(`http://localhost:8090/api/carts/user/${currentUser.id}/item/${productId}`,{quantity:newQuantity}).then((response) => {
      console.log(response.data);
      console.log("successfully cart item updated");
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
                      <th>Product Name</th>
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
                              {/* <td>{cartItem.productDetails.productName}</td> */}
                              {/* <td><img src={`http://localhost:8090/upload/${cartItem.productDetails.images[0]}`} /></td> */}
                              <td>{cartItem.price}</td>
                              <td>
                                <button onClick={() => quantityUpdate(cartItem.productId, cartItem.quantity-1)} disabled={cartItem.quantity<=1}>-</button>&nbsp;{cartItem.quantity}&nbsp;
                                <button onClick={() => quantityUpdate(cartItem.productId, cartItem.quantity+1)}>+</button>
                              </td>
                              <td>{cartItem.price*cartItem.quantity}</td>

                              <td><button onClick={() => handleDelete(cartItem.productId)}><AiOutlineDelete /></button></td>

                            </tr>
                          )
                        })
                        : "No items available"
                    }
                  </tbody>
                </Table>
                <p>Total Amount</p>
               <Link to={'/Address'}> <Button>Next</Button></Link>
              </Col>
            </Row>
          </Container>
        </section>
      </div>
    )
  }

  export default Cart
