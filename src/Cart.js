import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import Table from 'react-bootstrap/Table';

const Cart = () => {
  const [categories, setCategories] = useState();

  useEffect(() => {
    axios.get("http://localhost:8090/api/carts").then((response) => {
      console.log(response.data);
      setCategories(response.data)
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

  // const categories = [
  //   {
  //     "price": 2300,
  //     "image":"https://www.titan.co.in/dw/image/v2/BKDD_PRD/on/demandware.static/-/Library-Sites-TitanSharedLibrary/default/dwf7d59a54/images/homepage/All_Banners/Highlights_10029km01.jpg"
  //   },
  //   {
  //     "price": 4300,
  //     "image":"https://www.titan.co.in/dw/image/v2/BKDD_PRD/on/demandware.static/-/Library-Sites-TitanSharedLibrary/default/dwa4b13bc6/images/homepage/All_Banners/Highlights_10053qm01.jpg"
  //   },
  //   {
  //     "price": 4590,
  //     "image":"https://www.titan.co.in/dw/image/v2/BKDD_PRD/on/demandware.static/-/Library-Sites-TitanSharedLibrary/default/dw13f049fa/images/homepage/All_Banners/Highlights_90179sm01.jpg"
  //   },
  //   {
  //     "price": 5900,
  //     "image":"https://www.titan.co.in/dw/image/v2/BKDD_PRD/on/demandware.static/-/Library-Sites-TitanSharedLibrary/default/dw4468db39/images/homepage/All_Banners/Highlights_90201qm02.jpg"
  //   },
  //   {
  //     "price": 1990,
  //     "image":"https://www.titan.co.in/dw/image/v2/BKDD_PRD/on/demandware.static/-/Library-Sites-TitanSharedLibrary/default/dwd88bfd90/images/homepage/All_Banners/Highlights_90209qm01.jpg"
  //   },
  //   {
  //     "price": 2700,
  //     "image":"https://www.titan.co.in/dw/image/v2/BKDD_PRD/on/demandware.static/-/Sites-titan-master-catalog/default/dw3074d9f0/images/Titan/Catalog/95352YM01_1.jpg?sw=360&sh=360"
  //   },
  //   {
  //     "price": 1900,
  //     "image":"https://www.titan.co.in/dw/image/v2/BKDD_PRD/on/demandware.static/-/Sites-titan-master-catalog/default/dwfb4dcc13/images/Fastrack/Catalog/FV60100WM01W_1.jpg?sw=360&sh=360"
  //   }
  // ]
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
                    <th>Product Quantity</th>
                    {/* <th>Product Price</th> */}

                  </tr>
                </thead>
                <tbody>

                  {
                    categories ?
                      categories.map((category, index) => {
                        return (
                          <tr>
                            <td>{index + 1}</td>
                            <td>{category.id}</td>
                            <td><img src='https://www.titan.co.in/dw/image/v2/BKDD_PRD/on/demandware.static/-/Sites-titan-master-catalog/default/dwfb4dcc13/images/Fastrack/Catalog/FV60100WM01W_1.jpg?sw=360&sh=360'/></td>
                            <td><button onClick={increase}>+</button>&nbsp;{count}&nbsp;
                              <button onClick={decrease}>-</button></td>
                            {/* <td>{category.price}</td> */}
                          
                              

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

export default Cart
