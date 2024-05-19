// import logo from './logo.svg';
import './App.css';
import React from 'react';
import SellerPage from './components/SellerPage';
import {
  BrowserRouter as Navigation,
  Routes,
  Route,BrowserRouter,
  NavLink
} from "react-router-dom";
import BuyerPage from './components/BuyerPage';
import LoginPage from './components/LoginPage';

function App() {
  return (
    <div className="App">
     <BrowserRouter>
     <div className='header'>
        <NavLink to="/">Seller</NavLink>
        <NavLink to="/Buy">Buyer</NavLink>
        <NavLink to="/Login">Login</NavLink>
      </div>
      <Routes>
        <Route path='/' element={<SellerPage/>}/>
        <Route path='/Buy' element={<BuyerPage/>}/>
        <Route path='/Login' element={<LoginPage/>}/>
      </Routes>
     </BrowserRouter>
    </div>
  );
}

export default App;
