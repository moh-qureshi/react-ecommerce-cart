import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import { Header } from './components/Header';
import { Home } from './components/Home';
import { Cart } from './components/Cart';
import React from 'react';

function App() {
  return (
    <BrowserRouter>
      <Header />
      <div>
      <Routes>
          <Route path="/" element={<Home />} exact/>
          <Route path="/cart" element={<Cart />} exact/>
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
