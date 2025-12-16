import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { Col, Container, Row,ListGroup } from 'react-bootstrap';

const Todos = () => {
       const [todos, setTodos] = useState();
       const isStatus = false;
       useEffect(() => {
              axios.get("https://jsonplaceholder.typicode.com/todos").then((response) => {
                     console.log(response.data);
                     setTodos(response.data)
              });
       }, []);
       return (
              <div>
                     <section>
                            <Container>
                                   <Row>
                                          <Col>
                                                 {
                                                        todos ?
                                                               todos.map((todo, index) => {
                                                                      return (
                                                                             <div>
                                                                                    <ListGroup>
                                                                                           <ListGroup.Item>{todo.title}</ListGroup.Item>
                                                                                           <ListGroup.Item>{todo.completed}</ListGroup.Item>
                                                                                           <ListGroup.Item>{todo.id}</ListGroup.Item>
                                                                                           
                                                                                    </ListGroup>
                                                                                    {
                                                                                          isStatus?"hii":"hello"
                                                                                    }
                                                                             </div>
                                                                      );
                                                               }):"loading"
                     }
                                          </Col>
                                   </Row>
                            </Container>
                     </section>
              </div>
       )
}

export default Todos
