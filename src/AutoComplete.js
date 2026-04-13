// Autocomplete.js
import React, { useEffect, useState } from 'react';
import './App.css';
import { Col, Container, Row } from 'react-bootstrap';
import axios from 'axios';


const AutoComplete = () => {
       const [filteredSuggestions, setFilteredSuggestions] = useState([]);
       const [inputValue, setInputValue] = useState('');
       const [products, setProducts] = useState([]);
       useEffect(() => {
              axios.get("http://localhost:8090/api/ssproducts").then((response) => {
                     console.log(response.data);
                     setProducts(response.data);
                     console.log(products);
              });

       }, []);

       // const getFilteredSuggestions = (inputValue) => {
       //        const regex = new RegExp(inputValue.trim(), "i");
       //        return products.filter((product) => regex.test(product.title));
       // };

       // const onSuggestionsFetchRequested = ({ value }) => {
       //        setFilteredSuggestions(getFilteredSuggestions(value));
       // };

       // const onSuggestionsClearRequested = () => {
       //        setFilteredSuggestions([]);
       // };

       // const onChange = (event, { newInputValue }) => {
       //        setInputValue(newInputValue);
       // };

       // const getSuggestionValue = (suggestion) => suggestion;


       const handleChange = (event) => {
              const value = event.target.value;
              setInputValue(value);

              if (value.trim() === "") {
                     setFilteredSuggestions([]);
                     return;
              }

              const filtered = products.filter((product) =>
                     product?.productName?.toLowerCase().includes(value.toLowerCase())
              );

              setFilteredSuggestions(filtered);
       };

       const handleSelect = (value) => {
              setInputValue(value);
              setFilteredSuggestions([]);
       };

       return (
              <div className="autocomplete-container">
                     <Container>
                            <Row>
                                   <Col md={12}>
                                          <input
                                                 className="autocomplete-input"
                                                 type="text"
                                                 value={inputValue}
                                                 onChange={handleChange}
                                                 placeholder="Type to search..."
                                          />
                                          <ul className="autocomplete-suggestions">
                                                 {filteredSuggestions.map((product, index) => (
                                                        <li
                                                               key={index}
                                                               className="autocomplete-suggestion"
                                                               onClick={() => handleSelect(product.productName)}
                                                        >
                                                               {product.productName}
                                                        </li>
                                                 ))}
                                          </ul>
                                   </Col>

                            </Row>
                     </Container>
              </div>
       );
};

export default AutoComplete;