import React, { useState, useEffect } from 'react'
import { Alert, Button } from 'react-bootstrap';
import { IoIosLogIn, IoIosLogOut } from 'react-icons/io';
const Test1 = () => {


       let isLogin = false;
       
       const [status, setStatus] = useState(true);
       const [buttonName, setbuttonName] = useState("logout");

       const changeStatus = () => {
              setStatus(!status);
              status ? setbuttonName("logout"): setbuttonName("login")
                     
       }

       useEffect(() => {

       }, [isLogin]);


       return (
              <div>
                     {status ?
                            <Alert variant='success'>
                                   <IoIosLogIn />Successfully login
                            </Alert>
                            :
                            <Alert variant='danger'>
                                   <IoIosLogOut />
                                   Successfully Logout
                            </Alert>
                     }


                     <Button onClick={changeStatus}>{buttonName}</Button>
              </div>
       )
}

export default Test1
