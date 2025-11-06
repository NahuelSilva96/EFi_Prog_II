import React from 'react';
import StoreNav from './components/StoreNav';
import ProductDetail from './components/ProductDetail';
import Store from './pages/Store';
import { Route, Routes } from 'react-router-dom';
import './styles/store.css';

function AppStore() {
  return (
      <div className='app-store'>
        <StoreNav />
        <Routes>
          <Route path="" element={<Store />} />
          <Route path="product/:id" element={<ProductDetail />} />
        </Routes>
      </div>
  );
}

export default AppStore;
