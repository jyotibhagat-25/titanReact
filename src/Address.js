import axios from 'axios';
import { useState, useEffect } from 'react';
import { Container, Row, Col, Button } from 'react-bootstrap';
import './Address.css';
import { Formik, Form, Field } from 'formik';
import * as Yup from 'yup';
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, Navigate, Link } from "react-router-dom";
import Badge from 'react-bootstrap/Badge';
import Stack from 'react-bootstrap/Stack';



const SignupSchema = Yup.object().shape({
  name: Yup.string()
    .min(2, 'Too Short!')
    .max(50, 'Too Long!')
    .required('Required'),

  addressLine1: Yup.string()
    .min(2, 'Too Short!')
    .max(50, 'Too Long!')
    .required('Required'),

  addressLine2: Yup.string()
    .min(2, 'Too Short!')
    .max(50, 'Too Long!')
    .required('Required'),

  city: Yup.string()
    .min(2, 'Too Short!')
    .max(50, 'Too Long!')
    .required('Required'),

  district: Yup.string()
    .min(2, 'Too Short!')
    .max(50, 'Too Long!')
    .required('Required'),

  state: Yup.string()
    .min(2, 'Too Short!')
    .max(50, 'Too Long!')
    .required('Required'),

  pin: Yup.number()
    .min(2, 'Too Short!')
    // .max(8, 'must be 8 digit')
    .required('Required'),
  mobile: Yup.number()
    .min(10, '10 num must be required'),
  email: Yup.string()
    .email("Invalid email")
    .required("Required"),

  addressType: Yup.string()
    .min(2, 'Too Short!')
    .max(50, 'Too Long!')
    .required('Required'),

});

const AddressSchema = Yup.object().shape({
  addressId: Yup.string()
    .required("Required"),
})


const Address = () => {
  let navigate = useNavigate();
  const dispatch = useDispatch();
  const { user: currentUser } = useSelector((state) => state.auth);
  const [addresses, setAddresses] = useState([])
  const [cartItems, setCartItems] = useState();
  const [subTotal, setSubTotal] = useState(0);
  useEffect(() => {
    if (currentUser) {
      console.log(currentUser);
    }

  }, [currentUser]);



  const handleAddress2 = (values) => {

    const products = cartItems.items.map((item) => ({
      productId: item.productId,
      price: item.productDetails.productPrice,
      quantity: item.quantity
    }));

    const data = {
      addressId: values.addressId,
      userId: currentUser.id,
      products: products,
      totalAmount: subTotal,
      status: "Processing"
    };

    axios.post("http://localhost:8090/api/ssorders", data)
      .then((response) => {

        console.log("successfull", response.data);

        axios.delete(`http://localhost:8090/api/carts/user/${currentUser.id}`)
          .then(() => {
            console.log("Cart deleted");
            navigate("/Success_order_placed");
          });

      });
  };

  const handleSubmit = () => {
    console.log("Submit button clicked")
    alert("submit button clicked");
  }

  const handleAddress = (formData) => {
    formData.userId = currentUser.id;
    console.log(formData)

    console.log("Submit button clicked")
    alert("submit button clicked");
    axios.post(`http://localhost:8090/api/addresses`, formData).then((response) => {
      console.log(response.data)
    })
    window.location.reload();

  }


  useEffect(() => {
    axios.get(`http://localhost:8090/api/addresses/user/${currentUser.id}`).then((response) => {
      console.log(response.data);
      setAddresses(response.data);


    });

  }, []);

  useEffect(() => {
    axios.get(`http://localhost:8090/api/carts/user/${currentUser.id}`).then((response) => {
      console.log(response.data);
      setCartItems(response.data);
      const subTotal = response.data.items.reduce((total, product) => {
        return total + (product.quantity * product.productDetails.productPrice);
      }, 0);
      setSubTotal(subTotal)

    });

  }, [currentUser.id]);




  return (
    <div className='text-center'>
      <h2>Address</h2>

      <Formik
        initialValues={{
          name: '',
          addressLine1: '',
          addressLine2: '',
          city: '',
          district: '',
          state: '',
          pin: '',
          mobile: '',
          email: '',
          addressType: '',
        }}

        validationSchema={SignupSchema}

        onSubmit={handleAddress}
      >

        {({ errors, touched }) => (
          <Form>
            <div className='addressform'>

              <Row>
                <Col xs={12} md={6}>
                  <label>Name:</label>
                </Col>

                <Col xs={12} md={6}>
                  <Field name="name" />
                  {errors.name && touched.name ? (
                    <div>{errors.name}</div>
                  ) : null}
                </Col>
              </Row>

              <Row>
                <Col xs={12} md={6}>
                  <label>Address Line1:</label>
                </Col>

                <Col xs={12} md={6}>
                  <Field name="addressLine1" />
                  {errors.addressLine1 && touched.addressLine1 ? (
                    <div>{errors.addressLine1}</div>
                  ) : null}
                </Col>
              </Row>

              <Row>
                <Col xs={12} md={6}>
                  <label>Address Line2:</label>
                </Col>

                <Col xs={12} md={6}>
                  <Field name="addressLine2" />
                  {errors.addressLine2 && touched.addressLine2 ? (
                    <div>{errors.addressLine2}</div>
                  ) : null}
                </Col>
              </Row>

              <Row>
                <Col xs={12} md={6}>
                  <label>City:</label>
                </Col>

                <Col xs={12} md={6}>
                  <Field name="city" />
                  {errors.city && touched.city ? (
                    <div>{errors.city}</div>
                  ) : null}
                </Col>
              </Row>


              <Row>
                <Col xs={12} md={6}>
                  <label>District:</label>
                </Col>

                <Col xs={12} md={6}>
                  <Field name="district" />
                  {errors.district && touched.district ? (
                    <div>{errors.district}</div>
                  ) : null}
                </Col>
              </Row>

              <Row>
                <Col xs={12} md={6}>
                  <label>State:</label>
                </Col>

                <Col xs={12} md={6}>
                  <Field name="state" />
                  {errors.state && touched.state ? (
                    <div>{errors.state}</div>
                  ) : null}
                </Col>
              </Row>


              <Row>
                <Col xs={12} md={6}>
                  <label>Pin:</label>
                </Col>

                <Col xs={12} md={6}>
                  <Field name="pin" />
                  {errors.pin && touched.pin ? (
                    <div>{errors.pin}</div>
                  ) : null}
                </Col>
              </Row>

              <Row>
                <Col xs={12} md={6}>
                  <label>Mobile:</label>
                </Col>

                <Col xs={12} md={6}>
                  <Field name="mobile" />
                  {errors.mobile && touched.mobile ? (
                    <div>{errors.mobile}</div>
                  ) : null}
                </Col>
              </Row>


              <Row>
                <Col xs={12} md={6}>
                  <label>Email:</label>
                </Col>

                <Col xs={12} md={6}>
                  <Field name="email" />
                  {errors.email && touched.email ? (
                    <div>{errors.email}</div>
                  ) : null}
                </Col>
              </Row>

              <Row>
                <Col xs={12} md={6}>
                  <label>Address type:</label>
                </Col>

                <Col xs={12} md={6}>
                  <label>
                    <Field type="radio" name="addressType" value="Home" />
                    Home
                  </label>
                  <label>
                    <Field type="radio" name="addressType" value="Office" />
                    Office
                  </label>
                </Col>


              </Row>

              <Row >
                <Col>
                  <button type="submit" className="btn btn-shine" onClick={() => handleSubmit()}>Submit</button>
                </Col>
              </Row>
            </div>


          </Form>
        )}
      </Formik>

      <section>
        <Container>
          <Row>
            <Col className='order-placed-form'>
              <Formik
                validationSchema={AddressSchema}
                onSubmit={handleAddress2}
                // onSubmit={handleDelete}
                initialValues={{
                  addressId: ''

                }}
              >
                {({ handleSubmit, handleChange, values, touched, errors }) => (
                  <div className='category'>


                    <Form>
                      <Row>

                        <Col>
                          <label><h3>Choose Address</h3></label>
                        </Col>
                      </Row>
                      <Row>
                        <Col>
                          {/* <Field name="addressId" /> */}
                          {
                            addresses ?
                              addresses.map((address, index) => {
                                return (
                                  <div>
                                    <Row>
                                      <Col>
                                        <label className='address-row'>
                                          <Field type="radio" name="addressId" value={address.id} className='order-placed-form' />

                                          <span className='address-text'>
                                            {address.addressLine1}, {address.addressLine2}, {address.city}, {address.district}, {address.pin}
                                          </span>


                                          <Stack direction="horizontal">
                                            <Badge pill bg="info" className='address-badge'>
                                              {address.addressType}
                                            </Badge>


                                          </Stack>


                                          {/* <p>{address.addressLine2}</p> */}
                                        </label>
                                      </Col>


                                    </Row>
                                  </div>

                                )
                              }) : "no address available"
                          }
                          {errors.addressId && touched.addressId ? (
                            <div>{errors.addressId}</div>
                          ) : null}
                        </Col>
                      </Row>



                      <Link to="/Success_order_placed">
                        <Button className="btn-order" onClick={() => handleAddress2(values)}>Order</Button>
                      </Link>
                    </Form>
                  </div>
                )}
              </Formik>
            </Col>
          </Row>
        </Container>
      </section>
    </div>


  )
}

export default Address