import axios from 'axios';
import React, { useState, useEffect } from 'react'
import { Col, Container, Row, Accordion, Alert } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { IoIosLogIn } from "react-icons/io";
import { IoIosLogOut } from "react-icons/io";


const Test = () => {
  let isLogin = false;

  const [status, setStatus] = useState(true);

  const changeStatus = () => {
    setStatus(!status);
    console.log(status)
  }

  useEffect(() => {
   
  }, [isLogin]);


  //  variable declaration
  //  let a=10;
  //  let productName="Dummy product";
  //  let productPrice=149.50;
  //  const products=["kurti","jeans","t-shirt","skirts"]
  //  add product from backward
  //  products.push("shorts");
  //  add item from front side
  //  products.unshift("trousers");
  //  remove item from backward
  //  products.pop();
  //  remove item from front side
  //  products.shift();

  // Json
  // const products = [
  //   // if there is curly braces{} that means it is an object and collection of objects is called array and collection of array and object is called json data
  //   // if there is square bracket[] that means it carries array data 
  //   {
  //     "id": 1,
  //     "productName": "vivo 15",
  //     "productPrice": 20000
  //   },
  //   {
  //     "id": 2,
  //     "productName": "Oppo A5",
  //     "productPrice": 15000
  //   },
  //   {
  //     "id": 3,
  //     "productName": "Samsung",
  //     "productPrice": 25000
  //   }
  // ];
  // console.log(products);

  //   const notices =[
  //   {
  //     "title": "5th Semester (2023-26) Class Routine",
  //     "notice": "notice_7133319503.pdf",
  //     "home": "1",
  //     "new": "1",
  //     "date": "2025-10-04 01:55:35"
  //   },
  //   {
  //     "title": "3rd Semester (2024-27) Class Routine",
  //     "notice": "notice_1797529458.pdf",
  //     "home": "1",
  //     "new": "1",
  //     "date": "2025-10-04 01:42:25"
  //   },
  //   {
  //     "title": "Commencement of Classes from 07/10/2025",
  //     "notice": "notice_994543675.pdf",
  //     "home": "1",
  //     "new": "1",
  //     "date": "2025-10-04 01:27:37"
  //   },
  //   {
  //     "title": "Academic Calender for the students during Puja Vacation",
  //     "notice": "notice_1731795668.pdf",
  //     "home": "1",
  //     "new": "1",
  //     "date": "2025-09-24 06:46:34"
  //   },
  //   {
  //     "title": "Orientation and Induction Program Notice for First Semester (2025-28) Students",
  //     "notice": "notice_2585471565.pdf",
  //     "home": "1",
  //     "new": "1",
  //     "date": "2025-08-22 03:36:03"
  //   },
  //   {
  //     "title": "सूचना : निविदा खोलने की तिथि में परिवर्तन",
  //     "notice": "notice_8823220659.pdf",
  //     "home": "1",
  //     "new": "2",
  //     "date": "2025-05-13 12:04:49"
  //   },
  //   {
  //     "title": "अति अल्पकालीन निविदा सूचना",
  //     "notice": "notice_6710366038.pdf",
  //     "home": "1",
  //     "new": "2",
  //     "date": "2025-05-10 06:39:49"
  //   },
  //   {
  //     "title": "पुस्तक क्रय हेतु निविदा आमंत्रण सूचना",
  //     "notice": "notice_2705483846.pdf",
  //     "home": "1",
  //     "new": "1",
  //     "date": "2025-01-18 04:06:08"
  //   },
  //   {
  //     "title": "सड़क सुरक्षा संकेतावली",
  //     "notice": "notice_6148551916.pdf",
  //     "home": "1",
  //     "new": "1",
  //     "date": "2025-01-18 04:03:12"
  //   },
  //   {
  //     "title": "Class Routine of 1st, 3rd and 5th Semester",
  //     "notice": "notice_4595841504.pdf",
  //     "home": "1",
  //     "new": "1",
  //     "date": "2024-11-07 10:56:11"
  //   },
  //   {
  //     "title": "Orientation Programme for Session : 2024-27 Students",
  //     "notice": "notice_5456916475.pdf",
  //     "home": "1",
  //     "new": "1",
  //     "date": "2024-09-10 10:57:14"
  //   },
  //   {
  //     "title": "Regarding Registration of Lateral Diploma Students",
  //     "notice": "notice_4465946876.pdf",
  //     "home": "1",
  //     "new": "1",
  //     "date": "2023-11-23 10:42:01"
  //   },
  //   {
  //     "title": "Regarding Registration of Regular Diploma Students",
  //     "notice": "notice_1394565575.pdf",
  //     "home": "1",
  //     "new": "1",
  //     "date": "2023-11-23 10:40:55"
  //   },
  //   {
  //     "title": "Mentors alloted to 1st Semester (2023-24) students.",
  //     "notice": "notice_9973190007.pdf",
  //     "home": "1",
  //     "new": "2",
  //     "date": "2023-08-26 01:53:52"
  //   },
  //   {
  //     "title": "Notice regarding beginning of 1st Year Classes of New Session 2023-24.",
  //     "notice": "notice_8496842505.pdf",
  //     "home": "1",
  //     "new": "2",
  //     "date": "2023-08-19 01:18:57"
  //   },
  //   {
  //     "title": "Notice regarding allotment of seats in the Hostel.",
  //     "notice": "notice_9781626360.pdf",
  //     "home": "1",
  //     "new": "2",
  //     "date": "2023-07-10 05:09:19"
  //   },
  //   {
  //     "title": "Routine of 2nd, 4th and 6th Semester (All Branch)",
  //     "notice": "notice_6632757592.pdf",
  //     "home": "1",
  //     "new": "2",
  //     "date": "2023-04-17 10:42:27"
  //   },
  //   {
  //     "title": "Notice regarding Class of 2nd and 4th Semester Student (All Branch)",
  //     "notice": "notice_3357944437.pdf",
  //     "home": "1",
  //     "new": "2",
  //     "date": "2023-04-12 04:32:40"
  //   },
  //   {
  //     "title": "Notice regarding Form fill up of 1st and 3rd Semester Students",
  //     "notice": "notice_9498266666.pdf",
  //     "home": "1",
  //     "new": "2",
  //     "date": "2023-03-01 12:10:48"
  //   },
  //   {
  //     "title": "Notice regarding admission in 3rd semester (2021-24) Batch.",
  //     "notice": "notice_9362459303.pdf",
  //     "home": "1",
  //     "new": "2",
  //     "date": "2023-02-17 04:16:20"
  //   }
  // ]


  // storing variable on react
  const [count, setCount] = useState(0);
  console.log(count);

  // adding and subtracting value 
  const [add, setAdd] = useState(5);

  const addition = () => {
    setAdd(add + 5);
  }
  const subtraction = () => {
    setAdd(add - 5);
  }



  // increasing value
  const increase = () => {
    setCount(count + 1);
  }


  // decreasing value 
  const decrease = () => {
    setCount(count - 1);
  }



  // const datas = [
  //   {
  //     "userId": 1,
  //     "id": 1,
  //     "title": "delectus aut autem",
  //     "completed": false
  //   },
  //   {
  //     "userId": 1,
  //     "id": 2,
  //     "title": "quis ut nam facilis et officia qui",
  //     "completed": false
  //   },
  //   {
  //     "userId": 1,
  //     "id": 3,
  //     "title": "fugiat veniam minus",
  //     "completed": false
  //   },
  //   {
  //     "userId": 1,
  //     "id": 4,
  //     "title": "et porro tempora",
  //     "completed": true
  //   },
  //   {
  //     "userId": 1,
  //     "id": 5,
  //     "title": "laboriosam mollitia et enim quasi adipisci quia provident illum",
  //     "completed": false
  //   },
  //   {
  //     "userId": 1,
  //     "id": 6,
  //     "title": "qui ullam ratione quibusdam voluptatem quia omnis",
  //     "completed": false
  //   },
  //   {
  //     "userId": 1,
  //     "id": 7,
  //     "title": "illo expedita consequatur quia in",
  //     "completed": false
  //   },
  //   {
  //     "userId": 1,
  //     "id": 8,
  //     "title": "quo adipisci enim quam ut ab",
  //     "completed": true
  //   },
  //   {
  //     "userId": 1,
  //     "id": 9,
  //     "title": "molestiae perspiciatis ipsa",
  //     "completed": false
  //   },
  //   {
  //     "userId": 1,
  //     "id": 10,
  //     "title": "illo est ratione doloremque quia maiores aut",
  //     "completed": true
  //   },
  //   {
  //     "userId": 1,
  //     "id": 11,
  //     "title": "vero rerum temporibus dolor",
  //     "completed": true
  //   },
  //   {
  //     "userId": 1,
  //     "id": 12,
  //     "title": "ipsa repellendus fugit nisi",
  //     "completed": true
  //   },
  //   {
  //     "userId": 1,
  //     "id": 13,
  //     "title": "et doloremque nulla",
  //     "completed": false
  //   },
  //   {
  //     "userId": 1,
  //     "id": 14,
  //     "title": "repellendus sunt dolores architecto voluptatum",
  //     "completed": true
  //   },
  //   {
  //     "userId": 1,
  //     "id": 15,
  //     "title": "ab voluptatum amet voluptas",
  //     "completed": true
  //   },
  //   {
  //     "userId": 1,
  //     "id": 16,
  //     "title": "accusamus eos facilis sint et aut voluptatem",
  //     "completed": true
  //   },
  //   {
  //     "userId": 1,
  //     "id": 17,
  //     "title": "quo laboriosam deleniti aut qui",
  //     "completed": true
  //   },
  //   {
  //     "userId": 1,
  //     "id": 18,
  //     "title": "dolorum est consequatur ea mollitia in culpa",
  //     "completed": false
  //   },
  //   {
  //     "userId": 1,
  //     "id": 19,
  //     "title": "molestiae ipsa aut voluptatibus pariatur dolor nihil",
  //     "completed": true
  //   },
  //   {
  //     "userId": 1,
  //     "id": 20,
  //     "title": "ullam nobis libero sapiente ad optio sint",
  //     "completed": true
  //   },
  //   {
  //     "userId": 2,
  //     "id": 21,
  //     "title": "suscipit repellat esse quibusdam voluptatem incidunt",
  //     "completed": false
  //   },
  //   {
  //     "userId": 2,
  //     "id": 22,
  //     "title": "distinctio vitae autem nihil ut molestias quo",
  //     "completed": true
  //   },
  //   {
  //     "userId": 2,
  //     "id": 23,
  //     "title": "et itaque necessitatibus maxime molestiae qui quas velit",
  //     "completed": false
  //   },
  //   {
  //     "userId": 2,
  //     "id": 24,
  //     "title": "adipisci non ad dicta qui amet quaerat doloribus ea",
  //     "completed": false
  //   },
  //   {
  //     "userId": 2,
  //     "id": 25,
  //     "title": "voluptas quo tenetur perspiciatis explicabo natus",
  //     "completed": true
  //   },
  //   {
  //     "userId": 2,
  //     "id": 26,
  //     "title": "aliquam aut quasi",
  //     "completed": true
  //   },
  //   {
  //     "userId": 2,
  //     "id": 27,
  //     "title": "veritatis pariatur delectus",
  //     "completed": true
  //   },
  //   {
  //     "userId": 2,
  //     "id": 28,
  //     "title": "nesciunt totam sit blanditiis sit",
  //     "completed": false
  //   },
  //   {
  //     "userId": 2,
  //     "id": 29,
  //     "title": "laborum aut in quam",
  //     "completed": false
  //   },
  //   {
  //     "userId": 2,
  //     "id": 30,
  //     "title": "nemo perspiciatis repellat ut dolor libero commodi blanditiis omnis",
  //     "completed": true
  //   },
  //   {
  //     "userId": 2,
  //     "id": 31,
  //     "title": "repudiandae totam in est sint facere fuga",
  //     "completed": false
  //   },
  //   {
  //     "userId": 2,
  //     "id": 32,
  //     "title": "earum doloribus ea doloremque quis",
  //     "completed": false
  //   },
  //   {
  //     "userId": 2,
  //     "id": 33,
  //     "title": "sint sit aut vero",
  //     "completed": false
  //   },
  //   {
  //     "userId": 2,
  //     "id": 34,
  //     "title": "porro aut necessitatibus eaque distinctio",
  //     "completed": false
  //   },
  //   {
  //     "userId": 2,
  //     "id": 35,
  //     "title": "repellendus veritatis molestias dicta incidunt",
  //     "completed": true
  //   },
  //   {
  //     "userId": 2,
  //     "id": 36,
  //     "title": "excepturi deleniti adipisci voluptatem et neque optio illum ad",
  //     "completed": true
  //   },
  //   {
  //     "userId": 2,
  //     "id": 37,
  //     "title": "sunt cum tempora",
  //     "completed": false
  //   },
  //   {
  //     "userId": 2,
  //     "id": 38,
  //     "title": "totam quia non",
  //     "completed": false
  //   },
  //   {
  //     "userId": 2,
  //     "id": 39,
  //     "title": "doloremque quibusdam asperiores libero corrupti illum qui omnis",
  //     "completed": false
  //   },
  //   {
  //     "userId": 2,
  //     "id": 40,
  //     "title": "totam atque quo nesciunt",
  //     "completed": true
  //   },
  //   {
  //     "userId": 3,
  //     "id": 41,
  //     "title": "aliquid amet impedit consequatur aspernatur placeat eaque fugiat suscipit",
  //     "completed": false
  //   },
  //   {
  //     "userId": 3,
  //     "id": 42,
  //     "title": "rerum perferendis error quia ut eveniet",
  //     "completed": false
  //   },
  //   {
  //     "userId": 3,
  //     "id": 43,
  //     "title": "tempore ut sint quis recusandae",
  //     "completed": true
  //   },
  //   {
  //     "userId": 3,
  //     "id": 44,
  //     "title": "cum debitis quis accusamus doloremque ipsa natus sapiente omnis",
  //     "completed": true
  //   },
  //   {
  //     "userId": 3,
  //     "id": 45,
  //     "title": "velit soluta adipisci molestias reiciendis harum",
  //     "completed": false
  //   },
  //   {
  //     "userId": 3,
  //     "id": 46,
  //     "title": "vel voluptatem repellat nihil placeat corporis",
  //     "completed": false
  //   },
  //   {
  //     "userId": 3,
  //     "id": 47,
  //     "title": "nam qui rerum fugiat accusamus",
  //     "completed": false
  //   },
  //   {
  //     "userId": 3,
  //     "id": 48,
  //     "title": "sit reprehenderit omnis quia",
  //     "completed": false
  //   },
  //   {
  //     "userId": 3,
  //     "id": 49,
  //     "title": "ut necessitatibus aut maiores debitis officia blanditiis velit et",
  //     "completed": false
  //   },
  //   {
  //     "userId": 3,
  //     "id": 50,
  //     "title": "cupiditate necessitatibus ullam aut quis dolor voluptate",
  //     "completed": true
  //   },
  //   {
  //     "userId": 3,
  //     "id": 51,
  //     "title": "distinctio exercitationem ab doloribus",
  //     "completed": false
  //   },
  //   {
  //     "userId": 3,
  //     "id": 52,
  //     "title": "nesciunt dolorum quis recusandae ad pariatur ratione",
  //     "completed": false
  //   },
  //   {
  //     "userId": 3,
  //     "id": 53,
  //     "title": "qui labore est occaecati recusandae aliquid quam",
  //     "completed": false
  //   },
  //   {
  //     "userId": 3,
  //     "id": 54,
  //     "title": "quis et est ut voluptate quam dolor",
  //     "completed": true
  //   },
  //   {
  //     "userId": 3,
  //     "id": 55,
  //     "title": "voluptatum omnis minima qui occaecati provident nulla voluptatem ratione",
  //     "completed": true
  //   },
  //   {
  //     "userId": 3,
  //     "id": 56,
  //     "title": "deleniti ea temporibus enim",
  //     "completed": true
  //   },
  //   {
  //     "userId": 3,
  //     "id": 57,
  //     "title": "pariatur et magnam ea doloribus similique voluptatem rerum quia",
  //     "completed": false
  //   },
  //   {
  //     "userId": 3,
  //     "id": 58,
  //     "title": "est dicta totam qui explicabo doloribus qui dignissimos",
  //     "completed": false
  //   },
  //   {
  //     "userId": 3,
  //     "id": 59,
  //     "title": "perspiciatis velit id laborum placeat iusto et aliquam odio",
  //     "completed": false
  //   },
  //   {
  //     "userId": 3,
  //     "id": 60,
  //     "title": "et sequi qui architecto ut adipisci",
  //     "completed": true
  //   },
  //   {
  //     "userId": 4,
  //     "id": 61,
  //     "title": "odit optio omnis qui sunt",
  //     "completed": true
  //   },
  //   {
  //     "userId": 4,
  //     "id": 62,
  //     "title": "et placeat et tempore aspernatur sint numquam",
  //     "completed": false
  //   },
  //   {
  //     "userId": 4,
  //     "id": 63,
  //     "title": "doloremque aut dolores quidem fuga qui nulla",
  //     "completed": true
  //   },
  //   {
  //     "userId": 4,
  //     "id": 64,
  //     "title": "voluptas consequatur qui ut quia magnam nemo esse",
  //     "completed": false
  //   },
  //   {
  //     "userId": 4,
  //     "id": 65,
  //     "title": "fugiat pariatur ratione ut asperiores necessitatibus magni",
  //     "completed": false
  //   },
  //   {
  //     "userId": 4,
  //     "id": 66,
  //     "title": "rerum eum molestias autem voluptatum sit optio",
  //     "completed": false
  //   },
  //   {
  //     "userId": 4,
  //     "id": 67,
  //     "title": "quia voluptatibus voluptatem quos similique maiores repellat",
  //     "completed": false
  //   },
  //   {
  //     "userId": 4,
  //     "id": 68,
  //     "title": "aut id perspiciatis voluptatem iusto",
  //     "completed": false
  //   },
  //   {
  //     "userId": 4,
  //     "id": 69,
  //     "title": "doloribus sint dolorum ab adipisci itaque dignissimos aliquam suscipit",
  //     "completed": false
  //   },
  //   {
  //     "userId": 4,
  //     "id": 70,
  //     "title": "ut sequi accusantium et mollitia delectus sunt",
  //     "completed": false
  //   },
  //   {
  //     "userId": 4,
  //     "id": 71,
  //     "title": "aut velit saepe ullam",
  //     "completed": false
  //   },
  //   {
  //     "userId": 4,
  //     "id": 72,
  //     "title": "praesentium facilis facere quis harum voluptatibus voluptatem eum",
  //     "completed": false
  //   },
  //   {
  //     "userId": 4,
  //     "id": 73,
  //     "title": "sint amet quia totam corporis qui exercitationem commodi",
  //     "completed": true
  //   },
  //   {
  //     "userId": 4,
  //     "id": 74,
  //     "title": "expedita tempore nobis eveniet laborum maiores",
  //     "completed": false
  //   },
  //   {
  //     "userId": 4,
  //     "id": 75,
  //     "title": "occaecati adipisci est possimus totam",
  //     "completed": false
  //   },
  //   {
  //     "userId": 4,
  //     "id": 76,
  //     "title": "sequi dolorem sed",
  //     "completed": true
  //   },
  //   {
  //     "userId": 4,
  //     "id": 77,
  //     "title": "maiores aut nesciunt delectus exercitationem vel assumenda eligendi at",
  //     "completed": false
  //   },
  //   {
  //     "userId": 4,
  //     "id": 78,
  //     "title": "reiciendis est magnam amet nemo iste recusandae impedit quaerat",
  //     "completed": false
  //   },
  //   {
  //     "userId": 4,
  //     "id": 79,
  //     "title": "eum ipsa maxime ut",
  //     "completed": true
  //   },
  //   {
  //     "userId": 4,
  //     "id": 80,
  //     "title": "tempore molestias dolores rerum sequi voluptates ipsum consequatur",
  //     "completed": true
  //   },
  //   {
  //     "userId": 5,
  //     "id": 81,
  //     "title": "suscipit qui totam",
  //     "completed": true
  //   },
  //   {
  //     "userId": 5,
  //     "id": 82,
  //     "title": "voluptates eum voluptas et dicta",
  //     "completed": false
  //   },
  //   {
  //     "userId": 5,
  //     "id": 83,
  //     "title": "quidem at rerum quis ex aut sit quam",
  //     "completed": true
  //   },
  //   {
  //     "userId": 5,
  //     "id": 84,
  //     "title": "sunt veritatis ut voluptate",
  //     "completed": false
  //   },
  //   {
  //     "userId": 5,
  //     "id": 85,
  //     "title": "et quia ad iste a",
  //     "completed": true
  //   },
  //   {
  //     "userId": 5,
  //     "id": 86,
  //     "title": "incidunt ut saepe autem",
  //     "completed": true
  //   },
  //   {
  //     "userId": 5,
  //     "id": 87,
  //     "title": "laudantium quae eligendi consequatur quia et vero autem",
  //     "completed": true
  //   },
  //   {
  //     "userId": 5,
  //     "id": 88,
  //     "title": "vitae aut excepturi laboriosam sint aliquam et et accusantium",
  //     "completed": false
  //   },
  //   {
  //     "userId": 5,
  //     "id": 89,
  //     "title": "sequi ut omnis et",
  //     "completed": true
  //   },
  //   {
  //     "userId": 5,
  //     "id": 90,
  //     "title": "molestiae nisi accusantium tenetur dolorem et",
  //     "completed": true
  //   },
  //   {
  //     "userId": 5,
  //     "id": 91,
  //     "title": "nulla quis consequatur saepe qui id expedita",
  //     "completed": true
  //   },
  //   {
  //     "userId": 5,
  //     "id": 92,
  //     "title": "in omnis laboriosam",
  //     "completed": true
  //   },
  //   {
  //     "userId": 5,
  //     "id": 93,
  //     "title": "odio iure consequatur molestiae quibusdam necessitatibus quia sint",
  //     "completed": true
  //   },
  //   {
  //     "userId": 5,
  //     "id": 94,
  //     "title": "facilis modi saepe mollitia",
  //     "completed": false
  //   },
  //   {
  //     "userId": 5,
  //     "id": 95,
  //     "title": "vel nihil et molestiae iusto assumenda nemo quo ut",
  //     "completed": true
  //   },
  //   {
  //     "userId": 5,
  //     "id": 96,
  //     "title": "nobis suscipit ducimus enim asperiores voluptas",
  //     "completed": false
  //   },
  //   {
  //     "userId": 5,
  //     "id": 97,
  //     "title": "dolorum laboriosam eos qui iure aliquam",
  //     "completed": false
  //   },
  //   {
  //     "userId": 5,
  //     "id": 98,
  //     "title": "debitis accusantium ut quo facilis nihil quis sapiente necessitatibus",
  //     "completed": true
  //   },
  //   {
  //     "userId": 5,
  //     "id": 99,
  //     "title": "neque voluptates ratione",
  //     "completed": false
  //   },
  //   {
  //     "userId": 5,
  //     "id": 100,
  //     "title": "excepturi a et neque qui expedita vel voluptate",
  //     "completed": false
  //   },
  //   {
  //     "userId": 6,
  //     "id": 101,
  //     "title": "explicabo enim cumque porro aperiam occaecati minima",
  //     "completed": false
  //   },
  //   {
  //     "userId": 6,
  //     "id": 102,
  //     "title": "sed ab consequatur",
  //     "completed": false
  //   },
  //   {
  //     "userId": 6,
  //     "id": 103,
  //     "title": "non sunt delectus illo nulla tenetur enim omnis",
  //     "completed": false
  //   },
  //   {
  //     "userId": 6,
  //     "id": 104,
  //     "title": "excepturi non laudantium quo",
  //     "completed": false
  //   },
  //   {
  //     "userId": 6,
  //     "id": 105,
  //     "title": "totam quia dolorem et illum repellat voluptas optio",
  //     "completed": true
  //   },
  //   {
  //     "userId": 6,
  //     "id": 106,
  //     "title": "ad illo quis voluptatem temporibus",
  //     "completed": true
  //   },
  //   {
  //     "userId": 6,
  //     "id": 107,
  //     "title": "praesentium facilis omnis laudantium fugit ad iusto nihil nesciunt",
  //     "completed": false
  //   },
  //   {
  //     "userId": 6,
  //     "id": 108,
  //     "title": "a eos eaque nihil et exercitationem incidunt delectus",
  //     "completed": true
  //   },
  //   {
  //     "userId": 6,
  //     "id": 109,
  //     "title": "autem temporibus harum quisquam in culpa",
  //     "completed": true
  //   },
  //   {
  //     "userId": 6,
  //     "id": 110,
  //     "title": "aut aut ea corporis",
  //     "completed": true
  //   },
  //   {
  //     "userId": 6,
  //     "id": 111,
  //     "title": "magni accusantium labore et id quis provident",
  //     "completed": false
  //   },
  //   {
  //     "userId": 6,
  //     "id": 112,
  //     "title": "consectetur impedit quisquam qui deserunt non rerum consequuntur eius",
  //     "completed": false
  //   },
  //   {
  //     "userId": 6,
  //     "id": 113,
  //     "title": "quia atque aliquam sunt impedit voluptatum rerum assumenda nisi",
  //     "completed": false
  //   },
  //   {
  //     "userId": 6,
  //     "id": 114,
  //     "title": "cupiditate quos possimus corporis quisquam exercitationem beatae",
  //     "completed": false
  //   },
  //   {
  //     "userId": 6,
  //     "id": 115,
  //     "title": "sed et ea eum",
  //     "completed": false
  //   },
  //   {
  //     "userId": 6,
  //     "id": 116,
  //     "title": "ipsa dolores vel facilis ut",
  //     "completed": true
  //   },
  //   {
  //     "userId": 6,
  //     "id": 117,
  //     "title": "sequi quae est et qui qui eveniet asperiores",
  //     "completed": false
  //   },
  //   {
  //     "userId": 6,
  //     "id": 118,
  //     "title": "quia modi consequatur vero fugiat",
  //     "completed": false
  //   },
  //   {
  //     "userId": 6,
  //     "id": 119,
  //     "title": "corporis ducimus ea perspiciatis iste",
  //     "completed": false
  //   },
  //   {
  //     "userId": 6,
  //     "id": 120,
  //     "title": "dolorem laboriosam vel voluptas et aliquam quasi",
  //     "completed": false
  //   },
  //   {
  //     "userId": 7,
  //     "id": 121,
  //     "title": "inventore aut nihil minima laudantium hic qui omnis",
  //     "completed": true
  //   },
  //   {
  //     "userId": 7,
  //     "id": 122,
  //     "title": "provident aut nobis culpa",
  //     "completed": true
  //   },
  //   {
  //     "userId": 7,
  //     "id": 123,
  //     "title": "esse et quis iste est earum aut impedit",
  //     "completed": false
  //   },
  //   {
  //     "userId": 7,
  //     "id": 124,
  //     "title": "qui consectetur id",
  //     "completed": false
  //   },
  //   {
  //     "userId": 7,
  //     "id": 125,
  //     "title": "aut quasi autem iste tempore illum possimus",
  //     "completed": false
  //   },
  //   {
  //     "userId": 7,
  //     "id": 126,
  //     "title": "ut asperiores perspiciatis veniam ipsum rerum saepe",
  //     "completed": true
  //   },
  //   {
  //     "userId": 7,
  //     "id": 127,
  //     "title": "voluptatem libero consectetur rerum ut",
  //     "completed": true
  //   },
  //   {
  //     "userId": 7,
  //     "id": 128,
  //     "title": "eius omnis est qui voluptatem autem",
  //     "completed": false
  //   },
  //   {
  //     "userId": 7,
  //     "id": 129,
  //     "title": "rerum culpa quis harum",
  //     "completed": false
  //   },
  //   {
  //     "userId": 7,
  //     "id": 130,
  //     "title": "nulla aliquid eveniet harum laborum libero alias ut unde",
  //     "completed": true
  //   },
  //   {
  //     "userId": 7,
  //     "id": 131,
  //     "title": "qui ea incidunt quis",
  //     "completed": false
  //   },
  //   {
  //     "userId": 7,
  //     "id": 132,
  //     "title": "qui molestiae voluptatibus velit iure harum quisquam",
  //     "completed": true
  //   },
  //   {
  //     "userId": 7,
  //     "id": 133,
  //     "title": "et labore eos enim rerum consequatur sunt",
  //     "completed": true
  //   },
  //   {
  //     "userId": 7,
  //     "id": 134,
  //     "title": "molestiae doloribus et laborum quod ea",
  //     "completed": false
  //   },
  //   {
  //     "userId": 7,
  //     "id": 135,
  //     "title": "facere ipsa nam eum voluptates reiciendis vero qui",
  //     "completed": false
  //   },
  //   {
  //     "userId": 7,
  //     "id": 136,
  //     "title": "asperiores illo tempora fuga sed ut quasi adipisci",
  //     "completed": false
  //   },
  //   {
  //     "userId": 7,
  //     "id": 137,
  //     "title": "qui sit non",
  //     "completed": false
  //   },
  //   {
  //     "userId": 7,
  //     "id": 138,
  //     "title": "placeat minima consequatur rem qui ut",
  //     "completed": true
  //   },
  //   {
  //     "userId": 7,
  //     "id": 139,
  //     "title": "consequatur doloribus id possimus voluptas a voluptatem",
  //     "completed": false
  //   },
  //   {
  //     "userId": 7,
  //     "id": 140,
  //     "title": "aut consectetur in blanditiis deserunt quia sed laboriosam",
  //     "completed": true
  //   },
  //   {
  //     "userId": 8,
  //     "id": 141,
  //     "title": "explicabo consectetur debitis voluptates quas quae culpa rerum non",
  //     "completed": true
  //   },
  //   {
  //     "userId": 8,
  //     "id": 142,
  //     "title": "maiores accusantium architecto necessitatibus reiciendis ea aut",
  //     "completed": true
  //   },
  //   {
  //     "userId": 8,
  //     "id": 143,
  //     "title": "eum non recusandae cupiditate animi",
  //     "completed": false
  //   },
  //   {
  //     "userId": 8,
  //     "id": 144,
  //     "title": "ut eum exercitationem sint",
  //     "completed": false
  //   },
  //   {
  //     "userId": 8,
  //     "id": 145,
  //     "title": "beatae qui ullam incidunt voluptatem non nisi aliquam",
  //     "completed": false
  //   },
  //   {
  //     "userId": 8,
  //     "id": 146,
  //     "title": "molestiae suscipit ratione nihil odio libero impedit vero totam",
  //     "completed": true
  //   },
  //   {
  //     "userId": 8,
  //     "id": 147,
  //     "title": "eum itaque quod reprehenderit et facilis dolor autem ut",
  //     "completed": true
  //   },
  //   {
  //     "userId": 8,
  //     "id": 148,
  //     "title": "esse quas et quo quasi exercitationem",
  //     "completed": false
  //   },
  //   {
  //     "userId": 8,
  //     "id": 149,
  //     "title": "animi voluptas quod perferendis est",
  //     "completed": false
  //   },
  //   {
  //     "userId": 8,
  //     "id": 150,
  //     "title": "eos amet tempore laudantium fugit a",
  //     "completed": false
  //   },
  //   {
  //     "userId": 8,
  //     "id": 151,
  //     "title": "accusamus adipisci dicta qui quo ea explicabo sed vero",
  //     "completed": true
  //   },
  //   {
  //     "userId": 8,
  //     "id": 152,
  //     "title": "odit eligendi recusandae doloremque cumque non",
  //     "completed": false
  //   },
  //   {
  //     "userId": 8,
  //     "id": 153,
  //     "title": "ea aperiam consequatur qui repellat eos",
  //     "completed": false
  //   },
  //   {
  //     "userId": 8,
  //     "id": 154,
  //     "title": "rerum non ex sapiente",
  //     "completed": true
  //   },
  //   {
  //     "userId": 8,
  //     "id": 155,
  //     "title": "voluptatem nobis consequatur et assumenda magnam",
  //     "completed": true
  //   },
  //   {
  //     "userId": 8,
  //     "id": 156,
  //     "title": "nam quia quia nulla repellat assumenda quibusdam sit nobis",
  //     "completed": true
  //   },
  //   {
  //     "userId": 8,
  //     "id": 157,
  //     "title": "dolorem veniam quisquam deserunt repellendus",
  //     "completed": true
  //   },
  //   {
  //     "userId": 8,
  //     "id": 158,
  //     "title": "debitis vitae delectus et harum accusamus aut deleniti a",
  //     "completed": true
  //   },
  //   {
  //     "userId": 8,
  //     "id": 159,
  //     "title": "debitis adipisci quibusdam aliquam sed dolore ea praesentium nobis",
  //     "completed": true
  //   },
  //   {
  //     "userId": 8,
  //     "id": 160,
  //     "title": "et praesentium aliquam est",
  //     "completed": false
  //   },
  //   {
  //     "userId": 9,
  //     "id": 161,
  //     "title": "ex hic consequuntur earum omnis alias ut occaecati culpa",
  //     "completed": true
  //   },
  //   {
  //     "userId": 9,
  //     "id": 162,
  //     "title": "omnis laboriosam molestias animi sunt dolore",
  //     "completed": true
  //   },
  //   {
  //     "userId": 9,
  //     "id": 163,
  //     "title": "natus corrupti maxime laudantium et voluptatem laboriosam odit",
  //     "completed": false
  //   },
  //   {
  //     "userId": 9,
  //     "id": 164,
  //     "title": "reprehenderit quos aut aut consequatur est sed",
  //     "completed": false
  //   },
  //   {
  //     "userId": 9,
  //     "id": 165,
  //     "title": "fugiat perferendis sed aut quidem",
  //     "completed": false
  //   },
  //   {
  //     "userId": 9,
  //     "id": 166,
  //     "title": "quos quo possimus suscipit minima ut",
  //     "completed": false
  //   },
  //   {
  //     "userId": 9,
  //     "id": 167,
  //     "title": "et quis minus quo a asperiores molestiae",
  //     "completed": false
  //   },
  //   {
  //     "userId": 9,
  //     "id": 168,
  //     "title": "recusandae quia qui sunt libero",
  //     "completed": false
  //   },
  //   {
  //     "userId": 9,
  //     "id": 169,
  //     "title": "ea odio perferendis officiis",
  //     "completed": true
  //   },
  //   {
  //     "userId": 9,
  //     "id": 170,
  //     "title": "quisquam aliquam quia doloribus aut",
  //     "completed": false
  //   },
  //   {
  //     "userId": 9,
  //     "id": 171,
  //     "title": "fugiat aut voluptatibus corrupti deleniti velit iste odio",
  //     "completed": true
  //   },
  //   {
  //     "userId": 9,
  //     "id": 172,
  //     "title": "et provident amet rerum consectetur et voluptatum",
  //     "completed": false
  //   },
  //   {
  //     "userId": 9,
  //     "id": 173,
  //     "title": "harum ad aperiam quis",
  //     "completed": false
  //   },
  //   {
  //     "userId": 9,
  //     "id": 174,
  //     "title": "similique aut quo",
  //     "completed": false
  //   },
  //   {
  //     "userId": 9,
  //     "id": 175,
  //     "title": "laudantium eius officia perferendis provident perspiciatis asperiores",
  //     "completed": true
  //   },
  //   {
  //     "userId": 9,
  //     "id": 176,
  //     "title": "magni soluta corrupti ut maiores rem quidem",
  //     "completed": false
  //   },
  //   {
  //     "userId": 9,
  //     "id": 177,
  //     "title": "et placeat temporibus voluptas est tempora quos quibusdam",
  //     "completed": false
  //   },
  //   {
  //     "userId": 9,
  //     "id": 178,
  //     "title": "nesciunt itaque commodi tempore",
  //     "completed": true
  //   },
  //   {
  //     "userId": 9,
  //     "id": 179,
  //     "title": "omnis consequuntur cupiditate impedit itaque ipsam quo",
  //     "completed": true
  //   },
  //   {
  //     "userId": 9,
  //     "id": 180,
  //     "title": "debitis nisi et dolorem repellat et",
  //     "completed": true
  //   },
  //   {
  //     "userId": 10,
  //     "id": 181,
  //     "title": "ut cupiditate sequi aliquam fuga maiores",
  //     "completed": false
  //   },
  //   {
  //     "userId": 10,
  //     "id": 182,
  //     "title": "inventore saepe cumque et aut illum enim",
  //     "completed": true
  //   },
  //   {
  //     "userId": 10,
  //     "id": 183,
  //     "title": "omnis nulla eum aliquam distinctio",
  //     "completed": true
  //   },
  //   {
  //     "userId": 10,
  //     "id": 184,
  //     "title": "molestias modi perferendis perspiciatis",
  //     "completed": false
  //   },
  //   {
  //     "userId": 10,
  //     "id": 185,
  //     "title": "voluptates dignissimos sed doloribus animi quaerat aut",
  //     "completed": false
  //   },
  //   {
  //     "userId": 10,
  //     "id": 186,
  //     "title": "explicabo odio est et",
  //     "completed": false
  //   },
  //   {
  //     "userId": 10,
  //     "id": 187,
  //     "title": "consequuntur animi possimus",
  //     "completed": false
  //   },
  //   {
  //     "userId": 10,
  //     "id": 188,
  //     "title": "vel non beatae est",
  //     "completed": true
  //   },
  //   {
  //     "userId": 10,
  //     "id": 189,
  //     "title": "culpa eius et voluptatem et",
  //     "completed": true
  //   },
  //   {
  //     "userId": 10,
  //     "id": 190,
  //     "title": "accusamus sint iusto et voluptatem exercitationem",
  //     "completed": true
  //   },
  //   {
  //     "userId": 10,
  //     "id": 191,
  //     "title": "temporibus atque distinctio omnis eius impedit tempore molestias pariatur",
  //     "completed": true
  //   },
  //   {
  //     "userId": 10,
  //     "id": 192,
  //     "title": "ut quas possimus exercitationem sint voluptates",
  //     "completed": false
  //   },
  //   {
  //     "userId": 10,
  //     "id": 193,
  //     "title": "rerum debitis voluptatem qui eveniet tempora distinctio a",
  //     "completed": true
  //   },
  //   {
  //     "userId": 10,
  //     "id": 194,
  //     "title": "sed ut vero sit molestiae",
  //     "completed": false
  //   },
  //   {
  //     "userId": 10,
  //     "id": 195,
  //     "title": "rerum ex veniam mollitia voluptatibus pariatur",
  //     "completed": true
  //   },
  //   {
  //     "userId": 10,
  //     "id": 196,
  //     "title": "consequuntur aut ut fugit similique",
  //     "completed": true
  //   },
  //   {
  //     "userId": 10,
  //     "id": 197,
  //     "title": "dignissimos quo nobis earum saepe",
  //     "completed": true
  //   },
  //   {
  //     "userId": 10,
  //     "id": 198,
  //     "title": "quis eius est sint explicabo",
  //     "completed": true
  //   },
  //   {
  //     "userId": 10,
  //     "id": 199,
  //     "title": "numquam repellendus a magnam",
  //     "completed": true
  //   },
  //   {
  //     "userId": 10,
  //     "id": 200,
  //     "title": "ipsam aperiam voluptates qui",
  //     "completed": false
  //   }
  // ]

  // const products = [
  //   {
  //     "id": 1,
  //     "title": "Fjallraven - Foldsack No. 1 Backpack, Fits 15 Laptops",
  //     "price": 109.95,
  //     "description": "Your perfect pack for everyday use and walks in the forest. Stash your laptop (up to 15 inches) in the padded sleeve, your everyday",
  //     "category": "men's clothing",
  //     "image": "https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_t.png",
  //     "rating": {
  //       "rate": 3.9,
  //       "count": 120
  //     }
  //   },
  //   {
  //     "id": 2,
  //     "title": "Mens Casual Premium Slim Fit T-Shirts ",
  //     "price": 22.3,
  //     "description": "Slim-fitting style, contrast raglan long sleeve, three-button henley placket, light weight & soft fabric for breathable and comfortable wearing. And Solid stitched shirts with round neck made for durability and a great fit for casual fashion wear and diehard baseball fans. The Henley style round neckline includes a three-button placket.",
  //     "category": "men's clothing",
  //     "image": "https://fakestoreapi.com/img/71-3HjGNDUL._AC_SY879._SX._UX._SY._UY_t.png",
  //     "rating": {
  //       "rate": 4.1,
  //       "count": 259
  //     }
  //   },
  //   {
  //     "id": 3,
  //     "title": "Mens Cotton Jacket",
  //     "price": 55.99,
  //     "description": "great outerwear jackets for Spring/Autumn/Winter, suitable for many occasions, such as working, hiking, camping, mountain/rock climbing, cycling, traveling or other outdoors. Good gift choice for you or your family member. A warm hearted love to Father, husband or son in this thanksgiving or Christmas Day.",
  //     "category": "men's clothing",
  //     "image": "https://fakestoreapi.com/img/71li-ujtlUL._AC_UX679_t.png",
  //     "rating": {
  //       "rate": 4.7,
  //       "count": 500
  //     }
  //   },
  //   {
  //     "id": 4,
  //     "title": "Mens Casual Slim Fit",
  //     "price": 15.99,
  //     "description": "The color could be slightly different between on the screen and in practice. / Please note that body builds vary by person, therefore, detailed size information should be reviewed below on the product description.",
  //     "category": "men's clothing",
  //     "image": "https://fakestoreapi.com/img/71YXzeOuslL._AC_UY879_t.png",
  //     "rating": {
  //       "rate": 2.1,
  //       "count": 430
  //     }
  //   },
  //   {
  //     "id": 5,
  //     "title": "John Hardy Women's Legends Naga Gold & Silver Dragon Station Chain Bracelet",
  //     "price": 695,
  //     "description": "From our Legends Collection, the Naga was inspired by the mythical water dragon that protects the ocean's pearl. Wear facing inward to be bestowed with love and abundance, or outward for protection.",
  //     "category": "jewelery",
  //     "image": "https://fakestoreapi.com/img/71pWzhdJNwL._AC_UL640_QL65_ML3_t.png",
  //     "rating": {
  //       "rate": 4.6,
  //       "count": 400
  //     }
  //   },
  //   {
  //     "id": 6,
  //     "title": "Solid Gold Petite Micropave ",
  //     "price": 168,
  //     "description": "Satisfaction Guaranteed. Return or exchange any order within 30 days.Designed and sold by Hafeez Center in the United States. Satisfaction Guaranteed. Return or exchange any order within 30 days.",
  //     "category": "jewelery",
  //     "image": "https://fakestoreapi.com/img/61sbMiUnoGL._AC_UL640_QL65_ML3_t.png",
  //     "rating": {
  //       "rate": 3.9,
  //       "count": 70
  //     }
  //   },
  //   {
  //     "id": 7,
  //     "title": "White Gold Plated Princess",
  //     "price": 9.99,
  //     "description": "Classic Created Wedding Engagement Solitaire Diamond Promise Ring for Her. Gifts to spoil your love more for Engagement, Wedding, Anniversary, Valentine's Day...",
  //     "category": "jewelery",
  //     "image": "https://fakestoreapi.com/img/71YAIFU48IL._AC_UL640_QL65_ML3_t.png",
  //     "rating": {
  //       "rate": 3,
  //       "count": 400
  //     }
  //   },
  //   {
  //     "id": 8,
  //     "title": "Pierced Owl Rose Gold Plated Stainless Steel Double",
  //     "price": 10.99,
  //     "description": "Rose Gold Plated Double Flared Tunnel Plug Earrings. Made of 316L Stainless Steel",
  //     "category": "jewelery",
  //     "image": "https://fakestoreapi.com/img/51UDEzMJVpL._AC_UL640_QL65_ML3_t.png",
  //     "rating": {
  //       "rate": 1.9,
  //       "count": 100
  //     }
  //   },
  //   {
  //     "id": 9,
  //     "title": "WD 2TB Elements Portable External Hard Drive - USB 3.0 ",
  //     "price": 64,
  //     "description": "USB 3.0 and USB 2.0 Compatibility Fast data transfers Improve PC Performance High Capacity; Compatibility Formatted NTFS for Windows 10, Windows 8.1, Windows 7; Reformatting may be required for other operating systems; Compatibility may vary depending on user’s hardware configuration and operating system",
  //     "category": "electronics",
  //     "image": "https://fakestoreapi.com/img/61IBBVJvSDL._AC_SY879_t.png",
  //     "rating": {
  //       "rate": 3.3,
  //       "count": 203
  //     }
  //   },
  //   {
  //     "id": 10,
  //     "title": "SanDisk SSD PLUS 1TB Internal SSD - SATA III 6 Gb/s",
  //     "price": 109,
  //     "description": "Easy upgrade for faster boot up, shutdown, application load and response (As compared to 5400 RPM SATA 2.5” hard drive; Based on published specifications and internal benchmarking tests using PCMark vantage scores) Boosts burst write performance, making it ideal for typical PC workloads The perfect balance of performance and reliability Read/write speeds of up to 535MB/s/450MB/s (Based on internal testing; Performance may vary depending upon drive capacity, host device, OS and application.)",
  //     "category": "electronics",
  //     "image": "https://fakestoreapi.com/img/61U7T1koQqL._AC_SX679_t.png",
  //     "rating": {
  //       "rate": 2.9,
  //       "count": 470
  //     }
  //   },
  //   {
  //     "id": 11,
  //     "title": "Silicon Power 256GB SSD 3D NAND A55 SLC Cache Performance Boost SATA III 2.5",
  //     "price": 109,
  //     "description": "3D NAND flash are applied to deliver high transfer speeds Remarkable transfer speeds that enable faster bootup and improved overall system performance. The advanced SLC Cache Technology allows performance boost and longer lifespan 7mm slim design suitable for Ultrabooks and Ultra-slim notebooks. Supports TRIM command, Garbage Collection technology, RAID, and ECC (Error Checking & Correction) to provide the optimized performance and enhanced reliability.",
  //     "category": "electronics",
  //     "image": "https://fakestoreapi.com/img/71kWymZ+c+L._AC_SX679_t.png",
  //     "rating": {
  //       "rate": 4.8,
  //       "count": 319
  //     }
  //   },
  //   {
  //     "id": 12,
  //     "title": "WD 4TB Gaming Drive Works with Playstation 4 Portable External Hard Drive",
  //     "price": 114,
  //     "description": "Expand your PS4 gaming experience, Play anywhere Fast and easy, setup Sleek design with high capacity, 3-year manufacturer's limited warranty",
  //     "category": "electronics",
  //     "image": "https://fakestoreapi.com/img/61mtL65D4cL._AC_SX679_t.png",
  //     "rating": {
  //       "rate": 4.8,
  //       "count": 400
  //     }
  //   },
  //   {
  //     "id": 13,
  //     "title": "Acer SB220Q bi 21.5 inches Full HD (1920 x 1080) IPS Ultra-Thin",
  //     "price": 599,
  //     "description": "21. 5 inches Full HD (1920 x 1080) widescreen IPS display And Radeon free Sync technology. No compatibility for VESA Mount Refresh Rate: 75Hz - Using HDMI port Zero-frame design | ultra-thin | 4ms response time | IPS panel Aspect ratio - 16: 9. Color Supported - 16. 7 million colors. Brightness - 250 nit Tilt angle -5 degree to 15 degree. Horizontal viewing angle-178 degree. Vertical viewing angle-178 degree 75 hertz",
  //     "category": "electronics",
  //     "image": "https://fakestoreapi.com/img/81QpkIctqPL._AC_SX679_t.png",
  //     "rating": {
  //       "rate": 2.9,
  //       "count": 250
  //     }
  //   },
  //   {
  //     "id": 14,
  //     "title": "Samsung 49-Inch CHG90 144Hz Curved Gaming Monitor (LC49HG90DMNXZA) – Super Ultrawide Screen QLED ",
  //     "price": 999.99,
  //     "description": "49 INCH SUPER ULTRAWIDE 32:9 CURVED GAMING MONITOR with dual 27 inch screen side by side QUANTUM DOT (QLED) TECHNOLOGY, HDR support and factory calibration provides stunningly realistic and accurate color and contrast 144HZ HIGH REFRESH RATE and 1ms ultra fast response time work to eliminate motion blur, ghosting, and reduce input lag",
  //     "category": "electronics",
  //     "image": "https://fakestoreapi.com/img/81Zt42ioCgL._AC_SX679_t.png",
  //     "rating": {
  //       "rate": 2.2,
  //       "count": 140
  //     }
  //   },
  //   {
  //     "id": 15,
  //     "title": "BIYLACLESEN Women's 3-in-1 Snowboard Jacket Winter Coats",
  //     "price": 56.99,
  //     "description": "Note:The Jackets is US standard size, Please choose size as your usual wear Material: 100% Polyester; Detachable Liner Fabric: Warm Fleece. Detachable Functional Liner: Skin Friendly, Lightweigt and Warm.Stand Collar Liner jacket, keep you warm in cold weather. Zippered Pockets: 2 Zippered Hand Pockets, 2 Zippered Pockets on Chest (enough to keep cards or keys)and 1 Hidden Pocket Inside.Zippered Hand Pockets and Hidden Pocket keep your things secure. Humanized Design: Adjustable and Detachable Hood and Adjustable cuff to prevent the wind and water,for a comfortable fit. 3 in 1 Detachable Design provide more convenience, you can separate the coat and inner as needed, or wear it together. It is suitable for different season and help you adapt to different climates",
  //     "category": "women's clothing",
  //     "image": "https://fakestoreapi.com/img/51Y5NI-I5jL._AC_UX679_t.png",
  //     "rating": {
  //       "rate": 2.6,
  //       "count": 235
  //     }
  //   },
  //   {
  //     "id": 16,
  //     "title": "Lock and Love Women's Removable Hooded Faux Leather Moto Biker Jacket",
  //     "price": 29.95,
  //     "description": "100% POLYURETHANE(shell) 100% POLYESTER(lining) 75% POLYESTER 25% COTTON (SWEATER), Faux leather material for style and comfort / 2 pockets of front, 2-For-One Hooded denim style faux leather jacket, Button detail on waist / Detail stitching at sides, HAND WASH ONLY / DO NOT BLEACH / LINE DRY / DO NOT IRON",
  //     "category": "women's clothing",
  //     "image": "https://fakestoreapi.com/img/81XH0e8fefL._AC_UY879_t.png",
  //     "rating": {
  //       "rate": 2.9,
  //       "count": 340
  //     }
  //   },
  //   {
  //     "id": 17,
  //     "title": "Rain Jacket Women Windbreaker Striped Climbing Raincoats",
  //     "price": 39.99,
  //     "description": "Lightweight perfet for trip or casual wear---Long sleeve with hooded, adjustable drawstring waist design. Button and zipper front closure raincoat, fully stripes Lined and The Raincoat has 2 side pockets are a good size to hold all kinds of things, it covers the hips, and the hood is generous but doesn't overdo it.Attached Cotton Lined Hood with Adjustable Drawstrings give it a real styled look.",
  //     "category": "women's clothing",
  //     "image": "https://fakestoreapi.com/img/71HblAHs5xL._AC_UY879_-2t.png",
  //     "rating": {
  //       "rate": 3.8,
  //       "count": 679
  //     }
  //   },
  //   {
  //     "id": 18,
  //     "title": "MBJ Women's Solid Short Sleeve Boat Neck V ",
  //     "price": 9.85,
  //     "description": "95% RAYON 5% SPANDEX, Made in USA or Imported, Do Not Bleach, Lightweight fabric with great stretch for comfort, Ribbed on sleeves and neckline / Double stitching on bottom hem",
  //     "category": "women's clothing",
  //     "image": "https://fakestoreapi.com/img/71z3kpMAYsL._AC_UY879_t.png",
  //     "rating": {
  //       "rate": 4.7,
  //       "count": 130
  //     }
  //   },
  //   {
  //     "id": 19,
  //     "title": "Opna Women's Short Sleeve Moisture",
  //     "price": 7.95,
  //     "description": "100% Polyester, Machine wash, 100% cationic polyester interlock, Machine Wash & Pre Shrunk for a Great Fit, Lightweight, roomy and highly breathable with moisture wicking fabric which helps to keep moisture away, Soft Lightweight Fabric with comfortable V-neck collar and a slimmer fit, delivers a sleek, more feminine silhouette and Added Comfort",
  //     "category": "women's clothing",
  //     "image": "https://fakestoreapi.com/img/51eg55uWmdL._AC_UX679_t.png",
  //     "rating": {
  //       "rate": 4.5,
  //       "count": 146
  //     }
  //   },
  //   {
  //     "id": 20,
  //     "title": "DANVOUY Womens T Shirt Casual Cotton Short",
  //     "price": 12.99,
  //     "description": "95%Cotton,5%Spandex, Features: Casual, Short Sleeve, Letter Print,V-Neck,Fashion Tees, The fabric is soft and has some stretch., Occasion: Casual/Office/Beach/School/Home/Street. Season: Spring,Summer,Autumn,Winter.",
  //     "category": "women's clothing",
  //     "image": "https://fakestoreapi.com/img/61pHAEJ4NML._AC_UX679_t.png",
  //     "rating": {
  //       "rate": 3.6,
  //       "count": 145
  //     }
  //   }
  // ]
  const datas = [
    {
      "id": 115,
      "title": "Sleek Wireless Computer Mouse",
      "slug": "sleek-wireless-computer-mouse",
      "price": 10,
      "description": "Experience smooth and precise navigation with this modern wireless mouse, featuring a glossy finish and a comfortable ergonomic design. Its responsive tracking and easy-to-use interface make it the perfect accessory for any desktop or laptop setup. The stylish blue hue adds a splash of color to your workspace, while its compact size ensures it fits neatly in your bag for on-the-go productivity.",
      "category": {
        "id": 24,
        "name": "Electronics",
        "slug": "electronics",
        "image": "https://i.imgur.com/ZANVnHE.jpeg",
        "creationAt": "2025-11-04T14:37:22.000Z",
        "updatedAt": "2025-11-04T14:37:22.000Z"
      },
      "images": [
        "https://i.imgur.com/w3Y8NwQ.jpeg",
        "https://i.imgur.com/WJFOGIC.jpeg",
        "https://i.imgur.com/dV4Nklf.jpeg"
      ],
      "creationAt": "2025-11-04T14:37:27.000Z",
      "updatedAt": "2025-11-04T14:37:27.000Z"
    },
    {
      "id": 116,
      "title": "Sleek Modern Laptop with Ambient Lighting",
      "slug": "sleek-modern-laptop-with-ambient-lighting",
      "price": 43,
      "description": "Experience next-level computing with our ultra-slim laptop, featuring a stunning display illuminated by ambient lighting. This high-performance machine is perfect for both work and play, delivering powerful processing in a sleek, portable design. The vibrant colors add a touch of personality to your tech collection, making it as stylish as it is functional.",
      "category": {
        "id": 24,
        "name": "Electronics",
        "slug": "electronics",
        "image": "https://i.imgur.com/ZANVnHE.jpeg",
        "creationAt": "2025-11-04T14:37:22.000Z",
        "updatedAt": "2025-11-04T14:37:22.000Z"
      },
      "images": [
        "https://i.imgur.com/OKn1KFI.jpeg",
        "https://i.imgur.com/G4f21Ai.jpeg",
        "https://i.imgur.com/Z9oKRVJ.jpeg"
      ],
      "creationAt": "2025-11-04T14:37:27.000Z",
      "updatedAt": "2025-11-04T14:37:27.000Z"
    },
    {
      "id": 117,
      "title": "Stylish Red & Silver Over-Ear Headphones",
      "slug": "stylish-red-silver-over-ear-headphones",
      "price": 39,
      "description": "Immerse yourself in superior sound quality with these sleek red and silver over-ear headphones. Designed for comfort and style, the headphones feature cushioned ear cups, an adjustable padded headband, and a detachable red cable for easy storage and portability. Perfect for music lovers and audiophiles who value both appearance and audio fidelity.",
      "category": {
        "id": 24,
        "name": "Electronics",
        "slug": "electronics",
        "image": "https://i.imgur.com/ZANVnHE.jpeg",
        "creationAt": "2025-11-04T14:37:22.000Z",
        "updatedAt": "2025-11-04T14:37:22.000Z"
      },
      "images": [
        "https://i.imgur.com/YaSqa06.jpeg",
        "https://i.imgur.com/isQAliJ.jpeg",
        "https://i.imgur.com/5B8UQfh.jpeg"
      ],
      "creationAt": "2025-11-04T14:37:27.000Z",
      "updatedAt": "2025-11-04T14:37:27.000Z"
    },
    {
      "id": 118,
      "title": "Sleek Modern Laptop for Professionals",
      "slug": "sleek-modern-laptop-for-professionals",
      "price": 97,
      "description": "Experience cutting-edge technology and elegant design with our latest laptop model. Perfect for professionals on-the-go, this high-performance laptop boasts a powerful processor, ample storage, and a long-lasting battery life, all encased in a lightweight, slim frame for ultimate portability. Shop now to elevate your work and play.",
      "category": {
        "id": 24,
        "name": "Electronics",
        "slug": "electronics",
        "image": "https://i.imgur.com/ZANVnHE.jpeg",
        "creationAt": "2025-11-04T14:37:22.000Z",
        "updatedAt": "2025-11-04T14:37:22.000Z"
      },
      "images": [
        "https://i.imgur.com/ItHcq7o.jpeg",
        "https://i.imgur.com/55GM3XZ.jpeg",
        "https://i.imgur.com/tcNJxoW.jpeg"
      ],
      "creationAt": "2025-11-04T14:37:27.000Z",
      "updatedAt": "2025-11-04T14:37:27.000Z"
    },
    {
      "id": 119,
      "title": "Sleek Smartwatch with Vibrant Display",
      "slug": "sleek-smartwatch-with-vibrant-display",
      "price": 16,
      "description": "Experience modern timekeeping with our high-tech smartwatch, featuring a vivid touch screen display, customizable watch faces, and a comfortable blue silicone strap. This smartwatch keeps you connected with notifications and fitness tracking while showcasing exceptional style and versatility.",
      "category": {
        "id": 24,
        "name": "Electronics",
        "slug": "electronics",
        "image": "https://i.imgur.com/ZANVnHE.jpeg",
        "creationAt": "2025-11-04T14:37:22.000Z",
        "updatedAt": "2025-11-04T14:37:22.000Z"
      },
      "images": [
        "https://i.imgur.com/LGk9Jn2.jpeg",
        "https://i.imgur.com/1ttYWaI.jpeg",
        "https://i.imgur.com/sPRWnJH.jpeg"
      ],
      "creationAt": "2025-11-04T14:37:27.000Z",
      "updatedAt": "2025-11-04T14:37:27.000Z"
    },
    {
      "id": 120,
      "title": "Sleek Mirror Finish Phone Case",
      "slug": "sleek-mirror-finish-phone-case",
      "price": 27,
      "description": "Enhance your smartphone's look with this ultra-sleek mirror finish phone case. Designed to offer style with protection, the case features a reflective surface that adds a touch of elegance while keeping your device safe from scratches and impacts. Perfect for those who love a minimalist and modern aesthetic.",
      "category": {
        "id": 24,
        "name": "Electronics",
        "slug": "electronics",
        "image": "https://i.imgur.com/ZANVnHE.jpeg",
        "creationAt": "2025-11-04T14:37:22.000Z",
        "updatedAt": "2025-11-04T14:37:22.000Z"
      },
      "images": [
        "https://i.imgur.com/yb9UQKL.jpeg",
        "https://i.imgur.com/m2owtQG.jpeg",
        "https://i.imgur.com/bNiORct.jpeg"
      ],
      "creationAt": "2025-11-04T14:37:27.000Z",
      "updatedAt": "2025-11-04T14:37:27.000Z"
    },
    {
      "id": 121,
      "title": "Sleek Modern Leather Sofa",
      "slug": "sleek-modern-leather-sofa",
      "price": 53,
      "description": "Enhance the elegance of your living space with our Sleek Modern Leather Sofa. Designed with a minimalist aesthetic, it features clean lines and a luxurious leather finish. The robust metal legs provide stability and support, while the plush cushions ensure comfort. Perfect for contemporary homes or office waiting areas, this sofa is a statement piece that combines style with practicality.",
      "category": {
        "id": 25,
        "name": "Furniture",
        "slug": "furniture",
        "image": "https://i.imgur.com/Qphac99.jpeg",
        "creationAt": "2025-11-04T14:37:23.000Z",
        "updatedAt": "2025-11-04T14:37:23.000Z"
      },
      "images": [
        "https://i.imgur.com/Qphac99.jpeg",
        "https://i.imgur.com/dJjpEgG.jpeg",
        "https://i.imgur.com/MxJyADq.jpeg"
      ],
      "creationAt": "2025-11-04T14:37:27.000Z",
      "updatedAt": "2025-11-04T14:37:27.000Z"
    },
    {
      "id": 122,
      "title": "Mid-Century Modern Wooden Dining Table",
      "slug": "mid-century-modern-wooden-dining-table",
      "price": 24,
      "description": "Elevate your dining room with this sleek Mid-Century Modern dining table, featuring an elegant walnut finish and tapered legs for a timeless aesthetic. Its sturdy wood construction and minimalist design make it a versatile piece that fits with a variety of decor styles. Perfect for intimate dinners or as a stylish spot for your morning coffee.",
      "category": {
        "id": 25,
        "name": "Furniture",
        "slug": "furniture",
        "image": "https://i.imgur.com/Qphac99.jpeg",
        "creationAt": "2025-11-04T14:37:23.000Z",
        "updatedAt": "2025-11-04T14:37:23.000Z"
      },
      "images": [
        "https://i.imgur.com/DMQHGA0.jpeg",
        "https://i.imgur.com/qrs9QBg.jpeg",
        "https://i.imgur.com/XVp8T1I.jpeg"
      ],
      "creationAt": "2025-11-04T14:37:28.000Z",
      "updatedAt": "2025-11-04T14:37:28.000Z"
    },
    {
      "id": 123,
      "title": "Modern Elegance Teal Armchair",
      "slug": "modern-elegance-teal-armchair",
      "price": 25,
      "description": "Elevate your living space with this beautifully crafted armchair, featuring a sleek wooden frame that complements its vibrant teal upholstery. Ideal for adding a pop of color and contemporary style to any room, this chair provides both superb comfort and sophisticated design. Perfect for reading, relaxing, or creating a cozy conversation nook.",
      "category": {
        "id": 25,
        "name": "Furniture",
        "slug": "furniture",
        "image": "https://i.imgur.com/Qphac99.jpeg",
        "creationAt": "2025-11-04T14:37:23.000Z",
        "updatedAt": "2025-11-04T14:37:23.000Z"
      },
      "images": [
        "https://i.imgur.com/6wkyyIN.jpeg",
        "https://i.imgur.com/Ald3Rec.jpeg",
        "https://i.imgur.com/dIqo03c.jpeg"
      ],
      "creationAt": "2025-11-04T14:37:28.000Z",
      "updatedAt": "2025-11-04T14:37:28.000Z"
    },
    {
      "id": 124,
      "title": "Elegant Solid Wood Dining Table",
      "slug": "elegant-solid-wood-dining-table",
      "price": 67,
      "description": "Enhance your dining space with this sleek, contemporary dining table, crafted from high-quality solid wood with a warm finish. Its sturdy construction and minimalist design make it a perfect addition for any home looking for a touch of elegance. Accommodates up to six guests comfortably and includes a striking fruit bowl centerpiece. The overhead lighting is not included.",
      "category": {
        "id": 25,
        "name": "Furniture",
        "slug": "furniture",
        "image": "https://i.imgur.com/Qphac99.jpeg",
        "creationAt": "2025-11-04T14:37:23.000Z",
        "updatedAt": "2025-11-04T14:37:23.000Z"
      },
      "images": [
        "https://i.imgur.com/4lTaHfF.jpeg",
        "https://i.imgur.com/JktHE1C.jpeg",
        "https://i.imgur.com/cQeXQMi.jpeg"
      ],
      "creationAt": "2025-11-04T14:37:28.000Z",
      "updatedAt": "2025-11-04T14:37:28.000Z"
    },
    {
      "id": 125,
      "title": "Modern Minimalist Workstation Setup",
      "slug": "modern-minimalist-workstation-setup",
      "price": 49,
      "description": "Elevate your home office with our Modern Minimalist Workstation Setup, featuring a sleek wooden desk topped with an elegant computer, stylish adjustable wooden desk lamp, and complimentary accessories for a clean, productive workspace. This setup is perfect for professionals seeking a contemporary look that combines functionality with design.",
      "category": {
        "id": 25,
        "name": "Furniture",
        "slug": "furniture",
        "image": "https://i.imgur.com/Qphac99.jpeg",
        "creationAt": "2025-11-04T14:37:23.000Z",
        "updatedAt": "2025-11-04T14:37:23.000Z"
      },
      "images": [
        "https://i.imgur.com/3oXNBst.jpeg",
        "https://i.imgur.com/ErYYZnT.jpeg",
        "https://i.imgur.com/boBPwYW.jpeg"
      ],
      "creationAt": "2025-11-04T14:37:28.000Z",
      "updatedAt": "2025-11-04T14:37:28.000Z"
    },
    {
      "id": 126,
      "title": "Futuristic Holographic Soccer Cleats",
      "slug": "futuristic-holographic-soccer-cleats",
      "price": 39,
      "description": "Step onto the field and stand out from the crowd with these eye-catching holographic soccer cleats. Designed for the modern player, these cleats feature a sleek silhouette, lightweight construction for maximum agility, and durable studs for optimal traction. The shimmering holographic finish reflects a rainbow of colors as you move, ensuring that you'll be noticed for both your skills and style. Perfect for the fashion-forward athlete who wants to make a statement.",
      "category": {
        "id": 26,
        "name": "Shoes",
        "slug": "shoes",
        "image": "https://i.imgur.com/qNOjJje.jpeg",
        "creationAt": "2025-11-04T14:37:23.000Z",
        "updatedAt": "2025-11-04T14:37:23.000Z"
      },
      "images": [
        "https://i.imgur.com/qNOjJje.jpeg",
        "https://i.imgur.com/NjfCFnu.jpeg",
        "https://i.imgur.com/eYtvXS1.jpeg"
      ],
      "creationAt": "2025-11-04T14:37:28.000Z",
      "updatedAt": "2025-11-04T14:37:28.000Z"
    },
    {
      "id": 128,
      "title": "Modern Ergonomic Office Chair",
      "slug": "modern-ergonomic-office-chair",
      "price": 71,
      "description": "Elevate your office space with this sleek and comfortable Modern Ergonomic Office Chair. Designed to provide optimal support throughout the workday, it features an adjustable height mechanism, smooth-rolling casters for easy mobility, and a cushioned seat for extended comfort. The clean lines and minimalist white design make it a versatile addition to any contemporary workspace.",
      "category": {
        "id": 25,
        "name": "Furniture",
        "slug": "furniture",
        "image": "https://i.imgur.com/Qphac99.jpeg",
        "creationAt": "2025-11-04T14:37:23.000Z",
        "updatedAt": "2025-11-04T14:37:23.000Z"
      },
      "images": [
        "https://i.imgur.com/3dU0m72.jpeg",
        "https://i.imgur.com/zPU3EVa.jpeg"
      ],
      "creationAt": "2025-11-04T14:37:28.000Z",
      "updatedAt": "2025-11-04T14:37:28.000Z"
    },
    {
      "id": 129,
      "title": "Chic Summer Denim Espadrille Sandals",
      "slug": "chic-summer-denim-espadrille-sandals",
      "price": 33,
      "description": "Step into summer with style in our denim espadrille sandals. Featuring a braided jute sole for a classic touch and adjustable denim straps for a snug fit, these sandals offer both comfort and a fashionable edge. The easy slip-on design ensures convenience for beach days or casual outings.",
      "category": {
        "id": 26,
        "name": "Shoes",
        "slug": "shoes",
        "image": "https://i.imgur.com/qNOjJje.jpeg",
        "creationAt": "2025-11-04T14:37:23.000Z",
        "updatedAt": "2025-11-04T14:37:23.000Z"
      },
      "images": [
        "https://i.imgur.com/9qrmE1b.jpeg",
        "https://i.imgur.com/wqKxBVH.jpeg",
        "https://i.imgur.com/sWSV6DK.jpeg"
      ],
      "creationAt": "2025-11-04T14:37:28.000Z",
      "updatedAt": "2025-11-04T14:37:28.000Z"
    },
    {
      "id": 130,
      "title": "Vibrant Runners: Bold Orange & Blue Sneakers",
      "slug": "vibrant-runners-bold-orange-blue-sneakers",
      "price": 27,
      "description": "Step into style with these eye-catching sneakers featuring a striking combination of orange and blue hues. Designed for both comfort and fashion, these shoes come with flexible soles and cushioned insoles, perfect for active individuals who don't compromise on style. The reflective silver accents add a touch of modernity, making them a standout accessory for your workout or casual wear.",
      "category": {
        "id": 26,
        "name": "Shoes",
        "slug": "shoes",
        "image": "https://i.imgur.com/qNOjJje.jpeg",
        "creationAt": "2025-11-04T14:37:23.000Z",
        "updatedAt": "2025-11-04T14:37:23.000Z"
      },
      "images": [
        "https://i.imgur.com/hKcMNJs.jpeg",
        "https://i.imgur.com/NYToymX.jpeg",
        "https://i.imgur.com/HiiapCt.jpeg"
      ],
      "creationAt": "2025-11-04T14:37:28.000Z",
      "updatedAt": "2025-11-04T14:37:28.000Z"
    },
    {
      "id": 131,
      "title": "Futuristic Silver and Gold High-Top Sneaker",
      "slug": "futuristic-silver-and-gold-high-top-sneaker",
      "price": 68,
      "description": "Step into the future with this eye-catching high-top sneaker, designed for those who dare to stand out. The sneaker features a sleek silver body with striking gold accents, offering a modern twist on classic footwear. Its high-top design provides support and style, making it the perfect addition to any avant-garde fashion collection. Grab a pair today and elevate your shoe game!",
      "category": {
        "id": 26,
        "name": "Shoes",
        "slug": "shoes",
        "image": "https://i.imgur.com/qNOjJje.jpeg",
        "creationAt": "2025-11-04T14:37:23.000Z",
        "updatedAt": "2025-11-04T14:37:23.000Z"
      },
      "images": [
        "https://i.imgur.com/npLfCGq.jpeg",
        "https://i.imgur.com/vYim3gj.jpeg",
        "https://i.imgur.com/HxuHwBO.jpeg"
      ],
      "creationAt": "2025-11-04T14:37:29.000Z",
      "updatedAt": "2025-11-04T14:37:29.000Z"
    },
    {
      "id": 133,
      "title": "Futuristic Chic High-Heel Boots",
      "slug": "futuristic-chic-high-heel-boots",
      "price": 36,
      "description": "Elevate your style with our cutting-edge high-heel boots that blend bold design with avant-garde aesthetics. These boots feature a unique color-block heel, a sleek silhouette, and a versatile light grey finish that pairs easily with any cutting-edge outfit. Crafted for the fashion-forward individual, these boots are sure to make a statement.",
      "category": {
        "id": 26,
        "name": "Shoes",
        "slug": "shoes",
        "image": "https://i.imgur.com/qNOjJje.jpeg",
        "creationAt": "2025-11-04T14:37:23.000Z",
        "updatedAt": "2025-11-04T14:37:23.000Z"
      },
      "images": [
        "https://i.imgur.com/HqYqLnW.jpeg",
        "https://i.imgur.com/RlDGnZw.jpeg",
        "https://i.imgur.com/qa0O6fg.jpeg"
      ],
      "creationAt": "2025-11-04T14:37:29.000Z",
      "updatedAt": "2025-11-04T14:37:29.000Z"
    },
    {
      "id": 134,
      "title": "Elegant Golden-Base Stone Top Dining Table",
      "slug": "elegant-golden-base-stone-top-dining-table",
      "price": 66,
      "description": "Elevate your dining space with this luxurious table, featuring a sturdy golden metal base with an intricate rod design that provides both stability and chic elegance. The smooth stone top in a sleek round shape offers a robust surface for your dining pleasure. Perfect for both everyday meals and special occasions, this table easily complements any modern or glam decor.",
      "category": {
        "id": 25,
        "name": "Furniture",
        "slug": "furniture",
        "image": "https://i.imgur.com/Qphac99.jpeg",
        "creationAt": "2025-11-04T14:37:23.000Z",
        "updatedAt": "2025-11-04T14:37:23.000Z"
      },
      "images": [
        "https://i.imgur.com/NWIJKUj.jpeg",
        "https://i.imgur.com/Jn1YSLk.jpeg",
        "https://i.imgur.com/VNZRvx5.jpeg"
      ],
      "creationAt": "2025-11-04T14:37:29.000Z",
      "updatedAt": "2025-11-04T14:37:29.000Z"
    },
    {
      "id": 135,
      "title": "Elegant Patent Leather Peep-Toe Pumps with Gold-Tone Heel",
      "slug": "elegant-patent-leather-peep-toe-pumps-with-gold-tone-heel",
      "price": 53,
      "description": "Step into sophistication with these chic peep-toe pumps, showcasing a lustrous patent leather finish and an eye-catching gold-tone block heel. The ornate buckle detail adds a touch of glamour, perfect for elevating your evening attire or complementing a polished daytime look.",
      "category": {
        "id": 26,
        "name": "Shoes",
        "slug": "shoes",
        "image": "https://i.imgur.com/qNOjJje.jpeg",
        "creationAt": "2025-11-04T14:37:23.000Z",
        "updatedAt": "2025-11-04T14:37:23.000Z"
      },
      "images": [
        "https://i.imgur.com/AzAY4Ed.jpeg",
        "https://i.imgur.com/umfnS9P.jpeg",
        "https://i.imgur.com/uFyuvLg.jpeg"
      ],
      "creationAt": "2025-11-04T14:37:29.000Z",
      "updatedAt": "2025-11-04T14:37:29.000Z"
    },
    {
      "id": 136,
      "title": "Classic Blue Suede Casual Shoes",
      "slug": "classic-blue-suede-casual-shoes",
      "price": 39,
      "description": "Step into comfort with our Classic Blue Suede Casual Shoes, perfect for everyday wear. These shoes feature a stylish blue suede upper, durable rubber soles for superior traction, and classic lace-up fronts for a snug fit. The sleek design pairs well with both jeans and chinos, making them a versatile addition to any wardrobe.",
      "category": {
        "id": 26,
        "name": "Shoes",
        "slug": "shoes",
        "image": "https://i.imgur.com/qNOjJje.jpeg",
        "creationAt": "2025-11-04T14:37:23.000Z",
        "updatedAt": "2025-11-04T14:37:23.000Z"
      },
      "images": [
        "https://i.imgur.com/sC0ztOB.jpeg",
        "https://i.imgur.com/Jf9DL9R.jpeg",
        "https://i.imgur.com/R1IN95T.jpeg"
      ],
      "creationAt": "2025-11-04T14:37:29.000Z",
      "updatedAt": "2025-11-04T14:37:29.000Z"
    },
    {
      "id": 137,
      "title": "Elegant Purple Leather Loafers",
      "slug": "elegant-purple-leather-loafers",
      "price": 17,
      "description": "Step into sophistication with our Elegant Purple Leather Loafers, perfect for making a bold statement. Crafted from high-quality leather with a vibrant purple finish, these shoes feature a classic loafer silhouette that's been updated with a contemporary twist. The comfortable slip-on design and durable soles ensure both style and functionality for the modern man.",
      "category": {
        "id": 26,
        "name": "Shoes",
        "slug": "shoes",
        "image": "https://i.imgur.com/qNOjJje.jpeg",
        "creationAt": "2025-11-04T14:37:23.000Z",
        "updatedAt": "2025-11-04T14:37:23.000Z"
      },
      "images": [
        "https://i.imgur.com/Au8J9sX.jpeg",
        "https://i.imgur.com/gdr8BW2.jpeg",
        "https://i.imgur.com/KDCZxnJ.jpeg"
      ],
      "creationAt": "2025-11-04T14:37:29.000Z",
      "updatedAt": "2025-11-04T14:37:29.000Z"
    },
    {
      "id": 138,
      "title": "Sleek Futuristic Electric Bicycle",
      "slug": "sleek-futuristic-electric-bicycle",
      "price": 22,
      "description": "This modern electric bicycle combines style and efficiency with its unique design and top-notch performance features. Equipped with a durable frame, enhanced battery life, and integrated tech capabilities, it's perfect for the eco-conscious commuter looking to navigate the city with ease.",
      "category": {
        "id": 27,
        "name": "Miscellaneous",
        "slug": "miscellaneous",
        "image": "https://i.imgur.com/BG8J0Fj.jpg",
        "creationAt": "2025-11-04T14:37:24.000Z",
        "updatedAt": "2025-11-04T14:37:24.000Z"
      },
      "images": [
        "https://i.imgur.com/BG8J0Fj.jpg",
        "https://i.imgur.com/ujHBpCX.jpg",
        "https://i.imgur.com/WHeVL9H.jpg"
      ],
      "creationAt": "2025-11-04T14:37:29.000Z",
      "updatedAt": "2025-11-04T14:37:29.000Z"
    },
    {
      "id": 139,
      "title": "Sleek All-Terrain Go-Kart",
      "slug": "sleek-all-terrain-go-kart",
      "price": 37,
      "description": "Experience the thrill of outdoor adventures with our Sleek All-Terrain Go-Kart, featuring a durable frame, comfortable racing seat, and robust, large-tread tires perfect for handling a variety of terrains. Designed for fun-seekers of all ages, this go-kart is an ideal choice for backyard racing or exploring local trails.",
      "category": {
        "id": 27,
        "name": "Miscellaneous",
        "slug": "miscellaneous",
        "image": "https://i.imgur.com/BG8J0Fj.jpg",
        "creationAt": "2025-11-04T14:37:24.000Z",
        "updatedAt": "2025-11-04T14:37:24.000Z"
      },
      "images": [
        "https://i.imgur.com/Ex5x3IU.jpg",
        "https://i.imgur.com/z7wAQwe.jpg",
        "https://i.imgur.com/kc0Dj9S.jpg"
      ],
      "creationAt": "2025-11-04T14:37:29.000Z",
      "updatedAt": "2025-11-04T14:37:29.000Z"
    },
    {
      "id": 140,
      "title": "Radiant Citrus Eau de Parfum",
      "slug": "radiant-citrus-eau-de-parfum",
      "price": 73,
      "description": "Indulge in the essence of summer with this vibrant citrus-scented Eau de Parfum. Encased in a sleek glass bottle with a bold orange cap, this fragrance embodies freshness and elegance. Perfect for daily wear, it's an olfactory delight that leaves a lasting, zesty impression.",
      "category": {
        "id": 27,
        "name": "Miscellaneous",
        "slug": "miscellaneous",
        "image": "https://i.imgur.com/BG8J0Fj.jpg",
        "creationAt": "2025-11-04T14:37:24.000Z",
        "updatedAt": "2025-11-04T14:37:24.000Z"
      },
      "images": [
        "https://i.imgur.com/xPDwUb3.jpg",
        "https://i.imgur.com/3rfp691.jpg",
        "https://i.imgur.com/kG05a29.jpg"
      ],
      "creationAt": "2025-11-04T14:37:30.000Z",
      "updatedAt": "2025-11-04T14:37:30.000Z"
    },
    {
      "id": 141,
      "title": "Chic Transparent Fashion Handbag",
      "slug": "chic-transparent-fashion-handbag",
      "price": 61,
      "description": "Elevate your style with our Chic Transparent Fashion Handbag, perfect for showcasing your essentials with a clear, modern edge. This trendy accessory features durable acrylic construction, luxe gold-tone hardware, and an elegant chain strap. Its compact size ensures you can carry your day-to-day items with ease and sophistication.",
      "category": {
        "id": 27,
        "name": "Miscellaneous",
        "slug": "miscellaneous",
        "image": "https://i.imgur.com/BG8J0Fj.jpg",
        "creationAt": "2025-11-04T14:37:24.000Z",
        "updatedAt": "2025-11-04T14:37:24.000Z"
      },
      "images": [
        "https://i.imgur.com/Lqaqz59.jpg",
        "https://i.imgur.com/uSqWK0m.jpg",
        "https://i.imgur.com/atWACf1.jpg"
      ],
      "creationAt": "2025-11-04T14:37:30.000Z",
      "updatedAt": "2025-11-04T14:37:30.000Z"
    },
    {
      "id": 142,
      "title": "Sleek Olive Green Hardshell Carry-On Luggage",
      "slug": "sleek-olive-green-hardshell-carry-on-luggage",
      "price": 48,
      "description": "Travel in style with our durable hardshell carry-on, perfect for weekend getaways and business trips. This sleek olive green suitcase features smooth gliding wheels for easy airport navigation, a sturdy telescopic handle, and a secure zippered compartment to keep your belongings safe. Its compact size meets most airline overhead bin requirements, ensuring a hassle-free flying experience.",
      "category": {
        "id": 27,
        "name": "Miscellaneous",
        "slug": "miscellaneous",
        "image": "https://i.imgur.com/BG8J0Fj.jpg",
        "creationAt": "2025-11-04T14:37:24.000Z",
        "updatedAt": "2025-11-04T14:37:24.000Z"
      },
      "images": [
        "https://i.imgur.com/jVfoZnP.jpg",
        "https://i.imgur.com/Tnl15XK.jpg",
        "https://i.imgur.com/7OqTPO6.jpg"
      ],
      "creationAt": "2025-11-04T14:37:30.000Z",
      "updatedAt": "2025-11-04T14:37:30.000Z"
    },
    {
      "id": 143,
      "title": "Trendy Pink-Tinted Sunglasses",
      "slug": "trendy-pink-tinted-sunglasses",
      "price": 38,
      "description": "Step up your style game with these fashionable black-framed, pink-tinted sunglasses. Perfect for making a statement while protecting your eyes from the glare. Their bold color and contemporary design make these shades a must-have accessory for any trendsetter looking to add a pop of color to their ensemble.",
      "category": {
        "id": 27,
        "name": "Miscellaneous",
        "slug": "miscellaneous",
        "image": "https://i.imgur.com/BG8J0Fj.jpg",
        "creationAt": "2025-11-04T14:37:24.000Z",
        "updatedAt": "2025-11-04T14:37:24.000Z"
      },
      "images": [
        "https://i.imgur.com/0qQBkxX.jpg",
        "https://i.imgur.com/I5g1DoE.jpg",
        "https://i.imgur.com/myfFQBW.jpg"
      ],
      "creationAt": "2025-11-04T14:37:30.000Z",
      "updatedAt": "2025-11-04T14:37:30.000Z"
    },
    {
      "id": 144,
      "title": "Elegant Glass Tumbler Set",
      "slug": "elegant-glass-tumbler-set",
      "price": 50,
      "description": "Enhance your drinkware collection with our sophisticated set of glass tumblers, perfect for serving your favorite beverages. This versatile set includes both clear and subtly tinted glasses, lending a modern touch to any table setting. Crafted with quality materials, these durable tumblers are designed to withstand daily use while maintaining their elegant appeal.",
      "category": {
        "id": 27,
        "name": "Miscellaneous",
        "slug": "miscellaneous",
        "image": "https://i.imgur.com/BG8J0Fj.jpg",
        "creationAt": "2025-11-04T14:37:24.000Z",
        "updatedAt": "2025-11-04T14:37:24.000Z"
      },
      "images": [
        "https://i.imgur.com/TF0pXdL.jpg",
        "https://i.imgur.com/BLDByXP.jpg",
        "https://i.imgur.com/b7trwCv.jpg"
      ],
      "creationAt": "2025-11-04T14:37:30.000Z",
      "updatedAt": "2025-11-04T14:37:30.000Z"
    }
  ]


  return (
    <div>
      {/* <p>{a}</p>
      <p>{productName}</p>
      <p>{productPrice}</p>
      <p>{products[3]}</p>
      <p>{products.length}</p>
      <p>{products}</p>
      <p>{products}</p> */}

      {/* MAPPING */}
      <section>
        <Container>
          <Row>
            {/* {
              productions.map((production, index) => {
                return (
                  <Col>
                    <Card style={{ width: '18rem' }}>
                      <Card.Img variant="top" src={production.images} />
                      <Card.Body>
                        <Card.Title>{production.meta}</Card.Title>
                        <Card.Text>
                          <p>{production.thumbnail}</p>
                        </Card.Text>
                        <Button variant="primary">Go somewhere</Button>
                      </Card.Body>
                    </Card>
                  </Col>
                )
              })
            } */}

            {/* <ul>
                {

                  products.map((product, index) => {
                    return (
                      <li key={index}>{product.productPrice}</li>
                    );
                  })
                }
              </ul>
              <table>
                <tr>
                  <th>Name</th>
                  <th>Price</th>
                  <th>id</th>
                </tr>
                {
                  products.map((product, index) => {
                    return (
                      <tr>
                        <td>{product.productName}</td>
                        <td>{product.productPrice}</td>
                        <td>{product.id}</td>
                      </tr>
                    )
                  })
                }
              </table> */}
            {/* <Table>
                <thead>
                  <tr>
                    <th>Name</th>
                    <th>Price</th>
                    <th>id</th>
                  </tr>
                </thead>
                <tbody>
                  {
                    products.map((product, index) => {
                      return (
                        <tr>
                          <td>{product.productName}</td>
                          <td>{product.productPrice}</td>
                          <td>{product.id}</td>
                        </tr>
                      )
                    })
                  }
                </tbody>
              </Table> */}

            {/* Notice data */}

            {/* <Table cellSpacing={0} border={1} striped bordered>
                <thead>
                  <tr>
                    <th>Sl.</th>
                    <th>Notice Title</th>
                    
                  </tr>
                </thead>
                <tbody>
                  {
                    notices.map((notice, index) => {
                      return (
                        <tr>
                          <td>{index+1}</td>
                          <td>{notice.title}</td>
                          <td>{notice.id}</td> 
                        </tr>
                      )
                    })
                  }
                </tbody>
              </Table> */}

            {/* {
              products.map((product, index) => {
                return (
                  <Col>
                    <Card style={{ width: '18rem' }}>
                      <Card.Img variant="top" src={product.image} />
                      <Card.Body>
                        <Card.Title>{product.title}</Card.Title>
                        <Card.Text>
                        
                        
                          <p>Rs {product.price}</p>
                        </Card.Text>
                        <Button variant="primary">Buy Now</Button>
                      </Card.Body>
                    </Card>
                  </Col>
                )
              })
            } */}
            {/* {
              datas.map((data, index) => {
                return (
                  <Col>
                    <ListGroup>
                      <ListGroup.Item>{data.userId}</ListGroup.Item>
                      <ListGroup.Item>{data.id}</ListGroup.Item>
                      <ListGroup.Item>{data.title}</ListGroup.Item>
                      <ListGroup.Item></ListGroup.Item>
                      <ListGroup.Item>Vestibulum at eros</ListGroup.Item>
                    </ListGroup>
                  </Col>
                )
              })
            } */}
            {/* <Col>
              <p>{count}</p>
              <button onClick={increase}>+</button>&nbsp;&nbsp;
              <button onClick={decrease}>-</button>

            </Col>
            <Col>
              <p>{add}</p>
              <button onClick={addition}>+</button>&nbsp;&nbsp;
              <button onClick={subtraction}>-</button>

            </Col> */}


            {
              datas.map((data, index) => {
                return (
                  <Col>
                    <Card style={{ width: '18rem' }}>
                      <Card.Img variant="top" src={data.images} />
                      <Card.Body>
                        <Card.Title>{data.title}</Card.Title>
                        <Card.Text>
                          <p>Rs {data.price}</p>
                          <Accordion>
                            <Accordion.Item eventKey="0">
                              <Accordion.Header>Description</Accordion.Header>
                              <Accordion.Body>
                                {data.description}
                              </Accordion.Body>
                            </Accordion.Item>

                          </Accordion>
                        </Card.Text>
                        <Button variant="primary">Buy Now</Button>
                      </Card.Body>
                    </Card>
                  </Col>
                )
              })
            }
          </Row>
        </Container>
      </section>
      <section>
        <Container>
          <Row>
            <Col>
              {/* <p>{isLogin ? "successfully Login" : "successfully Logout"}</p>
              <p>{isLogin ? "Yes":"No"}</p>
              <p>{isLogin ? <IoIosLogIn />:<IoIosLogOut />}</p>
              <p>{isLogin ? <Alert variant='success'>Successfully Login</Alert>:<Alert variant='danger'>Login failed</Alert>}</p> */}

              <p>{setStatus ? <Alert variant='success'><Button onClick={changeStatus}>Test</Button>Status</Alert> : <Alert variant='danger'>Status2</Alert>}</p>
              <button onClick={addition}>+</button>&nbsp;&nbsp;
              <button onClick={subtraction}>-</button>


              {isLogin ? <Alert variant='success'><IoIosLogIn />Successfully login</Alert> :
                <Alert variant='failed'><IoIosLogOut />
                  Successfully failed</Alert>}


            </Col>
          </Row>
        </Container>
      </section>

    </div>
  )
}

export default Test
