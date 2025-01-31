import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import HomeFactory from '../factories/pages/home/HomeFactory';
import LoginFactory from '../factories/pages/login/LoginFactory';
import CartFactory from '../factories/pages/cart/CartFactory';
import CheckoutFactory from '../factories/pages/checkout/CheckoutFactory';

const AppRouter = () => {
  return (
    <Router>
      <Routes>
        <Route path="/home" Component={HomeFactory} />
        <Route path="/" Component={LoginFactory} />
        <Route path='/cart' Component={CartFactory}/>
        <Route path='/checkout' Component={CheckoutFactory}/>
      </Routes>
    </Router>
  );
};

export default AppRouter;