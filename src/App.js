
import './App.css';
import Footer from './Footer';
import Header from './Header';
import 'bootstrap/dist/css/bootstrap.min.css';
import './Footer.css';
import './Home.css';
import { Route, Routes } from 'react-router';
import Home from './Home';
import About from './About';
import Contact from './Contact';
import Dashboard from './Dashboard';
import Trial from './Trial';
import Test from './Test';
import Product1 from './Product1';
import './Product1.css';
import './Myproducts';
import Myproducts from './Myproducts';
import Men from './Men';
import './common-for-all.css';
import Notices from './Notices';
import Todos from './Todos';
import Product2 from './Product2';
import Test1 from './Test1';
import Order from './Order';
import Register from './Register';
import Cart from './Cart';
import Women from './Women';
import Login from './Login';
import './Register.css';
import Smartwatch from './Smartwatch';
import Gifting from './Gifting';
import Brand from './Brand';
import Service from './Service';
import Slide from './Slide';
import Slide2 from './Slide2';
import Account from './Account';
import AddProduct from './AddProduct';
import Address1 from './Address1';
import Category from './Category';
import Wishlist from './Wishlist';
import AddCategory from './AddCategory';


function App() {
  return (
    <div>
      <Header></Header>
      <Routes>
        {/* localhost:3000 */}
        <Route path='' element={<Home/>}/>
        {/* localhost:3000/About */}
        <Route path='/About' element={<About/>}/>
        {/* localhost:3000/Contact */}
        <Route path='/Contact' element={<Contact/>}/>
        {/* localhost:3000/Dashboard */}
        <Route path='/Dashboard' element={<Dashboard/>}/>
        {/* localhost:3000/Test */}
        <Route path='/Test' element={<Test/>}/>
        {/* localhost:3000/Product1 */}
        <Route path='/Product1' element={<Product1/>}/>
        {/* localhost:3000/Myproducts */}
        <Route path='/Myproducts' element={<Myproducts/>}/>
        {/* localhost:3000/Myproducts */}
        <Route path='/Men' element={<Men/>}/>
        <Route path='/Notices' element={<Notices/>}/>
        <Route path='/Todos' element={<Todos/>}/>
        <Route path='/Product2' element={<Product2/>}/>
        <Route path='/Test1' element={<Test1/>}/>
        <Route path='/Order' element={<Order/>}/>
        <Route path='/Register' element={<Register/>}/>
        <Route path='/Cart' element={<Cart/>}/>
        <Route path='/Women' element={<Women/>}/>
        <Route path='/Login' element={<Login/>}/>
        <Route path='/Smartwatch' element={<Smartwatch/>}/>
        <Route path='/Gifting' element={<Gifting/>}/>
        <Route path='/Brand' element={<Brand/>}/>
        <Route path='/Service' element={<Service/>}/>
        <Route path='/Slide' element={<Slide/>}/>
        <Route path='/Slide2' element={<Slide2/>}/>
        <Route path='/Account' element={<Account/>}/>
        <Route path='/Addproduct' element={<AddProduct/>}/>
        <Route path='/Address1' element={<Address1/>}/>
        <Route path='/Category' element={<Category/>}/>
        <Route path='/Wishlist' element={<Wishlist/>}/>
        <Route path='/AddCategory' element={<AddCategory/>}/>

      </Routes>
      {/* <Men></Men> */}
      <Footer></Footer>
      {/* <Trial></Trial> */}
    </div>
  );
}

export default App;
