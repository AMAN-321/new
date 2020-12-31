import React from 'react';
import {Switch,Route} from 'react-router-dom';
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import NavBar from './comonents/nav/NavBar';
import Home from './pages/Home';
import 'bootstrap/dist/css/bootstrap.min.css';
import BlogDetails from './pages/Blog-details';
import Blog from './pages/Blog';
import Checkout from './pages/Checkout';
import Contact from './pages/Contact';
import ProductDetails from './pages/ProductDetails';
import Shop from './pages/Shop';
import ShopCart from './pages/ShopCart';


import 'owl.carousel/dist/assets/owl.carousel.css';  
import 'owl.carousel/dist/assets/owl.theme.default.css';
import Register from './pages/auth/Register';
import RegisterComplete from './pages/auth/RegisterComplete'

const App=()=> {
  return (
    <>
     <ToastContainer />
    <Switch>
   <Route exact path='/' component={Home}/>
   <Route exact path='/blog-details' component={BlogDetails}/>
   <Route exact path='/blog' component={Blog}/>
   <Route exact path='/checkout' component={Checkout}/>
   <Route exact path='/contact' component={Contact}/>
   <Route exact path='/product-details' component={ProductDetails}/>
   <Route exact path='/shop' component={Shop}/>
   <Route exact path='/shopcart' component={ShopCart}/>
   <Route exact path='/register' component={Register}/>
   <Route exact path='/register/complete' component={RegisterComplete}/>

    </Switch>

</>
      
  );
}

export default App;
