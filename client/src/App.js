import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './styles.css';
import Navbar from './components/Navbar';
import Login from './components/auth/Login';
import Signup from './components/auth/Signup';
import ProductForm from './components/seller/ProductForm';
import ProductList from './components/seller/ProductList';
import Products from './components/buyer/Products';
import Cart from './components/buyer/Cart';

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <Routes>
          {/* Authentication Routes */}
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />

          {/* Seller Routes */}
          <Route path="/seller/add-product" element={<ProductForm />} />
          <Route path="/seller/products" element={<ProductList />} />

          {/* Buyer Routes */}
          <Route path="/search" element={<Products />} />
          <Route path="/cart" element={<Cart />} />

          {/* Default Route */}
          <Route path="/" element={<h1>Welcome to E-Commerce</h1>} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
