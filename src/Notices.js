import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { Col, Container, Row } from 'react-bootstrap';
import Spinner from 'react-bootstrap/Spinner';
import Table from 'react-bootstrap/Table';
import moment from 'moment';



const Notices = () => {
       const [notices, setNotices] = useState();

       useEffect(() => {
              axios.get("https://gpa.ac.in/noticedata.php").then((response) => {
                     console.log(response.data);
                     setNotices(response.data)
              });
       }, []);

       // useEffect(() => {
       //        axios.get("").then((response) => {
       //               console.log(response.data);
                     
       //        });
       // }, []);

       return (
              <div>
                     <section>
                            <Container>
                                   <Row>
                                          <Col>
                                                 <Table cellSpacing={0} border={1} striped bordered hover>
                                                        <thead>
                                                               <tr>
                                                                      <th>title</th>
                                                                      <th>notice</th>
                                                                      <th>date</th>
                                                                      {/* <th>Username</th> */}
                                                               </tr>
                                                        </thead>
                                                        <tbody>
                                                               {
                                                                      notices ?
                                                                             notices.map((notice, index) => {
                                                                                    return (
                                                                                           <div>
                                                                                                  
                                                                                                  <td>{notice.title} {notice.new?<img src='https://gpa.ac.in/new.gif'/>:" "}</td>
                                                                                                  <td>{notice.notice}</td>
                                                                                                  <td>{moment(notice.date).format('ll')}</td>
                                                                                           </div>
                                                                                    )
                                                                             }) : "loading"
                                                               }
                                                        </tbody>
                                                 </Table>
                                          </Col>
                                   </Row>
                            </Container>
                     </section>
              </div >
       )
}

export default Notices
