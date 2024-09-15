import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './styles.css';
import Home from './components/Home';
import Navbar from './components/Navbar';
import Login from './components/auth/Login';
import Signup from './components/auth/Signup';
import ProductForm from './components/seller/ProductForm';
import ProductList from './components/seller/ProductList';
import Products from './components/buyer/Products';
import Cart from './components/buyer/Cart';
import SellerProductManagement from './components/seller/SellerProductManagement';

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <Routes>
          {/* Authentication Routes */}
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />

          {/* Seller Routes */}
          <Route path="/seller/add-product" element={<ProductForm />} />
          <Route path="/seller/products" element={<SellerProductManagement />} />
          {/* <Route path="/seller/products" element={<ProductList />} /> */}

          {/* Buyer Routes */}
          <Route path="/search" element={<Products />} />
          <Route path="/cart" element={<Cart />} />


        </Routes>
      </div>
    </Router>
  );
}

export default App;
